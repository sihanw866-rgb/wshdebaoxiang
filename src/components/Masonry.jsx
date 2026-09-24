import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Masonry.css'

/* 基于 React Bits Masonry（JS + CSS）适配：
   - 列布局带 gap；每格高度直接给定「裁剪比例」，图片 object-fit: cover 只裁剪、不拉伸
   - 入场：滚动进入视口后，从下方带模糊、按乱序不规律依次浮现
   - 点击改为 onOpen 回调（站内放大查看），不再 window.open */

const useMedia = (queries, values, defaultValue) => {
  const get = () => {
    if (typeof window === 'undefined') return defaultValue
    return values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue
  }
  const [value, setValue] = useState(get)
  useEffect(() => {
    const handler = () => setValue(get())
    queries.forEach((q) => matchMedia(q).addEventListener('change', handler))
    return () => queries.forEach((q) => matchMedia(q).removeEventListener('change', handler))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries])
  return value
}

const useMeasure = () => {
  const ref = useRef(null)
  const [size, setSize] = useState({ width: 0 })
  useLayoutEffect(() => {
    if (!ref.current) return
    const ro = new ResizeObserver(([entry]) => setSize({ width: entry.contentRect.width }))
    ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])
  return [ref, size]
}

const preloadImages = async (urls) => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image()
          img.src = src
          img.onload = img.onerror = () => resolve()
        })
    )
  )
}

/* 稳定的伪随机（0..1）：同一张图每次布局结果一致，但序列本身不规律 */
const rnd = (i, salt = 1) => {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453
  return x - Math.floor(x)
}

/* 每格的裁剪比例（高/宽）：接近方形、 landscape、略高竖图混排——
   原图统一 cover 裁剪填充，只裁不拉；比例表刻意高低错落 */
const CROP_POOL = [0.78, 1.02, 0.62, 1.36, 0.72, 0.88, 1.18, 0.55, 0.96, 0.8, 1.26, 0.66]
/* 裁剪时的取景位置：有的留上部、有的留中下部，避免每张都居中裁 */
const POS_POOL = ['50% 22%', '50% 48%', '50% 34%', '50% 62%', '50% 40%', '50% 28%']

/* 放大查看：支持传入一组图（srcs + index）左右翻页；单图时与原来一致 */
export function Lightbox({ src, srcs, index = 0, onNavigate, onClose }) {
  const list = srcs && srcs.length ? srcs : src ? [src] : []
  const i = list.length ? Math.max(0, Math.min(index, list.length - 1)) : 0
  const cur = list[i] || null
  const multi = list.length > 1

  const go = (step) => {
    if (!multi || !onNavigate) return
    onNavigate((i + step + list.length) % list.length)
  }

  useEffect(() => {
    if (!cur) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cur, i, list, onClose, onNavigate])

  /* 预取相邻两张，翻页时不会闪白 */
  useEffect(() => {
    if (!multi) return
    ;[i - 1, i + 1].forEach((n) => {
      const s = list[(n + list.length) % list.length]
      if (s) { const im = new Image(); im.src = s }
    })
  }, [i, multi, list])

  if (!cur) return null
  return (
    <div className="lightbox" onClick={onClose}>
      <img key={cur} src={cur} alt="" onClick={(e) => e.stopPropagation()} />

      {multi && (
        <>
          <button
            className="lightbox-nav prev"
            onClick={(e) => { e.stopPropagation(); go(-1) }}
            aria-label="previous"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M15 5 L8 12 L15 19" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="lightbox-nav next"
            onClick={(e) => { e.stopPropagation(); go(1) }}
            aria-label="next"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M9 5 L16 12 L9 19" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="lightbox-count mono">
            {String(i + 1).padStart(2, '0')} / {String(list.length).padStart(2, '0')}
          </span>
        </>
      )}

      <button className="lightbox-close" onClick={onClose} aria-label="close">✕</button>
      <span className="lightbox-hint">
        {multi ? '← → SWITCH · CLICK TO CLOSE · ESC' : 'CLICK ANYWHERE TO CLOSE · ESC'}
      </span>
    </div>
  )
}

export default function Masonry({
  items,
  onOpen,
  duration = 1,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.97,
  blurToFocus = true,
}) {
  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1200px)', '(min-width:900px)', '(min-width:600px)'],
    [6, 5, 4, 3],
    2
  )
  const [containerRef, { width }] = useMeasure()
  const [ready, setReady] = useState(false)
  const [inView, setInView] = useState(false)
  const mounted = useRef(false)
  const rootRef = useRef(null)

  const srcs = useMemo(() => items.map((i) => i.img), [items])
  useEffect(() => {
    let alive = true
    preloadImages(srcs).then(() => alive && setReady(true))
    return () => { alive = false }
  }, [srcs])

  /* 滚动到可视区域附近才开始入场动画，保证「从下浮现」能被看到 */
  useEffect(() => {
    if (!rootRef.current) return
    if (typeof IntersectionObserver === 'undefined') { setInView(true); return }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    )
    io.observe(rootRef.current)
    return () => io.disconnect()
  }, [])

  /* 裁剪式交错：每格高度取自比例池（确定性乱序），原图 cover 填充、只裁不拉 */
  const grid = useMemo(() => {
    if (!width) return { placed: [], height: 0 }
    const gap = 10
    const colW = (width - gap * (columns - 1)) / columns
    const colH = new Array(columns).fill(0)
    const placed = items.map((it, idx) => {
      const c = colH.indexOf(Math.min(...colH))
      const x = c * (colW + gap)
      const y = colH[c]
      const aspect = CROP_POOL[(idx * 7 + 3) % CROP_POOL.length]
      const h = colW * aspect * (0.92 + rnd(idx, 8) * 0.16)
      colH[c] += h + gap
      return {
        ...it, idx, x, y, w: colW, h,
        pos: POS_POOL[(idx * 5 + 2) % POS_POOL.length],
      }
    })
    return { placed, height: Math.max(0, Math.max(...colH) - gap) }
  }, [columns, items, width])

  /* 不规律依次浮现：出场顺序打乱 + 每张的位移/时长/延迟各不相同 */
  const choreo = useMemo(() => {
    const order = items.map((_, i) => ({ i, r: rnd(i, 5) }))
    order.sort((a, b) => a.r - b.r)
    const rank = new Array(items.length)
    order.forEach((o, k) => { rank[o.i] = k })
    return items.map((_, i) => ({
      rank: rank[i],
      fromY: 180 + rnd(i, 2) * 180,
      dur: 0.9 + rnd(i, 3) * 0.55,
      delay: rank[i] * 0.085 + rnd(i, 4) * 0.22,
    }))
  }, [items])

  useLayoutEffect(() => {
    if (!ready || !inView || !grid.placed.length) return
    grid.placed.forEach((it) => {
      const sel = `[data-key="${it.id}"]`
      const ch = choreo[it.idx]
      if (!mounted.current) {
        const from = { y: it.y + ch.fromY }
        if (animateFrom === 'left') { from.y = it.y; from.x = it.x - 200 }
        gsap.fromTo(
          sel,
          {
            opacity: 0, ...from, width: it.w, height: it.h,
            ...(blurToFocus ? { filter: 'blur(12px)' } : {}),
          },
          {
            opacity: 1, x: it.x, y: it.y, width: it.w, height: it.h,
            ...(blurToFocus ? { filter: 'blur(0px)' } : {}),
            duration: ch.dur, ease: 'power3.out', delay: ch.delay,
          }
        )
      } else {
        gsap.to(sel, { x: it.x, y: it.y, width: it.w, height: it.h, duration, ease: 'power3.out', overwrite: 'auto' })
      }
    })
    mounted.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid, ready, inView])

  const onEnter = (e) => { if (scaleOnHover) gsap.to(e.currentTarget, { scale: hoverScale, duration: 0.3, ease: 'power2.out' }) }
  const onLeave = (e) => { if (scaleOnHover) gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power2.out' }) }

  return (
    <div ref={(el) => { containerRef.current = el; rootRef.current = el }} className="masonry-list" style={{ height: grid.height || undefined }}>
      {grid.placed.map((it) => (
        <div
          key={it.id}
          data-key={it.id}
          className="masonry-item"
          style={{ opacity: 0 }}
          onClick={() => onOpen && onOpen(it)}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <img src={it.img} alt={it.title || ''} loading="lazy" draggable={false} style={{ objectPosition: it.pos }} />
        </div>
      ))}
    </div>
  )
}

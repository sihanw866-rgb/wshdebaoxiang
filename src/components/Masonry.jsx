import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Masonry.css'

/* 基于 React Bits Masonry（JS + CSS）适配：
   - 列布局带 gap，按图片真实宽高比计算高度
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

export function Lightbox({ src, onClose }) {
  useEffect(() => {
    if (!src) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [src, onClose])

  if (!src) return null
  return (
    <div className="lightbox" onClick={onClose}>
      <img src={src} alt="" onClick={(e) => e.stopPropagation()} />
      <button className="lightbox-close" onClick={onClose} aria-label="close">✕</button>
      <span className="lightbox-hint">CLICK ANYWHERE TO CLOSE · ESC</span>
    </div>
  )
}

export default function Masonry({
  items,
  onOpen,
  stagger = 0.04,
  duration = 0.6,
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
  const mounted = useRef(false)

  const srcs = useMemo(() => items.map((i) => i.img), [items])
  useEffect(() => {
    let alive = true
    preloadImages(srcs).then(() => alive && setReady(true))
    return () => { alive = false }
  }, [srcs])

  /* 图块高度按节奏变化（高矮交替），等尺寸图片也能排出参差感；
     裁切只在展示层，点开放大仍是完整图 */
  const H_MULT = [1.14, 0.72, 1.22, 0.8, 0.96, 0.66, 1.1, 0.86]

  const grid = useMemo(() => {
    if (!width) return { placed: [], height: 0 }
    const gap = 10
    const colW = (width - gap * (columns - 1)) / columns
    const colH = new Array(columns).fill(0)
    const placed = items.map((it, idx) => {
      const c = colH.indexOf(Math.min(...colH))
      const x = c * (colW + gap)
      const y = colH[c]
      const h = colW * (it.height / it.width) * (H_MULT[idx % H_MULT.length])
      colH[c] += h + gap
      return { ...it, idx, x, y, w: colW, h }
    })
    return { placed, height: Math.max(0, Math.max(...colH) - gap) }
  }, [columns, items, width])

  const getInitial = (it) => {
    switch (animateFrom) {
      case 'top': return { y: it.y - 160 }
      case 'left': return { x: it.x - 160 }
      case 'right': return { x: it.x + 160 }
      case 'random':
        return [{ y: it.y + 160 }, { y: it.y - 160 }, { x: it.x - 160 }, { x: it.x + 160 }][it.idx % 4]
      default: return { y: it.y + 160 }
    }
  }

  useLayoutEffect(() => {
    if (!ready || !grid.placed.length) return
    grid.placed.forEach((it, i) => {
      const sel = `[data-key="${it.id}"]`
      if (!mounted.current) {
        gsap.fromTo(
          sel,
          { opacity: 0, ...getInitial(it), width: it.w, height: it.h, ...(blurToFocus ? { filter: 'blur(10px)' } : {}) },
          {
            opacity: 1, x: it.x, y: it.y, width: it.w, height: it.h,
            ...(blurToFocus ? { filter: 'blur(0px)' } : {}),
            duration: 0.8, ease: 'power3.out', delay: Math.min(i * stagger, 0.7),
          }
        )
      } else {
        gsap.to(sel, { x: it.x, y: it.y, width: it.w, height: it.h, duration, ease: 'power3.out', overwrite: 'auto' })
      }
    })
    mounted.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid, ready])

  const onEnter = (e) => { if (scaleOnHover) gsap.to(e.currentTarget, { scale: hoverScale, duration: 0.3, ease: 'power2.out' }) }
  const onLeave = (e) => { if (scaleOnHover) gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power2.out' }) }

  return (
    <div ref={containerRef} className="masonry-list" style={{ height: grid.height || undefined }}>
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
          <img src={it.img} alt={it.title || ''} loading="lazy" draggable={false} />
        </div>
      ))}
    </div>
  )
}

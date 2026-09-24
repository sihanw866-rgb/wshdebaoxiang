import { useEffect, useState } from 'react'

/* 右下角回到顶部：滚过一屏后出现，外圈细环表示当前阅读进度 */
const R = 20
const CIRC = 2 * Math.PI * R

export default function ScrollTop({ label = 'Back to top', threshold = 420 }) {
  const [on, setOn] = useState(false)
  const [ratio, setRatio] = useState(0)

  useEffect(() => {
    let raf = 0
    const measure = () => {
      raf = 0
      const y = window.scrollY || document.documentElement.scrollTop || 0
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      setRatio(Math.min(1, Math.max(0, y / max)))
      setOn(y > threshold)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure)
    }
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [threshold])

  const toTop = () => {
    const reduce =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      className={`scroll-top${on ? ' is-on' : ''}`}
      onClick={toTop}
      aria-label={label}
      title={label}
      tabIndex={on ? 0 : -1}
      aria-hidden={on ? undefined : 'true'}
    >
      <svg className="st-ring" viewBox="0 0 44 44" aria-hidden="true">
        <circle className="st-track" cx="22" cy="22" r={R} />
        <circle
          className="st-bar"
          cx="22"
          cy="22"
          r={R}
          style={{ strokeDasharray: CIRC, strokeDashoffset: CIRC * (1 - ratio) }}
        />
      </svg>
      <span className="st-ico" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M12 19V6.6M12 6.6 6.6 12M12 6.6 17.4 12" />
        </svg>
      </span>
    </button>
  )
}

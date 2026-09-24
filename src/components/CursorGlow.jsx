import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './CursorGlow.css'

/* 首页光标发光：三层跟随
   - glow：大范围暖奶油光斑，延迟最久（拖尾感），screen 混合在暗底上提亮
   - ring：细描边环，中等延迟；悬停可交互元素时放大并提亮
   - core：小亮点，几乎实时
   只在家页启用；触屏 / 无精确指针 / 偏好减少动效时不启用或退化为无延迟跟随 */

const HOT_SELECTOR = 'a, button, .ag-panel, .masonry-item, .strength-card, [data-cursor="hot"]'

export default function CursorGlow() {
  const [enabled] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches
  })
  const rootRef = useRef(null)
  const glowRef = useRef(null)
  const ringRef = useRef(null)
  const coreRef = useRef(null)

  useEffect(() => {
    if (!enabled) return
    const root = rootRef.current
    const glow = glowRef.current
    const ring = ringRef.current
    const core = coreRef.current
    if (!root || !glow || !ring || !core) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const d = reduced ? 0 : { glow: 0.55, ring: 0.26, core: 0.05 }

    const mk = (el, dur) => ({
      x: gsap.quickTo(el, 'x', { duration: dur, ease: 'power3' }),
      y: gsap.quickTo(el, 'y', { duration: dur, ease: 'power3' }),
    })
    const g = mk(glow, reduced ? 0 : d.glow)
    const r = mk(ring, reduced ? 0 : d.ring)
    const c = mk(core, reduced ? 0 : d.core)

    let seen = false
    const onMove = (e) => {
      if (!seen) { seen = true; root.classList.add('is-on') }
      g.x(e.clientX); g.y(e.clientY)
      r.x(e.clientX); r.y(e.clientY)
      c.x(e.clientX); c.y(e.clientY)
    }
    const onOver = (e) => {
      const el = e.target
      const hot = el instanceof Element ? el.closest(HOT_SELECTOR) : null
      root.classList.toggle('is-hot', !!hot)
    }
    const onDown = () => root.classList.add('is-down')
    const onUp = () => root.classList.remove('is-down')
    const onLeave = () => root.classList.remove('is-on')
    const onEnter = () => { if (seen) root.classList.add('is-on') }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    // 切换标签页 / 失焦时收起，回来再跟随
    const onBlur = () => root.classList.remove('is-on')
    window.addEventListener('blur', onBlur)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      window.removeEventListener('blur', onBlur)
      gsap.killTweensOf([glow, ring, core])
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div className="cursor-glow" ref={rootRef} aria-hidden="true">
      <span className="cg-glow" ref={glowRef}><i /></span>
      <span className="cg-ring" ref={ringRef}><i /></span>
      <span className="cg-core" ref={coreRef}><i /></span>
    </div>
  )
}

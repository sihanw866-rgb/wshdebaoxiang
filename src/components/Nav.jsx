import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n'

export default function Nav({ onNav, onHome }) {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  const { t, lang, toggle } = useLang()

  useEffect(() => {
    lastY.current = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      if (y < 90) {
        setHidden(false) // 顶部区域始终显示
      } else if (y > lastY.current + 4) {
        setHidden(true) // 向下滚动 → 收起
      } else if (y < lastY.current - 4) {
        setHidden(false) // 向上滚动 → 回来
      }
      lastY.current = y
    }

    // 鼠标靠近页面顶部 → 自动下拉显示
    const onMove = (e) => {
      if (e.clientY < 120) setHidden(false)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  const jump = (e, id) => {
    e.preventDefault()
    if (onNav) onNav(id)
  }

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''} ${hidden ? 'is-hidden' : ''}`}>
        <div className="nav-bar">
          <a
            className="nav-logo"
            href="#top"
            onClick={(e) => { e.preventDefault(); onHome && onHome(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <span className="dot" />
            WSH<span className="dim">.portfolio</span>
          </a>

          <nav className="nav-links">
            {/* 顺序与首页模块一致：关于我（独立页）→ 个人优势 → 精选项目 → 顶部按钮「联系我」 */}
            <a href="#about" onClick={(e) => jump(e, 'about')}>{t.ui.nav.about}</a>
            <a href="#strengths" onClick={(e) => jump(e, 'strengths')}>{t.ui.nav.strengths}</a>
            <a href="#works" onClick={(e) => jump(e, 'works')}>{t.ui.nav.works}</a>
          </nav>

          <div className="nav-right">
            <button
              className="lang-toggle"
              onClick={toggle}
              aria-label="Switch language"
              title={lang === 'zh' ? 'Switch to English' : '切换到中文'}
            >
              <span className={lang === 'zh' ? 'on' : ''}>中</span>
              <i>/</i>
              <span className={lang === 'en' ? 'on' : ''}>EN</span>
            </button>
          </div>
        </div>
      </header>

      {/* 联系我：独立于导航，固定在页面右上角 */}
          <button className="cta-fixed" onClick={(e) => jump(e, 'contact')}>
            {t.ui.nav.cta}
            <span className="circle">→</span>
          </button>
    </>
  )
}

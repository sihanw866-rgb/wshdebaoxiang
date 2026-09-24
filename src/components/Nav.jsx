import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n'
import ThemeToggle from './ThemeToggle'

export default function Nav({ onNav, onHome, theme, onToggleTheme }) {
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

  const links = [
    { id: 'about', label: t.ui.nav.about },
    { id: 'strengths', label: t.ui.nav.strengths },
    { id: 'works', label: t.ui.nav.works },
  ]

  const themeLabel =
    theme === 'light' ? t.ui.nav.themeDark || 'Switch to dark' : t.ui.nav.themeLight || 'Switch to light'

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

          {/* 顺序与首页模块一致：关于我 → 个人优势 → 精选项目 */}
          <nav className="nav-links">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                data-label={l.label}
                onClick={(e) => jump(e, l.id)}
              >
                <span>{l.label}</span>
              </a>
            ))}
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

            <ThemeToggle theme={theme} onToggle={onToggleTheme} label={themeLabel} />

            <button className="nav-cta" onClick={(e) => jump(e, 'contact')}>
              {t.ui.nav.cta}
              <span className="circle">→</span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

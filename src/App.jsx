import { useEffect, useRef, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AboutPage from './components/AboutPage'
import ProjectPage from './components/ProjectPage'
import Works from './components/Works'
import Strengths from './components/Strengths'
import Contact from './components/Contact'

export default function App() {
  const [view, setView] = useState('home')
  const [projectId, setProjectId] = useState(null)
  /* 昼夜主题：默认暗色，选择记在本地，刷新后保持 */
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('wsh-theme') || 'dark' } catch { return 'dark' }
  })

  // 记住「从首页进入二级页」那一刻的滚动位置，返回时原样恢复
  const homeScroll = useRef(0)
  const shouldRestore = useRef(false)
  const prevView = useRef('home')

  // 全站昼夜：body.theme-light 切换整套变量（首页 / 关于我 / 项目详情统一跟随）
  useEffect(() => {
    document.body.classList.toggle('theme-light', theme === 'light')
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('wsh-theme', theme) } catch {}
  }, [theme])

  const toggleTheme = () => setTheme((v) => (v === 'light' ? 'dark' : 'light'))

  useEffect(() => {

    const from = prevView.current
    if (from === 'home' && view !== 'home') homeScroll.current = window.scrollY
    prevView.current = view

    if (view !== 'home') {
      window.scrollTo(0, 0)
      return
    }

    if (!shouldRestore.current) return
    shouldRestore.current = false
    const y = homeScroll.current
    // 等首页内容挂载并撑开高度后再落位，否则会被截断
    requestAnimationFrame(() => {
      requestAnimationFrame(() => window.scrollTo(0, y))
    })
  }, [view, projectId])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // 二级页返回：回到离开首页时的位置
  const backHome = () => {
    shouldRestore.current = true
    setView('home')
  }

  // 点导航 logo：回到首页顶部
  const goHomeTop = () => {
    shouldRestore.current = false
    setView('home')
  }

  const openProject = (id) => {
    setProjectId(id)
    setView('project')
  }

  const goTo = (id) => {
    if (id === 'about') {
      setView('about')
      return
    }
    if (view !== 'home') {
      setView('home')
      setTimeout(() => scrollTo(id), 80)
      return
    }
    scrollTo(id)
  }

  return (
    <>
      <Nav onNav={goTo} onHome={goHomeTop} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        {view === 'about' ? (
          <AboutPage onBack={backHome} onToWork={() => goTo('works')} theme={theme} />
        ) : view === 'project' ? (
          <ProjectPage
            projectId={projectId}
            onBack={backHome}
            onOpen={openProject}
            onAll={() => goTo('works')}
          />
        ) : (
          <>
            <Hero />
            <Strengths theme={theme} />
            <Works onOpen={openProject} />
            <Contact />
          </>
        )}
      </main>
    </>
  )
}

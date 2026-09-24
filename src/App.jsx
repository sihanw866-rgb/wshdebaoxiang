import { useEffect, useRef, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AboutPage from './components/AboutPage'
import ProjectPage from './components/ProjectPage'
import Works from './components/Works'
import Strengths from './components/Strengths'
import Contact from './components/Contact'
import CursorGlow from './components/CursorGlow'

export default function App() {
  const [view, setView] = useState('home')
  const [projectId, setProjectId] = useState(null)

  // 记住「从首页进入二级页」那一刻的滚动位置，返回时原样恢复
  const homeScroll = useRef(0)
  const shouldRestore = useRef(false)
  const prevView = useRef('home')

  // 二级页统一走暗色（浅色主题变量仍保留在 index.css，需要时再启用）
  useEffect(() => {
    // 「关于我」是浅色二级页，其余页面（首页 / 项目详情）保持暗色
    document.body.classList.toggle('theme-light', view === 'about')

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
      <Nav onNav={goTo} onHome={goHomeTop} />
      <main>
        {view === 'about' ? (
          <AboutPage onBack={backHome} onToWork={() => goTo('works')} />
        ) : view === 'project' ? (
          <ProjectPage
            projectId={projectId}
            onBack={backHome}
            onOpen={openProject}
            onAll={() => goTo('works')}
          />
        ) : (
          <>
            <CursorGlow />
            <Hero />
            <Strengths />
            <Works onOpen={openProject} />
            <Contact />
          </>
        )}
      </main>
    </>
  )
}

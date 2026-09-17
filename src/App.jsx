import { useEffect, useState } from 'react'
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

  // 二级页统一走暗色（浅色主题变量仍保留在 index.css，需要时再启用）
  useEffect(() => {
    document.body.classList.remove('theme-light')
    if (view === 'about' || view === 'project') window.scrollTo(0, 0)
  }, [view, projectId])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const goHome = () => setView('home')

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
      <Nav onNav={goTo} onHome={goHome} />
      <main>
        {view === 'about' ? (
          <AboutPage onBack={goHome} onToWork={() => goTo('works')} />
        ) : view === 'project' ? (
          <ProjectPage
            projectId={projectId}
            onBack={goHome}
            onOpen={openProject}
            onAll={() => goTo('works')}
          />
        ) : (
          <>
            <Hero />
            <Works onOpen={openProject} />
            <Strengths />
            <Contact />
          </>
        )}
      </main>
    </>
  )
}

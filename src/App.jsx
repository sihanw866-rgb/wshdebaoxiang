import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AboutPage from './components/AboutPage'
import Works from './components/Works'
import Strengths from './components/Strengths'
import Contact from './components/Contact'

export default function App() {
  const [view, setView] = useState('home')

  // 「关于我」是独立的二级页面，走浅色主题
  useEffect(() => {
    document.body.classList.toggle('theme-light', view === 'about')
    if (view === 'about') window.scrollTo(0, 0)
  }, [view])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const goHome = () => setView('home')

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
        ) : (
          <>
            <Hero />
            <Works />
            <Strengths />
            <Contact />
          </>
        )}
      </main>
    </>
  )
}

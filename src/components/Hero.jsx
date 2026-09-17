import { useState } from 'react'
import { useLang } from '../i18n'
import HeroVideo from './HeroVideo'
import { WordsPullUp, FadeUp } from '../anim'

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export default function Hero() {
  const [videoOk, setVideoOk] = useState(true)
  const { t } = useLang()
  const { profile, ui } = t

  return (
    <section className="hero" id="top">
      <div className="hero-frame">
        <div className="hero-media">
          {videoOk ? <HeroVideo onFail={() => setVideoOk(false)} /> : <div className="hero-fallback" />}
          <div className="hero-shade" />
          <div className="noise-overlay" />
        </div>

        <div className="hero-content">
          <div className="hero-title-col">
            <div className="hero-eyebrow">
              <span className="line" />
              <span className="mono">{profile.name} · {profile.rolesEn}</span>
            </div>
            <h1 className="hero-title">
              <span className="line">
                <WordsPullUp text={profile.namePinyin.split(' ')[0]} />
              </span>
              <span className="line">
                <WordsPullUp text={profile.namePinyin.split(' ').slice(1).join(' ')} asterisk delay={0.1} />
              </span>
            </h1>
          </div>

          <div className="hero-side-col">
            <FadeUp delay={0.5}>
              <p className="hero-desc">{profile.heroIntro}</p>
            </FadeUp>
            <FadeUp delay={0.6}>
              <div className="hero-meta">
                <div className="item">
                  <span className="mono">{ui.hero.basedIn}</span>
                  <b>{profile.location}</b>
                </div>
                <div className="item">
                  <span className="mono">{ui.hero.status}</span>
                  <b>{ui.hero.statusValue}</b>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.7}>
              <a className="btn-pill" href="#works">
                {ui.hero.viewWork}
                <span className="circle"><ArrowRight /></span>
              </a>
            </FadeUp>
          </div>
        </div>

        <div className="scroll-cue">
          <span className="mono" style={{ fontSize: 9 }}>{ui.hero.scroll}</span>
          <span className="bar" />
        </div>

        <div className="scrub-hint">
          <span className="mono">{ui.hero.scrubHint}</span>
          <span className="arrows">←→</span>
        </div>
      </div>
    </section>
  )
}

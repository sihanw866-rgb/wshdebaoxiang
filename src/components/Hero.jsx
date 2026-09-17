import { useState } from 'react'
import { useLang } from '../i18n'
import HeroVideo from './HeroVideo'

export default function Hero() {
  const [videoOk, setVideoOk] = useState(true)
  const { t } = useLang()
  const { profile, ui } = t

  return (
    <section className="hero" id="top">
      <div className="hero-media">
        {videoOk ? (
          <HeroVideo onFail={() => setVideoOk(false)} />
        ) : (
          <div className="hero-fallback" />
        )}
        <div className="hero-shade" />
        <div className="hero-grid" />
        <div className="hero-noise" />
      </div>

      <div className="container hero-content">
        <div className="hero-eyebrow">
          <span className="line" />
          <span className="mono">{profile.name} · {profile.rolesEn}</span>
        </div>
        <h1 className="hero-name">{profile.namePinyin}</h1>
        <div className="hero-sub">
          <p>{profile.heroIntro}</p>
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
          <a className="btn-primary" href="#works">
            {ui.hero.viewWork} <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <div className="scroll-cue">
        <span className="mono" style={{ fontSize: 10 }}>{ui.hero.scroll}</span>
        <span className="bar" />
      </div>

      <div className="scrub-hint">
        <span className="mono">{ui.hero.scrubHint}</span>
        <span className="arrows">←→</span>
      </div>
    </section>
  )
}

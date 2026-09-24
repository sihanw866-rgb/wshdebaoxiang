import { useRef } from 'react'
import { useLang } from '../i18n'
import { WordsPullUpMultiStyle, ScrollRevealText, FadeUp, CardIn } from '../anim'
import ToolIcon from './ToolIcon'
import BorderGlow from './BorderGlow'
import VariableProximity from './VariableProximity'

export default function AboutPage({ onBack, onToWork, theme = 'dark' }) {
  const light = theme === 'light'
  const { lang, t } = useLang()
  const { profile, stats, tools, ui } = t
  const p = ui.aboutPage
  const headingRef = useRef(null)

  return (
    <section className="page-about">
      <div className="container">
        <button className="back-link" onClick={onBack}>{p.back}</button>

        <BorderGlow className="about-card" backgroundColor={light ? '#ffffff' : '#101010'} borderRadius={32} glowRadius={36}>
          <p className="mono label">{p.no}</p>
          <h2 className="about-heading" ref={headingRef} style={{ position: 'relative' }}>
            {profile.aboutSegments.map((seg, i) => (
              <VariableProximity
                key={i}
                label={seg.text}
                className={`${seg.className || ''}${lang === 'en' ? ' is-latin' : ''}`}
                containerRef={headingRef}
                radius={140}
                falloff="gaussian"
                fromFontVariationSettings="'wght' 300"
                toFontVariationSettings="'wght' 900"
              />
            ))}
          </h2>
          <div className="about-body-text">
            <ScrollRevealText text={profile.aboutScrollText} />
          </div>

          <div className="about-grid-2">
            <FadeUp>
              <figure className="about-figure">
                <img src="/about.jpg" alt={profile.name} />
                <figcaption className="tag">
                  <b>{profile.name}</b>
                  {profile.roles.join(' · ')}
                </figcaption>
              </figure>
            </FadeUp>

            <div className="about-extra">
              {profile.aboutExtra.map((s, i) => (
                <p key={i}>{s}</p>
              ))}
              <div className="edu">
                <div>
                  <div className="school">{profile.education.school}</div>
                  <div className="mono">{profile.education.period}</div>
                </div>
                <div>
                  <div className="mono" style={{ marginBottom: 3 }}>Major</div>
                  <div className="school" style={{ fontSize: 13, fontWeight: 400 }}>
                    {profile.education.major} · {profile.education.gpa}
                  </div>
                </div>
                <div className="honor">{profile.education.honor}</div>
              </div>
            </div>
          </div>

          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.value}<i>{s.suffix}</i></div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </BorderGlow>

        {/* 工具能力：图标 + 说明 + 熟练度 */}
        <div className="tools-block">
          <p className="mono">{p.toolsTitle}</p>
          <p className="tools-note">{p.toolsNote}</p>
          <div className="tool-grid">
            {(tools || []).map((tool, i) => (
              <CardIn index={i % 4} key={`${tool.name}-${i}`}>
                <BorderGlow className="tool-card" backgroundColor={light ? '#ffffff' : '#101010'} borderRadius={18} glowRadius={22}>
                  <span className="tool-icon">
                    <ToolIcon kind={tool.key} />
                  </span>
                  <div className="tool-main">
                    <h5 className="tool-name">{tool.name}</h5>
                    <p className="tool-note">{tool.note}</p>
                    <div className="tool-bar">
                      <span style={{ width: `${tool.level}%` }} />
                    </div>
                  </div>
                </BorderGlow>
              </CardIn>
            ))}
          </div>
        </div>

        <div className="page-foot">
          <button className="link-arrow" onClick={onToWork}>
            {p.backToWork} <span>→</span>
          </button>
          <span className="mono">© 2026 {profile.nameEn}</span>
        </div>
      </div>
    </section>
  )
}

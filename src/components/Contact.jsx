import { useRef } from 'react'
import { useLang } from '../i18n'
import { FadeUp } from '../anim'
import VariableProximity from './VariableProximity'

/* 首页最后一屏：大标题用 VariableProximity —— 鼠标靠近的字重随距离连续变重，
   两句之间用「无衬线 / 衬线斜体」对比，让标题像被光标磁吸着呼吸 */
export default function Contact() {
  const { lang, t } = useLang()
  const { profile, ui } = t
  const c = ui.contact
  const headingRef = useRef(null)
  const latin = lang === 'en' ? ' is-latin' : ''

  const prox = {
    containerRef: headingRef,
    radius: 190,
    falloff: 'gaussian',
    fromFontVariationSettings: "'wght' 200",
    toFontVariationSettings: "'wght' 900",
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact-top">
        <p className="mono" style={{ marginBottom: 26 }}>{c.no}</p>

        <FadeUp>
          <h2 className="contact-big" ref={headingRef} style={{ position: 'relative' }}>
            <span className="contact-line">
              <VariableProximity label={c.line1} className={latin.trim()} {...prox} />
            </span>
            <span className="contact-line">
              <VariableProximity label={c.line2pre} className={latin.trim()} {...prox} />
              {' '}
              <VariableProximity label={c.line2em} className={`serif${latin}`} {...prox} />
            </span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.25}>
          <a className="contact-mail" href={`mailto:${profile.email}`}>
            {profile.email} <span>↗</span>
          </a>
        </FadeUp>

        <p className="contact-hint mono">{c.hint}</p>

        <FadeUp delay={0.35}>
          <div className="contact-grid">
            <div className="cell">
              <div className="mono">{c.phoneLabel}</div>
              <div className="v">{profile.phone}</div>
            </div>
            <div className="cell">
              <div className="mono">{c.locationLabel}</div>
              <div className="v">{profile.location}</div>
            </div>
            <div className="cell">
              <div className="mono">{c.lookingLabel}</div>
              <div className="v">{c.lookingValue}</div>
            </div>
          </div>
        </FadeUp>
      </div>

      <div className="container">
        <footer className="footer">
          <span className="mono">© 2026 {profile.name} · {profile.nameEn}</span>
          <span className="mono">{profile.rolesEn}</span>
          <span className="mono">{c.footerNote}</span>
        </footer>
      </div>
    </section>
  )
}

import { useLang } from '../i18n'
import { WordsPullUpMultiStyle, FadeUp } from '../anim'

export default function Contact() {
  const { t } = useLang()
  const { profile, ui } = t
  const c = ui.contact

  return (
    <section className="contact" id="contact">
      <div className="container contact-top">
        <p className="mono" style={{ marginBottom: 26 }}>{c.no}</p>
        <h2 className="contact-big">
          <WordsPullUpMultiStyle
            segments={[
              { text: c.line1, className: '' },
              { text: c.line2pre + c.line2em, className: 'serif' },
            ]}
          />
        </h2>
        <FadeUp delay={0.25}>
          <a className="contact-mail" href={`mailto:${profile.email}`}>
            {profile.email} <span>↗</span>
          </a>
        </FadeUp>

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

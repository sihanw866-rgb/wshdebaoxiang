import { useLang } from '../i18n'
import { useReveal } from '../hooks'

export default function Contact() {
  const ref = useReveal()
  const { t } = useLang()
  const { profile, ui } = t
  const c = ui.contact

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container contact-top">
        <p className="mono reveal" style={{ marginBottom: 28 }}>{c.no}</p>
        <h2 className="contact-big reveal" data-delay="1">
          {c.line1}<br />
          {c.line2pre}<span className="stroke">{c.line2em}</span>
        </h2>
        <a className="contact-mail reveal" data-delay="2" href={`mailto:${profile.email}`}>
          {profile.email} <span className="arr">↗</span>
        </a>

        <div className="contact-grid reveal" data-delay="3">
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

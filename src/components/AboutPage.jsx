import { useLang } from '../i18n'
import { useReveal } from '../hooks'

export default function AboutPage({ onBack, onToWork }) {
  const ref = useReveal()
  const { t } = useLang()
  const { profile, stats, ui } = t
  const p = ui.aboutPage

  return (
    <section className="page-about" ref={ref}>
      <div className="container">
        <button className="back-link mono reveal" onClick={onBack}>
          {p.back}
        </button>

        <div className="page-head reveal" data-delay="1">
          <p className="mono" style={{ marginBottom: 18 }}>{p.no}</p>
          <h1 className="page-title">{p.title}</h1>
          <p className="page-lead">{p.lead}</p>
        </div>

        <div className="about-grid">
          <figure className="about-figure reveal" data-delay="1">
            <img src="/about.jpg" alt={profile.name} />
            <figcaption className="tag">
              <b>{profile.name}</b>
              {profile.roles.join(' · ')}
            </figcaption>
          </figure>

          <div className="about-body">
            <h3 className="reveal" data-delay="2">
              {ui.about.heading.pre}<br />
              <em>{ui.about.heading.em}</em>{ui.about.heading.post}
            </h3>
            {profile.intro.map((s, i) => (
              <p className="reveal" data-delay={String(i + 1)} key={i}>{s}</p>
            ))}

            <div className="about-contact reveal" data-delay="2">
              <div className="cell">
                <div className="k mono">Email</div>
                <div className="v">{profile.email}</div>
              </div>
              <div className="cell">
                <div className="k mono">Phone</div>
                <div className="v">{profile.phone}</div>
              </div>
              <div className="cell">
                <div className="k mono">Location</div>
                <div className="v">{profile.location}</div>
              </div>
            </div>

            <div className="stats reveal" data-delay="3">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="num">
                    {s.value}
                    <i>{s.suffix}</i>
                  </div>
                  <div className="label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="edu reveal" data-delay="3">
              <div>
                <div className="school">{profile.education.school}</div>
                <div className="mono">{profile.education.period}</div>
              </div>
              <div>
                <div className="mono" style={{ marginBottom: 4 }}>Major</div>
                <div className="school" style={{ fontSize: 14, fontWeight: 500 }}>
                  {profile.education.major} · {profile.education.gpa}
                </div>
              </div>
              <div className="honor">{profile.education.honor}</div>
            </div>
          </div>
        </div>

        <div className="page-foot reveal" data-delay="2">
          <button className="link-arrow" onClick={onToWork}>
            {p.backToWork} <span>→</span>
          </button>
          <span className="mono">© 2026 {profile.nameEn}</span>
        </div>
      </div>
    </section>
  )
}

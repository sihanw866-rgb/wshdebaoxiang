import { useLang } from '../i18n'
import { WordsPullUpMultiStyle, ScrollRevealText, FadeUp } from '../anim'

export default function AboutPage({ onBack, onToWork }) {
  const { t } = useLang()
  const { profile, stats, ui } = t
  const p = ui.aboutPage

  return (
    <section className="page-about">
      <div className="container">
        <button className="back-link" onClick={onBack}>{p.back}</button>

        <div className="about-card">
          <p className="mono label">{p.no}</p>
          <h2 className="about-heading">
            <WordsPullUpMultiStyle segments={profile.aboutSegments} />
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

            <div>
              <div className="about-contact">
                <div className="cell">
                  <div className="mono">Email</div>
                  <div className="v">{profile.email}</div>
                </div>
                <div className="cell">
                  <div className="mono">Phone</div>
                  <div className="v">{profile.phone}</div>
                </div>
                <div className="cell">
                  <div className="mono">Location</div>
                  <div className="v">{profile.location}</div>
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

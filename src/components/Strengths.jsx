import { useLang } from '../i18n'
import { CardIn } from '../anim'

const Check = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)
const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const FEATURE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4'

export default function Strengths() {
  const { t } = useLang()
  const { toolset, ui } = t
  const cards = ui.cards || []
  const s = ui.strengths

  return (
    <section className="section features" id="strengths">
      <div className="bg-noise" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="feature-head">
          <div className="line">{s.line1}</div>
          <div className="line dim">{s.line2}</div>
        </div>

        <div className="feature-grid">
          <CardIn index={0}>
            <div className="feature-card is-video">
              <video src={FEATURE_VIDEO} autoPlay loop muted playsInline />
              <div className="video-shade" />
              <span className="video-label">{s.videoLabel}</span>
            </div>
          </CardIn>

          {cards.map((c, i) => (
            <CardIn index={i + 1} key={c.num}>
              <div className="feature-card">
                <span className="feature-num">{c.num}</span>
                <h4 className="feature-title">{c.title}</h4>
                <ul className="feature-list">
                  {c.items.map((it) => (
                    <li key={it}>
                      <Check />
                      {it}
                    </li>
                  ))}
                </ul>
                <a className="feature-more" href="#works">
                  {c.more} <ArrowRight />
                </a>
              </div>
            </CardIn>
          ))}
        </div>

        <div className="toolset">
          {toolset.map((x) => (
            <span className="chip" key={x}>{x}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useLang } from '../i18n'
import { useReveal } from '../hooks'

export default function Strengths() {
  const ref = useReveal()
  const { t } = useLang()
  const { strengths, toolset, ui } = t

  return (
    <section className="section" id="strengths" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <div>
            <p className="mono" style={{ marginBottom: 14 }}>{ui.strengths.no}</p>
            <h2>{ui.strengths.title}</h2>
          </div>
          <p className="sub">{ui.strengths.sub}</p>
        </div>

        <div className="strength-grid">
          {strengths.map((s, i) => (
            <div className="strength-card reveal" data-delay={String((i % 3) + 1)} key={s.index}>
              <span className="idx">{s.index}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="toolset reveal" data-delay="2">
          <span className="lead mono">{ui.strengths.toolkit}</span>
          {toolset.map((t) => <span className="chip" key={t}>{t}</span>)}
        </div>
      </div>
    </section>
  )
}

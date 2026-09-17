import { useLang } from '../i18n'
import { FadeUp, CardIn } from '../anim'
import BorderGlow from './BorderGlow'

/* ---------- 项目封面：暗色抽象 SVG（后续可直接替换为真实截图） ---------- */
export function Cover({ variant, accent }) {
  const c = accent
  const line = 'rgba(255,255,255,0.10)'
  const faint = 'rgba(255,255,255,0.05)'

  if (variant === 'tiles') {
    const screens = []
    for (let r = 0; r < 2; r++) {
      for (let col = 0; col < 3; col++) {
        const x = 90 + col * 250
        const y = 90 + r * 210
        screens.push(
          <g key={`${r}-${col}`}>
            <rect x={x} y={y} width={200} height={170} rx={16} fill="#101318" stroke={line} />
            <rect x={x + 20} y={y + 22} width={70} height={10} rx={5} fill={faint} />
            <rect x={x + 20} y={y + 44} width={130} height={8} rx={4} fill={faint} />
            <circle cx={x + 160} cy={y + 40} r={16} fill="none" stroke={c} strokeOpacity="0.7" strokeWidth="1.5" />
            <rect x={x + 20} y={y + 80} width={160} height={50} rx={10} fill={faint} stroke={line} />
            <rect x={x + 20} y={y + 142} width={72} height={14} rx={7} fill={c} fillOpacity="0.85" />
          </g>
        )
      }
    }
    return (
      <svg viewBox="0 0 900 560" preserveAspectRatio="xMidYMid slice">
        <rect width="900" height="560" fill="#0c0e11" />
        {screens}
        <text x="42" y="52" fill="rgba(255,255,255,0.28)" fontFamily="monospace" fontSize="13" letterSpacing="4">XUNGU · LEVEL FLOW 01→02</text>
      </svg>
    )
  }

  if (variant === 'halo') {
    return (
      <svg viewBox="0 0 900 560" preserveAspectRatio="xMidYMid slice">
        <rect width="900" height="560" fill="#0c0e11" />
        {[150, 190, 230, 270].map((r, i) => (
          <circle key={r} cx="450" cy="280" r={r} fill="none" stroke={line} strokeWidth="1" strokeDasharray={i % 2 ? '4 8' : 'none'} opacity={1 - i * 0.18} />
        ))}
        <circle cx="450" cy="280" r="104" fill="#11151a" stroke={line} />
        <circle cx="450" cy="280" r="104" fill="none" stroke={c} strokeOpacity="0.55" strokeWidth="1.5" />
        <circle cx="450" cy="280" r="44" fill="none" stroke={c} strokeOpacity="0.9" strokeWidth="1.5" />
        <circle cx="450" cy="280" r="10" fill={c} />
        <path d="M 620 160 q 60 40 40 110" fill="none" stroke={c} strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 280 420 q -50 -40 -30 -105" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
        <text x="42" y="52" fill="rgba(255,255,255,0.28)" fontFamily="monospace" fontSize="13" letterSpacing="4">CALM DEVICE · EMPATHY</text>
      </svg>
    )
  }

  /* duo */
  return (
    <svg viewBox="0 0 900 560" preserveAspectRatio="xMidYMid slice">
      <rect width="900" height="560" fill="#0c0e11" />
      <ellipse cx="330" cy="440" rx="150" ry="22" fill="rgba(255,255,255,0.04)" />
      <path d="M 250 200 v 210 q 0 34 80 34 t 80 -34 V 200 Z" fill="#11151a" stroke={line} />
      <ellipse cx="330" cy="200" rx="80" ry="26" fill="#151a20" stroke={line} />
      <ellipse cx="330" cy="200" rx="52" ry="16" fill="none" stroke={c} strokeOpacity="0.8" strokeWidth="1.5" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={310 + i * 20} cy={330 + i * 18} r={3} fill={c} opacity={0.7 - i * 0.2} />
      ))}
      <rect x="560" y="90" width="220" height="380" rx="28" fill="#101318" stroke={line} />
      <rect x="596" y="140" width="90" height="12" rx="6" fill={faint} />
      <circle cx="740" cy="180" r="26" fill="none" stroke={c} strokeOpacity="0.7" strokeWidth="1.5" />
      <rect x="596" y="230" width="148" height="70" rx="12" fill={faint} stroke={line} />
      <rect x="596" y="316" width="148" height="70" rx="12" fill={faint} stroke={line} />
      <rect x="596" y="414" width="100" height="18" rx="9" fill={c} fillOpacity="0.85" />
      <text x="42" y="52" fill="rgba(255,255,255,0.28)" fontFamily="monospace" fontSize="13" letterSpacing="4">AROMA · DEVICE × APP</text>
    </svg>
  )
}

export default function Works({ onOpen }) {
  const { t } = useLang()
  const { projects, ui } = t

  return (
    <section className="section works" id="works">
      <div className="container">
        <FadeUp className="section-head">
          <p className="mono" style={{ marginBottom: 14 }}>{ui.works.no}</p>
          <h2>{ui.works.title}</h2>
          <p className="sub" style={{ marginTop: 14 }}>{ui.works.sub}</p>
        </FadeUp>

        <div className="work-list">
          {projects.map((p, i) => (
            <CardIn index={i} key={p.id}>
            <BorderGlow
              className="work-card"
              backgroundColor="#101010"
              borderRadius={28}
              onClick={() => onOpen && onOpen(p.id)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' && onOpen) onOpen(p.id) }}
            >
              <div className="work-cover">
                <Cover variant={p.cover} accent={p.accent} />
              </div>
              <div className="work-info">
                <div className="work-top">
                  <span className="work-index">{p.index}</span>
                  <span className="work-year">{p.year}</span>
                </div>
                <h3>{p.title}</h3>
                <p className="subtitle">{p.subtitle}</p>
                <p className="work-desc">{p.desc}</p>
                <div className="work-tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
                <div className="work-metrics">
                  {p.metrics.map((m) => (
                    <div key={m.k}>
                      <div className="k mono">{m.k}</div>
                      <div className="v">{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </BorderGlow>
            </CardIn>
          ))}
        </div>
      </div>
    </section>
  )
}

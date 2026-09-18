import { useLang } from '../i18n'
import { FadeUp, CardIn } from '../anim'
import BorderGlow from './BorderGlow'
import AccordionGallery from './AccordionGallery'

/* ---------- 项目封面：优先真实图片，否则用暗色抽象 SVG ---------- */
export function Cover({ variant, accent, img, video }) {
  if (video) {
    return (
      <div className="cover-video">
        {/* 背景层：同一视频放大虚化填满横幅画框；前景层完整显示，不裁不拉伸 */}
        <video className="cover-video-bg" src={video} muted autoPlay loop playsInline preload="auto" />
        <video className="cover-video-main" src={video} muted autoPlay loop playsInline preload="auto" />
      </div>
    )
  }
  if (img) {
    return <img src={img} alt="" loading="lazy" />
  }
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

        <div className="work-accordion">
          <AccordionGallery
            items={projects.map((p) => ({
              id: p.id,
              image: p.coverImg,
              label: p.title,
              subtitle: p.subtitle,
              tags: p.tags,
              meta: `${p.index} · ${p.year}`,
              cta: ui.works.view || 'VIEW PROJECT',
            }))}
            defaultIndex={1}
            height={520}
            gap={10}
            radius={20}
            expandRatio={0.5}
            onSelect={(i) => onOpen && onOpen(projects[i].id)}
          />
        </div>
      </div>
    </section>
  )
}

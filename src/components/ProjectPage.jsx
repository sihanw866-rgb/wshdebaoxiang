import { useState } from 'react'
import { useLang } from '../i18n'
import { CharsPullUp, ScrollRevealText, FadeUp, CardIn } from '../anim'
import { Cover } from './Works'
import Masonry, { Lightbox } from './Masonry'
import DepthCarousel from './DepthCarousel'
import ScrollTop from './ScrollTop'

/* ---------- 过程物：抽象的暗色 SVG（后续可替换为真实过程截图） ---------- */
function Shot({ kind, accent }) {
  const c = accent
  const line = 'rgba(255,255,255,0.10)'
  const faint = 'rgba(255,255,255,0.05)'
  const grid = 'rgba(255,255,255,0.035)'

  if (kind === 'wireframe') {
    return (
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
        <rect width="800" height="500" fill="#0c0e11" />
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`v${i}`} x1={40 + i * 60} y1="52" x2={40 + i * 60} y2="470" stroke={grid} />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h${i}`} x1="40" y1={52 + i * 60} x2="760" y2={52 + i * 60} stroke={grid} />
        ))}
        {[0, 1, 2].map((i) => {
          const x = 70 + i * 230
          return (
            <g key={i}>
              <rect x={x} y={118} width={180} height={300} rx={12} fill="#101318" stroke={line} />
              <rect x={x + 16} y={140} width={80} height={9} rx={4} fill={faint} />
              <rect x={x + 16} y={160} width={148} height={7} rx={3} fill={faint} />
              <rect x={x + 16} y={184} width={148} height={92} rx={8} fill={faint} stroke={line} />
              <rect x={x + 16} y={290} width={148} height={46} rx={8} fill={faint} stroke={line} />
              <rect x={x + 16} y={352} width={96} height={12} rx={6} fill={c} fillOpacity="0.55" />
              <circle cx={x + 156} cy={144} r={7} fill="none" stroke={c} strokeOpacity="0.7" strokeWidth="1.5" />
            </g>
          )
        })}
      </svg>
    )
  }

  if (kind === 'flow') {
    const node = (x, y, w, active) => (
      <g key={`${x}-${y}`}>
        <rect x={x} y={y} width={w} height={64} rx={10} fill="#101318" stroke={active ? c : line} strokeOpacity={active ? 0.7 : 1} />
        <rect x={x + 16} y={y + 20} width={56} height={8} rx={4} fill={c} fillOpacity={active ? 0.8 : 0.28} />
        <rect x={x + 16} y={y + 38} width={w - 32} height={6} rx={3} fill={faint} />
      </g>
    )
    return (
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
        <rect width="800" height="500" fill="#0c0e11" />
        <g stroke={c} strokeOpacity="0.42" strokeWidth="1.5" fill="none">
          <path d="M 250 172 H 320" />
          <path d="M 450 172 H 520" />
          <path d="M 385 204 V 258" />
          <path d="M 250 258 H 520" />
          <path d="M 250 258 V 310" />
          <path d="M 520 258 V 310" />
        </g>
        <g fill={c} fillOpacity="0.8">
          <circle cx="320" cy="172" r="3" />
          <circle cx="520" cy="172" r="3" />
        </g>
        {node(110, 140, 140, true)}
        {node(320, 140, 140, false)}
        {node(530, 140, 140, false)}
        {node(180, 310, 140, false)}
        {node(450, 310, 140, false)}
      </svg>
    )
  }

  /* ui */
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
      <rect width="800" height="500" fill="#0c0e11" />
      <rect x="72" y="72" width="248" height="360" rx="30" fill="#101318" stroke={line} />
      <rect x="104" y="104" width="96" height={10} rx={5} fill={c} fillOpacity="0.8" />
      <rect x="104" y="126" width="150" height={7} rx={3} fill={faint} />
      <rect x="104" y="156" width="184" height="112" rx="12" fill={faint} stroke={line} />
      <circle cx="196" cy="212" r="34" fill="none" stroke={c} strokeOpacity="0.72" strokeWidth="1.5" />
      <circle cx="196" cy="212" r="9" fill={c} fillOpacity="0.9" />
      <rect x="104" y="288" width="184" height="52" rx="10" fill={faint} stroke={line} />
      <rect x="104" y="356" width="112" height="16" rx="8" fill={c} fillOpacity="0.85" />
      <rect x="104" y="392" width="184" height="1" fill={line} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="400" y={110 + i * 96} width="320" height="72" rx="14" fill="#101318" stroke={line} />
          <circle cx="432" cy={146 + i * 96} r="14" fill="none" stroke={c} strokeOpacity="0.6" strokeWidth="1.5" />
          <rect x="460" y={132 + i * 96} width="120" height="8" rx="4" fill={faint} />
          <rect x="460" y={150 + i * 96} width="180" height="6" rx="3" fill={faint} />
          <rect x="640" y={138 + i * 96} width="52" height="18" rx="9" fill={c} fillOpacity={i === 0 ? 0.85 : 0.22} />
        </g>
      ))}
    </svg>
  )
}

export default function ProjectPage({ projectId, onBack, onOpen, onAll }) {
  const { t } = useLang()
  const { projects, profile, ui } = t
  const s = ui.projectPage || {}
  /* zoom：{ srcs: string[], i: number } —— 传一组图时放大层可左右翻页 */
  const [zoom, setZoom] = useState(null)
  const openZoom = (srcs, i = 0) => {
    const list = (Array.isArray(srcs) ? srcs : [srcs]).filter(Boolean)
    if (!list.length) return
    setZoom({ srcs: list, i: Math.max(0, Math.min(i, list.length - 1)) })
  }
  const moveZoom = (n) => setZoom((z) => (z ? { ...z, i: n } : z))

  const found = projects.findIndex((p) => p.id === projectId)
  const idx = found < 0 ? 0 : found
  const p = projects[idx]
  const next = projects[(idx + 1) % projects.length]
  const d = p.detail || {}
  const steps = d.process || []
  const caps = s.shotCaps || []
  /* 未配置 shots 的项目沿用抽象占位图；显式给空数组则表示这一节不展示 */
  const shotList =
    p.shots || [
      { kind: 'wireframe', capIndex: 0 },
      { kind: 'flow', capIndex: 1 },
      { kind: 'ui', capIndex: 2 },
    ]

  const meta = [
    { k: (s.labels || {}).role, v: d.role },
    { k: (s.labels || {}).period, v: d.period },
    { k: (s.labels || {}).team, v: d.team },
    { k: (s.labels || {}).deliverables, v: d.deliverables },
  ]

  return (
    <section className="page-project">
      <div className="container">
        <button className="back-link back-pill" onClick={onBack}>
          <span className="arrow">←</span>
          <span>{s.back}</span>
        </button>

        <FadeUp className="proj-head">
          <p className="mono" style={{ marginBottom: 16, color: 'var(--primary)' }}>
            {p.index} — {s.projLabel}
          </p>
          <h1 className="proj-title">
            <CharsPullUp text={p.title} />
          </h1>
          <p className="proj-subtitle">{p.subtitle}</p>
          <ul className="proj-tags">
            {p.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </FadeUp>

        {d.claim ? (
          <div className={`proj-hero${p.heroWide ? ' wide' : ''}`}>
            <FadeUp className="proj-hero-text">
              <p className="hero-claim">{d.claim}</p>
              {d.claimLead && <p className="hero-claim-lead">{d.claimLead}</p>}
              <div className="hero-meta">
                {meta.map((m) => (
                  <div className="cell" key={m.k}>
                    <div className="mono">{m.k}</div>
                    <div className="v">{m.v}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.08} className={`proj-hero-media${p.heroWide ? ' wide' : ''}`}>
              <div className={`hero-media-frame${p.heroWide ? ' wide' : ''}`}>
                <Cover variant={p.cover} accent={p.accent} img={p.coverImg} video={p.coverVideo} />
                <div className="noise-overlay" />
              </div>
              <span className="hero-media-cap mono">
                {p.coverCap || (p.coverVideo ? (s.demoVideo || 'Prototype demo') : (s.coverLabel || 'Cover'))}
              </span>
            </FadeUp>
          </div>
        ) : (
          <FadeUp delay={0.1}>
            <div className="proj-cover">
              <Cover variant={p.cover} accent={p.accent} img={p.coverImg} video={p.coverVideo} />
              <div className="noise-overlay" />
            </div>
          </FadeUp>
        )}

        {/* 抬头下方的大画幅影片块：竖版影片与文字并排（图文结合），横版影片居中 */}
        {p.videoBlock && !p.videoTall && (
          <FadeUp className="hero-video-wrap">
            <div className="hero-video-block">
              <video src={p.videoBlock} autoPlay loop muted playsInline />
              <span className="hero-media-cap mono">{p.videoCap}</span>
            </div>
          </FadeUp>
        )}
        {p.videoBlock && p.videoTall && (
          <FadeUp className="hero-video-wrap side">
            <div className="hero-video-block tall">
              <video src={p.videoBlock} autoPlay loop muted playsInline />
            </div>
            <div className="hero-video-side">
              <p className="mono side-label">{p.videoLabel || 'PRODUCT FILM'}</p>
              {p.videoTitle && <h3>{p.videoTitle}</h3>}
              {p.videoDesc && <p className="side-desc">{p.videoDesc}</p>}
              {(p.videoPoints || []).length > 0 && (
                <ul className="flow-steps">
                  {p.videoPoints.map((pt) => (
                    <li key={pt.no}>
                      <span className="no mono">{pt.no}</span>
                      <div className="flow-step-main">
                        <h4>{pt.t}</h4>
                        <p>{pt.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {p.videoCap && <span className="hero-media-cap mono">{p.videoCap}</span>}
            </div>
          </FadeUp>
        )}

        {!d.claim && (
          <div className="proj-meta">
            {meta.map((m) => (
              <div className="cell" key={m.k}>
                <div className="mono">{m.k}</div>
                <div className="v">{m.v}</div>
              </div>
            ))}
          </div>
        )}

        <div className="proj-body">
          <div className="proj-body-main">
            <p className="mono proj-block-label">{s.overview}</p>
            <div className="proj-overview">
              <ScrollRevealText text={d.overview || p.desc} />
            </div>
          </div>

          <aside className="proj-side">
            <p className="mono proj-block-label">{s.metrics}</p>
            {p.metrics.map((m) => (
              <div className="proj-metric" key={m.k}>
                <div className="k mono">{m.k}</div>
                <div className="v">{m.v}</div>
              </div>
            ))}
          </aside>
        </div>

        {(d.chapters || []).map((ch) => {
          const m = ch.media
          const body = (
            <>
              {ch.claim && <h3 className="chapter-claim">{ch.claim}</h3>}
              {ch.lead && <p className="chapter-lead">{ch.lead}</p>}
              {(ch.paras || []).map((tx, i) => (
                <p className="chapter-para" key={i}>{tx}</p>
              ))}
              {(ch.steps || []).length > 0 && (
                <ul className="flow-steps">
                  {ch.steps.map((pt) => (
                    <li key={pt.no}>
                      <span className="no mono">{pt.no}</span>
                      <div className="flow-step-main">
                        <h4>{pt.t}</h4>
                        <p>{pt.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {(ch.items || []).length > 0 && (
                <div className={`chapter-items cols-${ch.items.length >= 4 ? 4 : 3}`}>
                  {ch.items.map((it) => (
                    <div className="chapter-card" key={it.no + it.t}>
                      <span className="no mono">{it.no}</span>
                      <h4>{it.t}</h4>
                      <p>{it.d}</p>
                      {it.list && (
                        <ul className="chapter-card-list">
                          {it.list.map((li, i) => <li key={i}>{li}</li>)}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )

          const flip = Number(ch.no) % 2 === 0
          return (
            <div className="proj-chapter" key={ch.no}>
              <FadeUp>
                <div className="chapter-head">
                  <span className="chapter-no mono">{ch.no}</span>
                  <div className="chapter-names">
                    <h2 className="chapter-zh">{ch.zh}</h2>
                    <span className="chapter-en mono">{ch.en}</span>
                  </div>
                </div>
              </FadeUp>

              {m && m.side ? (
                <FadeUp delay={0.06} className={`chapter-split${flip ? ' flip' : ''}`}>
                  <div className={`chapter-media side ${m.type}`}>
                    {m.type === 'pair' ? (
                      <>
                        <div className="pair-stage">
                          <button type="button" className="pair-cell main" onClick={() => openZoom(m.items.map((x) => x.img), 0)}>
                            <img src={m.items[0].img} alt={m.items[0].alt || ''} loading="lazy" />
                          </button>
                          <button type="button" className="pair-cell" onClick={() => openZoom(m.items.map((x) => x.img), 1)}>
                            <img src={m.items[1].img} alt={m.items[1].alt || ''} loading="lazy" />
                          </button>
                        </div>
                        {m.cap && <span className="pair-cap mono">{m.cap}</span>}
                      </>
                    ) : m.type === 'masonry' ? (
                      <Masonry items={m.items} natural={m.natural} onOpen={(it) => openZoom(m.items.map((x) => x.img), Math.max(0, m.items.findIndex((x) => x.id === it.id)))} />
                    ) : m.type === 'carousel' ? (
                      <div className="carousel-stage" style={{ '--dc-h': `${m.h || 620}px` }}>
                        <DepthCarousel
                          items={m.items.map((x) => ({ image: x.img, alt: x.alt || '' }))}
                          cardWidth={m.cw || 264}
                          cardHeight={m.chh || 560}
                          visibleCards={3}
                          depth={170}
                          spread={64}
                          tilt={18}
                          blur={4}
                          autoplay
                          autoplayDelay={3400}
                          onOpen={(_it, i) => openZoom(m.items.map((x) => x.img), i)}
                        />
                        {m.cap && <span className="carousel-cap mono">{m.cap}</span>}
                      </div>
                    ) : m.type === 'img' ? (
                      <figure className="chapter-figure">
                        <img src={m.src} alt={m.cap} loading="lazy" style={{ cursor: 'zoom-in' }} onClick={() => openZoom([m.src], 0)} />
                        {m.cap && <figcaption>{m.cap}</figcaption>}
                      </figure>
                    ) : (
                      <figure className={`chapter-figure${m.tall ? ' tall' : ''}`}>
                        <video src={m.src} autoPlay loop muted playsInline {...(m.controls ? { controls: true } : {})} />
                        {m.cap && <figcaption>{m.cap}</figcaption>}
                      </figure>
                    )}
                  </div>
                  <div className="chapter-split-body">{body}</div>
                </FadeUp>
              ) : (
                <>
                  <FadeUp delay={0.06}>{body}</FadeUp>
                  {m && m.type === 'masonry' && (
                    <FadeUp className="masonry-block">
                      <span className="masonry-cap">{m.cap}</span>
                      <Masonry
                        items={m.items}
                        natural={m.natural}
                        onOpen={(it) => openZoom(m.items.map((x) => x.img), Math.max(0, m.items.findIndex((x) => x.id === it.id)))}
                      />
                    </FadeUp>
                  )}
                  {m && m.type === 'img' && (
                    <FadeUp className="chapter-media-wrap">
                      <figure className="chapter-figure">
                        <img src={m.src} alt={m.cap} loading="lazy" style={{ cursor: 'zoom-in' }} onClick={() => openZoom([m.src], 0)} />
                        {m.cap && <figcaption>{m.cap}</figcaption>}
                      </figure>
                    </FadeUp>
                  )}
                  {m && m.type === 'video' && (
                    <FadeUp className="chapter-media-wrap">
                      <figure className={`chapter-figure${m.tall ? ' tall' : ''}`}>
                        <video src={m.src} autoPlay loop muted playsInline {...(m.controls ? { controls: true } : {})} />
                        {m.cap && <figcaption>{m.cap}</figcaption>}
                      </figure>
                    </FadeUp>
                  )}
                </>
              )}
            </div>
          )
        })}

        {!d.chapters && steps.length > 0 && (
          <div className="proj-section">
            <p className="mono">{s.process}</p>
            <div className="process-grid">
              {steps.map((st, i) => (
                <CardIn index={i % 4} key={st.no + st.title}>
                  <div className="process-card">
                    <span className="no">{st.no}</span>
                    <h4>{st.title}</h4>
                    <p>{st.desc}</p>
                  </div>
                </CardIn>
              ))}
            </div>
          </div>
        )}

        {shotList.length > 0 && (
        <div className="proj-section">
          <p className="mono">{s.shots}</p>
          <div className="shot-grid">
            {shotList.map((sh, i) => {
              if (sh.masonry) {
                return (
                  <FadeUp key={sh.kind} className="masonry-block">
                    <span className="masonry-cap">{caps[sh.capIndex]} · {sh.items.length}</span>
                    <Masonry
                      items={sh.items}
                      onOpen={(it) =>
                        openZoom(
                          sh.items.map((x) => x.img),
                          Math.max(0, sh.items.findIndex((x) => x.id === it.id))
                        )
                      }
                    />
                  </FadeUp>
                )
              }

              // 图文结合：图收窄到一侧，另一侧补上分步说明
              if (sh.split) {
                return (
                  <FadeUp key={sh.kind} className="shot-cell split">
                    <div className="flow-split">
                      <figure className="shot flow-figure">
                        <img
                          src={sh.img}
                          alt={sh.cap || caps[sh.capIndex]}
                          loading="lazy"
                          style={{ cursor: 'zoom-in' }}
                          onClick={() => openZoom([sh.img], 0)}
                        />
                        <figcaption>{sh.cap || caps[sh.capIndex]}</figcaption>
                      </figure>

                      <div className="flow-side">
                        {sh.title && <h3 className="flow-title">{sh.title}</h3>}
                        {sh.lead && <p className="flow-lead">{sh.lead}</p>}
                        {(sh.points || []).length > 0 && (
                          <ul className="flow-steps">
                            {sh.points.map((pt) => (
                              <li key={pt.no}>
                                <span className="no mono">{pt.no}</span>
                                <div className="flow-step-main">
                                  <h4>{pt.t}</h4>
                                  <p>{pt.d}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </FadeUp>
                )
              }

              return (
                <FadeUp delay={i * 0.08} key={sh.kind} className={`shot-cell${i === 0 || sh.wide ? ' wide' : ''}${sh.img ? ' has-img' : ''}`}>
                  <figure className="shot">
                    {sh.img ? (
                      <img
                        src={sh.img}
                        alt={sh.cap || caps[sh.capIndex]}
                        loading="lazy"
                        style={{ cursor: 'zoom-in' }}
                        onClick={() => openZoom([sh.img], 0)}
                      />
                    ) : (
                      <Shot kind={sh.kind} accent={p.accent} />
                    )}
                    <figcaption>{sh.cap || caps[sh.capIndex]}</figcaption>
                  </figure>
                </FadeUp>
              )
            })}
          </div>
        </div>
        )}

        {d.reflection && (
          <FadeUp>
            <div className="proj-quote">
              <p className="mono">{s.reflection}</p>
              <p className="quote-text">{d.reflection}</p>
            </div>
          </FadeUp>
        )}

        <div className="proj-next">
          <button className="link-arrow" onClick={() => onOpen && onOpen(next.id)}>
            {s.next} · {next.title} <span>→</span>
          </button>
          <button className="link-arrow" onClick={onAll}>
            {s.allWorks} <span>↗</span>
          </button>
        </div>

        <div className="page-foot">
          <span className="mono">© 2026 {profile.nameEn}</span>
          <span className="mono">{p.year}</span>
        </div>
      </div>

      <ScrollTop label={s.toTop} />

      <Lightbox
        src={zoom ? zoom.srcs[zoom.i] : null}
        srcs={zoom ? zoom.srcs : undefined}
        index={zoom ? zoom.i : 0}
        onNavigate={moveZoom}
        onClose={() => setZoom(null)}
      />
    </section>
  )
}

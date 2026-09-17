import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

/** 逐词上浮：每个词从遮罩下方拉起，间隔 0.08s */
export function WordsPullUp({ text, className = '', delay = 0, asterisk = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const words = String(text).split(' ')

  return (
    <span ref={ref} className={`pull-wrap ${className}`}>
      {words.map((w, i) => (
        <span className="pull-mask" key={`${w}-${i}`}>
          <motion.span
            className="pull-word"
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ delay: delay + i * 0.08, duration: 0.9, ease: EASE }}
          >
            {w}
            {asterisk && i === words.length - 1 && <sup className="pull-asterisk">✳︎</sup>}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/** 多段样式混排的逐词上浮：segments = [{ text, className }] */
export function WordsPullUpMultiStyle({ segments, className = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  let wordIndex = 0
  const words = segments.flatMap((seg, si) =>
    String(seg.text).split(' ').map((w) => ({ word: w, cls: seg.className || '', key: `${si}-${w}-${wordIndex++}` }))
  )

  return (
    <span ref={ref} className={`pull-wrap ${className}`}>
      {words.map((w, i) => (
        <span className="pull-mask" key={w.key}>
          <motion.span
            className={`pull-word ${w.cls}`}
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ delay: delay + i * 0.08, duration: 0.9, ease: EASE }}
          >
            {w.word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/** 滚动逐字显影：字符透明度随滚动位置从 0.2 → 1 */
function AnimatedLetter({ char, index, total, progress }) {
  const p = index / total
  const opacity = useTransform(progress, [p - 0.1, p + 0.05], [0.2, 1])
  return <motion.span style={{ opacity }}>{char}</motion.span>
}

export function ScrollRevealText({ text, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })
  const chars = Array.from(String(text))

  return (
    <p ref={ref} className={className}>
      {chars.map((c, i) => (
        <AnimatedLetter key={i} char={c} index={i} total={chars.length} progress={scrollYProgress} />
      ))}
    </p>
  )
}

/** 通用淡入上浮 */
export function FadeUp({ children, delay = 0, y = 20, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay, duration: 0.8, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/** 卡片入场：轻微缩放 + 淡入，可传 index 做错峰 */
export function CardIn({ children, index = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

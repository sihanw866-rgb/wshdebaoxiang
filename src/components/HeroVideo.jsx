import { useEffect, useRef, useState } from 'react'

const SENSITIVITY = 0.8
const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4'

/**
 * 鼠标横向移动 = 时间轴擦洗（scrub）的全屏视频背景。
 * 鼠标往右移动，视频前进；往左移动，视频后退。
 * 不做 autoplay，因此首屏是静止的一帧，动起来全靠鼠标。
 */
export default function HeroVideo({ onFail }) {
  const videoRef = useRef(null)
  const targetRef = useRef(0)
  const seekingRef = useRef(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const applySeek = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return
      const t = Math.min(Math.max(targetRef.current, 0), video.duration)
      if (Math.abs(video.currentTime - t) < 0.02) return
      seekingRef.current = true
      try {
        video.currentTime = t
      } catch {
        seekingRef.current = false
      }
    }

    // 上一次 seek 完成后，若目标时间又变了，再排下一次，避免 seek 洪水
    const onSeeked = () => {
      seekingRef.current = false
      applySeek()
    }

    const onMeta = () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        targetRef.current = video.duration * 0.12 // 先停在有画面的一帧，避免黑屏
        applySeek()
        setReady(true)
      }
    }

    // 触屏设备没有 mousemove，改为静音循环播放，保证画面不是死的
    if (window.matchMedia('(pointer: coarse)').matches) {
      video.loop = true
      video.play().catch(() => {})
      setReady(true)
    }

    let prevX = null
    const onMove = (e) => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return
      const x = e.clientX
      if (prevX === null) {
        prevX = x
        return
      }
      const delta = x - prevX
      prevX = x
      targetRef.current = Math.min(
        Math.max(targetRef.current + (delta / window.innerWidth) * SENSITIVITY * video.duration, 0),
        video.duration
      )
      if (!seekingRef.current) applySeek()
    }

    video.addEventListener('seeked', onSeeked)
    video.addEventListener('loadedmetadata', onMeta)
    window.addEventListener('mousemove', onMove)

    return () => {
      video.removeEventListener('seeked', onSeeked)
      video.removeEventListener('loadedmetadata', onMeta)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className={`hero-video ${ready ? 'is-ready' : ''}`}
      src={VIDEO_SRC}
      muted
      playsInline
      preload="auto"
      onError={onFail}
    />
  )
}

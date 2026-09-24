import { createRequire } from 'module'
const require = createRequire('C:/Users/DELL/.workbuddy/binaries/node/workspace/node_modules/')
const { chromium } = require('playwright-core')
import os from 'os'
import path from 'path'
import fs from 'fs'

const outDir = fs.mkdtempSync(path.join(os.tmpdir(), 'calm-verify-'))
const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--no-proxy-server'] })
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } })
await page.goto('http://127.0.0.1:4173', { waitUntil: 'commit', timeout: 60000 })
await page.waitForSelector('.work-accordion', { timeout: 90000 })
await page.waitForTimeout(1500)

// 进入静行项目详情页（DOM 直接触发面板 onClick，绕过动画不稳定性）
await page.evaluate(() => {
  const panels = [...document.querySelectorAll('.ag-panel')]
  const target = panels.find((p) => p.querySelector('img[src="/calm-cover.jpg"]'))
  target.click()
})
await page.waitForSelector('.page-project', { timeout: 10000 })
await page.waitForTimeout(1500)

// 1. 影片块检查
const videoInfo = await page.evaluate(async () => {
  const block = document.querySelector('.hero-video-block')
  if (!block) return { found: false }
  const v = block.querySelector('video')
  const r = block.getBoundingClientRect()
  // 等视频可播
  for (let i = 0; i < 40 && v.readyState < 3; i++) await new Promise((res) => setTimeout(res, 250))
  return {
    found: true,
    width: Math.round(r.width),
    height: Math.round(r.height),
    readyState: v.readyState,
    playing: !v.paused && v.currentTime > 0,
    cap: block.querySelector('.hero-media-cap')?.textContent,
    heroCoverIsImg: !!document.querySelector('.hero-media-frame img, .proj-cover img'),
  }
})
console.log('VIDEO_BLOCK:', JSON.stringify(videoInfo))

// 影片块截图（滚动到影片块）
await page.locator('.hero-video-block').scrollIntoViewIfNeeded()
await page.waitForTimeout(900)
await page.screenshot({ path: path.join(outDir, 'video-block.png') })

// 2. 草图章节：完整显示检查（第 05 章 masonry）
const sketchInfo = await page.evaluate(() => {
  const chapters = [...document.querySelectorAll('.proj-chapter')]
  const ch05 = chapters.find((c) => c.querySelector('.chapter-no')?.textContent.trim() === '05')
  if (!ch05) return { found: false }
  const list = ch05.querySelector('.masonry-list')
  const items = [...ch05.querySelectorAll('.masonry-item')]
  const cap = ch05.querySelector('.masonry-cap')?.textContent
  const details = items.map((it) => {
    const img = it.querySelector('img')
    const r = it.getBoundingClientRect()
    const boxAR = r.width / r.height
    const natAR = img.naturalWidth / img.naturalHeight
    return { loaded: img.naturalWidth > 0, boxAR: +boxAR.toFixed(3), natAR: +natAR.toFixed(3), cropped: Math.abs(boxAR - natAR) > 0.02 }
  })
  const w = list ? Math.round(list.getBoundingClientRect().width) : 0
  return { found: true, cap, count: items.length, listWidth: w, details }
})
console.log('SKETCHES:', JSON.stringify(sketchInfo, null, 1))

// 草图区截图
const ch05el = await page.evaluate(() => {
  const chapters = [...document.querySelectorAll('.proj-chapter')]
  const ch05 = chapters.find((c) => c.querySelector('.chapter-no')?.textContent.trim() === '05')
  ch05.scrollIntoView({ block: 'start' })
  return true
})
await page.waitForTimeout(2200)
await page.screenshot({ path: path.join(outDir, 'sketches.png'), fullPage: false })
// 再往下滚一屏截瀑布流下半部
await page.mouse.wheel(0, 900)
await page.waitForTimeout(1200)
await page.screenshot({ path: path.join(outDir, 'sketches-2.png'), fullPage: false })

// 3. 场景章第 08 章图集数量
const sceneInfo = await page.evaluate(() => {
  const chapters = [...document.querySelectorAll('.proj-chapter')]
  const ch08 = chapters.find((c) => c.querySelector('.chapter-no')?.textContent.trim() === '08')
  if (!ch08) return { found: false }
  return { found: true, count: ch08.querySelectorAll('.masonry-item').length, cap: ch08.querySelector('.masonry-cap')?.textContent }
})
console.log('SCENES:', JSON.stringify(sceneInfo))

console.log('OUT_DIR:', outDir)
await browser.close()

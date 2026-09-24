import { createRequire } from 'module'
const require = createRequire('C:/Users/DELL/.workbuddy/binaries/node/workspace/node_modules/')
const { chromium } = require('playwright-core')

const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--no-proxy-server'] })
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } })
page.on('console', (m) => console.log('PAGE:', m.text().slice(0, 120)))
await page.goto('http://127.0.0.1:4173', { waitUntil: 'commit', timeout: 60000 })
await page.waitForSelector('.work-accordion', { timeout: 90000 })
await page.waitForTimeout(1000)

const info = await page.evaluate(() => {
  const panels = [...document.querySelectorAll('.ag-panel')]
  return {
    panelCount: panels.length,
    imgs: panels.map((p) => p.querySelector('img')?.getAttribute('src')),
    hasCalmImg: panels.some((p) => p.querySelector('img[src="/calm-cover.jpg"]')),
  }
})
console.log('INFO:', JSON.stringify(info))

const clicked = await page.evaluate(() => {
  const panels = [...document.querySelectorAll('.ag-panel')]
  const target = panels.find((p) => p.querySelector('img[src="/calm-cover.jpg"]'))
  if (!target) return 'no target'
  target.click()
  return 'clicked'
})
console.log('CLICK:', clicked)
await page.waitForTimeout(2500)
const after = await page.evaluate(() => ({
  pageProject: !!document.querySelector('.page-project'),
  bodyClass: document.body.className,
  mainChildClasses: [...document.querySelector('main')?.children || []].map((c) => c.className).slice(0, 3),
}))
console.log('AFTER:', JSON.stringify(after))
await browser.close()

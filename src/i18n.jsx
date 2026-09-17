import { createContext, useContext, useEffect, useState } from 'react'

/* ================= 中文内容 ================= */
const zh = {
  profile: {
    name: '王思涵',
    namePinyin: 'WANG SIHAN',
    nameEn: 'WANG SIHAN',
    roles: ['交互设计师', 'AI 设计师', '产品设计师'],
    rolesEn: 'INTERACTION / AI / PRODUCT DESIGNER',
    tagline: ['在交互、AI 与产品之间，', '寻找体验的最优解。'],
    heroIntro:
      '我是王思涵，一名从产品设计出发、正在向交互与 AI 设计进发的设计师。用研究支撑决策，用 AI 放大产出，让每个像素都有理由。',
    location: '四川成都 · 求学于山东青岛',
    email: 'wsh15928698075@qq.com',
    phone: '15928698075',
    intro: [
      '我是王思涵，青岛理工大学产品设计专业本科生，专注于交互设计、AI 辅助设计与产品设计方向。习惯从市场与用户数据出发，找到真实的需求与痛点，再用设计与 AI 工具把它们推进为可落地的方案。',
      '从儿童学习 App 的交互原型，到自闭症儿童情绪安抚设备，再到智能香薰机与移动端应用——我关注「人」与「智能」的交接处，让技术以更自然的方式进入生活。',
    ],
    education: {
      school: '青岛理工大学',
      major: '产品设计专业（本科）',
      period: '2023.09 — 2027.06',
      gpa: 'GPA 4.53 / 5.0',
      honor: '2025—2026 学年 孙若溪社会奖学金',
    },
  },
  stats: [
    { value: '03', suffix: '', label: '交付级设计项目' },
    { value: '90', suffix: '+', label: '界面原型产出' },
    { value: '4.53', suffix: '/5.0', label: '本科 GPA' },
    { value: '10', suffix: '+', label: '校园活动策划' },
  ],
  projects: [
    {
      id: 'xungu', index: '01', year: '2026.05 — 06',
      title: '寻古拾光 · 传统文化学习小游戏',
      subtitle: '儿童寓教于乐 App · 交互原型',
      tags: ['移动端 App', '交互设计', '原型动效'],
      desc: '面向 7—13 岁儿童的中国传统文化轻量化学习 App。完成前期调研与产品定位，以 GPT 生成界面素材、Figma 加工排版，建立关卡跳转逻辑与「闯关—奖励」机制，产出 40 个界面的高保真原型与点击动效演示。',
      metrics: [{ k: '界面产出', v: '40+' }, { k: '核心机制', v: '关卡化学习路径' }],
      cover: 'tiles', accent: '#8fd3ff',
    },
    {
      id: 'calm', index: '02', year: '2026.04 — 06',
      title: '自闭症儿童情绪安抚设备',
      subtitle: '关怀向智能硬件 · 产品设计',
      tags: ['智能硬件', '用户研究', 'AI 辅助设计'],
      desc: '从政策与市场调研切入，明确选题方向；构建用户画像与旅程图，完成竞品分析与痛点总结。借助 AI 工具生成设计意向与草图，推进至产品建模与渲染，并制作介绍展板，用可灵 AI 与剪映产出产品介绍视频。',
      metrics: [{ k: '研究方法', v: '画像 / 旅程图 / 竞品' }, { k: '交付物', v: '建模渲染 + 介绍视频' }],
      cover: 'halo', accent: '#b9f06a',
    },
    {
      id: 'aroma', index: '03', year: '2026.05 — 06',
      title: '智能香薰机与移动端 App',
      subtitle: '软硬一体 · UI / 交互设计',
      tags: ['智能硬件', '移动端 App', '高保真 UI'],
      desc: '面向 25—35 岁中高端人群的智能香薰方案。确认产品外观后，用 Figma 完成低保真原型 30 余张；复盘调研确定界面风格后，产出高保真界面与切图 50 余张，并在 Figma Make 中完成可交互演示，配合即梦、可灵 AI 制作功能演示视频。',
      metrics: [{ k: '低保真', v: '30+' }, { k: '高保真切图', v: '50+' }],
      cover: 'duo', accent: '#e8c48a',
    },
  ],
  strengths: [
    { index: '01', title: '市场与用户洞察', desc: '善于从市场商品数据中发现用户需求与痛点，用用户画像、旅程图与竞品分析支撑每一次设计决策，而不是凭感觉画图。' },
    { index: '02', title: 'AI 工具链整合', desc: 'GPT、即梦、可灵 AI 深度融入调研、草图、素材生成与视频制作全流程——让 AI 成为设计杠杆，而不是噱头。' },
    { index: '03', title: '交互原型与动效', desc: '以 Figma / Figma Make 为核心，从低保真到高保真、从界面到点击动效，具备 40+ 界面量级的完整原型交付能力。' },
    { index: '04', title: '产品三维表达', desc: 'Rhino 建模、Keyshot 渲染，能把概念方案推进到可展示、可评审的产品级视觉呈现，兼顾形态、材料与工艺。' },
    { index: '05', title: '视觉与品牌语言', desc: 'PS / AI / Canva 支撑海报、展板与文案的视觉表达，让产品界面与传播物料保持一致的气质与细节。' },
    { index: '06', title: '协作与推动力', desc: '生活权益部与科技创新协会的经历，让我擅长信息汇总、一对一沟通与跨角色协作，把事情按节点推进落地。' },
  ],
  toolset: ['Figma', 'Figma Make', 'Rhino', 'Keyshot', 'Photoshop', 'Illustrator', 'GPT', '即梦 AI', '可灵 AI', '剪映', 'Canva', 'Excel / PPT'],
  ui: {
    nav: { about: '关于我', works: '精选项目', strengths: '个人优势', contact: '联系', cta: '联系我 ↗' },
    hero: { basedIn: 'Based in', status: 'Status', statusValue: '开放实习 / 校招机会', viewWork: '查看精选项目', scroll: 'SCROLL', scrubHint: '移动鼠标擦洗画面' },
    about: {
      no: '01 — About', title: '关于我',
      sub: '产品设计科班出身，向交互设计与 AI 设计延伸。相信好的体验来自扎实的研究与克制的表达。',
      heading: { pre: '从市场数据里找痛点，', em: '设计 × AI', post: ' 的交界处做产品。' },
    },
    aboutPage: {
      back: '← 返回首页',
      no: '01 — About',
      title: '关于我',
      lead: '产品设计科班出身，向交互设计与 AI 设计延伸。相信好的体验来自扎实的研究与克制的表达。',
      backToWork: '去看看精选项目',
    },
    works: { no: '02 — Selected Works', title: '精选项目', sub: '三个代表项目：从儿童教育 App 到关怀硬件再到软硬一体，覆盖研究、交互、UI 与产品表达全链路。' },
    strengths: { no: '03 — Strengths', title: '个人优势', sub: '设计判断、AI 工具链与产品表达，三条线拧成一股推进方案落地的能力。', toolkit: 'Toolkit' },
    contact: {
      no: '04 — Contact', line1: '有想法？', line2pre: '让我们一起把它', line2em: '做出来。',
      phoneLabel: 'Phone / WeChat', locationLabel: 'Location', lookingLabel: 'Looking for',
      lookingValue: '交互 / AI / 产品设计 实习与校招机会', footerNote: 'Designed & built with intent',
    },
  },
}

/* ================= English content ================= */
const en = {
  profile: {
    name: 'Wang Sihan',
    nameEn: 'WANG SIHAN',
    roles: ['Interaction Designer', 'AI Designer', 'Product Designer'],
    rolesEn: 'INTERACTION / AI / PRODUCT DESIGNER',
    tagline: ['Between interaction, AI and product,', 'I design for the optimal experience.'],
    heroIntro:
      "I'm Wang Sihan — trained in product design, moving into interaction and AI-driven design. Research grounds the decisions, AI amplifies the output, and every pixel has a reason.",
    location: 'Chengdu, Sichuan · Studying in Qingdao, Shandong',
    email: 'wsh15928698075@qq.com',
    phone: '15928698075',
    intro: [
      "I'm Wang Sihan, an undergraduate in Product Design at Qingdao University of Technology, focused on interaction design, AI-assisted design and product design. I start from market and user data to find real needs and pain points, then push them into buildable solutions with design and AI tools.",
      "From a kids' learning app, to a calming device for autistic children, to a smart aroma diffuser and its companion app — I care about where people meet intelligence, so that technology enters life more naturally.",
    ],
    education: {
      school: 'Qingdao University of Technology',
      major: 'Product Design (Undergraduate)',
      period: '2023.09 — 2027.06',
      gpa: 'GPA 4.53 / 5.0',
      honor: 'Sun Ruoxi Social Scholarship, 2025—2026',
    },
  },
  stats: [
    { value: '03', suffix: '', label: 'Shipped design projects' },
    { value: '90', suffix: '+', label: 'UI prototype screens' },
    { value: '4.53', suffix: '/5.0', label: 'Undergrad GPA' },
    { value: '10', suffix: '+', label: 'Campus events organized' },
  ],
  projects: [
    {
      id: 'xungu', index: '01', year: '2026.05 — 06',
      title: 'Xungu Shiguang · Traditional-culture Learning Game',
      subtitle: "Kids' edutainment App · Interaction prototype",
      tags: ['Mobile App', 'Interaction design', 'Prototype & motion'],
      desc: 'A lightweight app that teaches Chinese traditional culture to kids aged 7–13. Handled early research and product positioning, generated interface assets with GPT and refined them in Figma, built the level-jump logic and a challenge–reward loop, and delivered 40 high-fidelity screens with click-through motion.',
      metrics: [{ k: 'Screens', v: '40+' }, { k: 'Core loop', v: 'Level-based learning path' }],
      cover: 'tiles', accent: '#8fd3ff',
    },
    {
      id: 'calm', index: '02', year: '2026.04 — 06',
      title: 'Emotion-soothing Device for Autistic Children',
      subtitle: 'Care-oriented smart hardware · Product design',
      tags: ['Smart hardware', 'User research', 'AI-assisted design'],
      desc: 'Started from policy and market research to define the design direction; built user personas and journey maps, ran competitor analysis and pain-point synthesis. Used AI tools to generate design intents and sketches, then pushed through modeling and rendering, presentation boards, and a product film made with Kling AI and CapCut.',
      metrics: [{ k: 'Research', v: 'Persona / Journey / Competitor' }, { k: 'Deliverables', v: 'Renderings + product film' }],
      cover: 'halo', accent: '#b9f06a',
    },
    {
      id: 'aroma', index: '03', year: '2026.05 — 06',
      title: 'Smart Aroma Diffuser & Companion App',
      subtitle: 'Hardware × software · UI / interaction design',
      tags: ['Smart hardware', 'Mobile App', 'High-fidelity UI'],
      desc: 'A premium aroma solution for ages 25–35. After the product form was confirmed, produced 30+ low-fi wireframes in Figma, then 50+ high-fidelity screens and cut assets, with an interactive demo in Figma Make and a feature film created with Jimeng and Kling AI.',
      metrics: [{ k: 'Low-fi', v: '30+' }, { k: 'Hi-fi screens', v: '50+' }],
      cover: 'duo', accent: '#e8c48a',
    },
  ],
  strengths: [
    { index: '01', title: 'Market & user insight', desc: 'I dig real needs and pain points out of market data, and back every design decision with personas, journey maps and competitor analysis — never vibes alone.' },
    { index: '02', title: 'AI toolchain integration', desc: 'GPT, Jimeng and Kling AI run through the whole pipeline — research, sketches, assets and video. AI is a lever, not a gimmick.' },
    { index: '03', title: 'Prototyping & motion', desc: 'Figma / Figma Make first: from low-fi to high-fi, from screens to click-through motion, with proven delivery at 40+ screens.' },
    { index: '04', title: '3D product expression', desc: 'Rhino modeling and Keyshot rendering push concepts to presentation-grade visuals — form, materials and craft included.' },
    { index: '05', title: 'Visual & brand language', desc: 'PS / AI / Canva back up posters, boards and copy, keeping product UI and communication consistent in tone and detail.' },
    { index: '06', title: 'Collaboration & drive', desc: 'From student-union and innovation-club roles: strong at synthesizing information, one-on-one communication and shipping on schedule.' },
  ],
  toolset: ['Figma', 'Figma Make', 'Rhino', 'Keyshot', 'Photoshop', 'Illustrator', 'GPT', 'Jimeng AI', 'Kling AI', 'CapCut', 'Canva', 'Excel / PPT'],
  ui: {
    nav: { about: 'About', works: 'Work', strengths: 'Strengths', contact: 'Contact', cta: 'Get in touch ↗' },
    hero: { basedIn: 'Based in', status: 'Status', statusValue: 'Open to internships & new-grad roles', viewWork: 'View selected work', scroll: 'SCROLL', scrubHint: 'Move mouse to scrub the film' },
    about: {
      no: '01 — About', title: 'About me',
      sub: 'Trained in product design, extending into interaction and AI design. Good experiences come from solid research and restrained expression.',
      heading: { pre: 'Pain points from market data.', em: 'Design × AI', post: ' at the intersection.' },
    },
    aboutPage: {
      back: '← Back to home',
      no: '01 — About',
      title: 'About me',
      lead: 'Trained in product design, extending into interaction and AI design. Good experiences come from solid research and restrained expression.',
      backToWork: 'See selected work',
    },
    works: { no: '02 — Selected Works', title: 'Selected work', sub: 'Three representative projects — from a kids learning app to care hardware and hardware-software as one, covering research, interaction, UI and product storytelling.' },
    strengths: { no: '03 — Strengths', title: 'What I bring', sub: 'Design judgment, an AI toolchain and product storytelling — three threads braided into one ability to land solutions.', toolkit: 'Toolkit' },
    contact: {
      no: '04 — Contact', line1: 'Got an idea?', line2pre: "Let's make it ", line2em: 'real.',
      phoneLabel: 'Phone / WeChat', locationLabel: 'Location', lookingLabel: 'Looking for',
      lookingValue: 'Interaction / AI / Product design — internships & new-grad roles', footerNote: 'Designed & built with intent',
    },
  },
}

export const content = { zh, en }

const LangContext = createContext({ lang: 'zh', t: zh, toggle: () => {} })

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('wsh-lang') || 'zh' } catch { return 'zh' }
  })

  useEffect(() => {
    try { localStorage.setItem('wsh-lang', lang) } catch { /* ignore */ }
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }, [lang])

  const toggle = () => setLang((l) => (l === 'zh' ? 'en' : 'zh'))
  const t = content[lang]

  return <LangContext.Provider value={{ lang, t, toggle }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)

import { createContext, useContext, useEffect, useState } from 'react'

/* 寻古拾光：高保真界面截图（瀑布流），590×1278 */
const XUNGU_UI_SHOTS = Array.from({ length: 18 }, (_, i) => ({
  id: `ui-${String(i + 1).padStart(2, '0')}`,
  img: `/xungu-shots/ui-${String(i + 1).padStart(2, '0')}.jpg`,
  width: 590,
  height: 1278,
}))

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
    aboutSegments: [
      { text: '我是王思涵，', className: '' },
      { text: '一名在 AI 时代自学成长的设计师。', className: 'seg-italic' },
      { text: '我擅长交互设计、AI 辅助设计与产品表达。', className: '' },
    ],
    aboutScrollText:
      '过去三年，我在青岛理工大学接受系统的产品设计训练，同时把 AI 工具引入调研、草图与原型流程。从儿童学习 App 到关怀型硬件，我始终用研究支撑判断，让设计不止于好看。',
    aboutExtra: [
      '我更愿意把自己定义为「把复杂问题翻译成清晰界面」的人。做项目时习惯先花足够时间泡在用户和市场里，再动手画第一个界面——方向错了，后面的精致都是浪费。',
      '我持续跟进新工具，尤其是 AI 相关的那批。它们不会替我做判断，但能让我把想法验证得更快、把方案表达得更完整。',
    ],
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
    { value: '04', suffix: '', label: '交付级设计项目' },
    { value: '90', suffix: '+', label: '界面原型产出' },
    { value: '4.53', suffix: '/5.0', label: '本科 GPA' },
    { value: '10', suffix: '+', label: '校园活动策划' },
  ],
  projects: [
    {
      id: 'xungu', index: '01', year: '2026.05 — 06', coverImg: '/xungu-cover.jpg', coverVideo: '/xungu-demo.mp4',
      shots: [
        {
          kind: 'flow', img: '/xungu-flow.jpg', capIndex: 1, split: true,
          title: '主干链路 · 5 个状态节点',
          lead: '把「选关 → 讲解 → 交互学习 → 闯关结算 → 奖励回流」这条主干单独抽出来复核：每一步都要有明确的进入条件、可预期的返回路径，以及孩子卡住时的兜底。',
          points: [
            { no: '01', t: '选关 · 地图节点', d: '在地图上选定关卡节点，未解锁的节点保持灰态并给出提示，点击进入前置故事。' },
            { no: '02', t: '讲解 · 故事铺垫', d: '一段短动画交代本关的器物与背景，可跳过，也能随时翻回文物卡片。' },
            { no: '03', t: '交互 · 三种玩法', d: '拼图、问答与纹样连线轮换出现，答错即时退回对应讲解点，再试一次。' },
            { no: '04', t: '结算 · 星级判定', d: '依据碎片数量与尝试次数给出本关评级，达标即解锁下一个节点。' },
            { no: '05', t: '回流 · 奖励与地图', d: '发放「时光碎片」与徽章，一键回到地图并高亮新解锁（或未达标）的节点。' },
          ],
        },
        { kind: 'ui', capIndex: 2, masonry: true, wide: true, items: XUNGU_UI_SHOTS },
      ],
      title: '寻古拾光 · 传统文化学习小游戏',
      subtitle: '儿童寓教于乐 App · 交互原型',
      tags: ['移动端 App', '交互设计', '原型动效'],
      desc: '面向 7—13 岁儿童的中国传统文化轻量化学习 App。完成前期调研与产品定位，以 GPT 生成界面素材、Figma 加工排版，建立关卡跳转逻辑与「闯关—奖励」机制，产出 40 个界面的高保真原型与点击动效演示。',
      metrics: [{ k: '界面产出', v: '40+' }, { k: '核心机制', v: '关卡化学习路径' }],
      cover: 'tiles', accent: '#dedbc8',
      detail: {
        role: '产品定义 · 交互设计 · 原型动效',
        period: '2026.05 — 06 · 8 周',
        team: '个人项目',
        deliverables: '40+ 高保真界面 · 可点击原型 · 动效演示',
        overview: '面向 7—13 岁儿童的中国传统文化学习 App。我从市场调研与竞品拆解入手，确定「轻量化 + 关卡化」的产品定位；用 GPT 生成插画素材与文案初稿，在 Figma 中统一排版与视觉规范；最终建立关卡跳转逻辑与「闯关—奖励」闭环，交付 40 个高保真界面与关键路径的点击动效。',
        process: [
          { no: '01', title: '调研与定位', desc: '拆解 7—13 岁儿童的学习习惯与家长诉求，对比市面传统文化类 App 的内容组织方式，确定「短时长、强反馈、可收集」的切入点。' },
          { no: '02', title: '信息架构', desc: '搭建「主线闯关 + 支线收集」双轨结构，把知识点拆散分布在关卡节点上，避免一次性灌输造成流失。' },
          { no: '03', title: '素材与规范', desc: '用 GPT 生成插画与文案初稿，在 Figma 中统一排版、配色与图标规范，保证 40 个界面气质一致。' },
          { no: '04', title: '原型与动效', desc: '实现关卡跳转逻辑与「闯关—奖励」闭环，产出可点击原型与关键路径的过渡动效演示。' },
        ],
        reflection: '儿童产品的难点不在视觉够不够精致，而在每一次反馈是否值得期待——把奖励节奏调对，比堆更多内容有效得多。',
      },
    },
    {
      id: 'calm', index: '02', year: '2026.04 — 06', coverImg: '/calm-cover.jpg',
      title: '自闭症儿童情绪安抚设备',
      subtitle: '关怀向智能硬件 · 产品设计',
      tags: ['智能硬件', '用户研究', 'AI 辅助设计'],
      desc: '从政策与市场调研切入，明确选题方向；构建用户画像与旅程图，完成竞品分析与痛点总结。借助 AI 工具生成设计意向与草图，推进至产品建模与渲染，并制作介绍展板，用可灵 AI 与剪映产出产品介绍视频。',
      metrics: [{ k: '研究方法', v: '画像 / 旅程图 / 竞品' }, { k: '交付物', v: '建模渲染 + 介绍视频' }],
      cover: 'halo', accent: '#d9c9a3',
      detail: {
        role: '用户研究 · 产品设计 · 三维呈现',
        period: '2026.04 — 06 · 10 周',
        team: '个人项目（课程课题）',
        deliverables: '用户画像与旅程图 · 建模渲染 · 展板 · 介绍视频',
        overview: '一个面向自闭症儿童的情绪安抚设备。从政策与市场调研切入确认选题价值，构建家长与儿童双视角画像、绘制情绪爆发前后的旅程图，定位真正可介入的关键时刻；再借助 AI 生成设计意向与草图，推进到 Rhino 建模与 Keyshot 渲染，并用可灵 AI 与剪映产出产品介绍视频。',
        process: [
          { no: '01', title: '政策与市场', desc: '从特殊教育与儿童心理健康相关政策切入，结合现有产品形态，确认选题的社会价值与可行性。' },
          { no: '02', title: '用户与场景', desc: '构建家长与儿童双视角画像，绘制情绪爆发前、中、后的旅程图，定位可介入的关键时刻。' },
          { no: '03', title: '概念与草图', desc: '用 AI 生成设计意向与形态草图，在安全、可清洁、可携带之间反复取舍，收敛到最终形态。' },
          { no: '04', title: '建模与呈现', desc: 'Rhino 建模、Keyshot 渲染，配合介绍展板，用可灵 AI 与剪映制作产品介绍视频。' },
        ],
        reflection: '关怀型设计最容易犯的错，是替用户做决定。真正有用的判断来自旅程图里那个「爆发前 30 秒」，而不是我坐在桌前想象出来的需求。',
      },
    },
    {
      id: 'aroma', index: '03', year: '2026.05 — 06', coverImg: '/aroma-cover.jpg',
      title: '智能香薰机与移动端 App',
      subtitle: '软硬一体 · UI / 交互设计',
      tags: ['智能硬件', '移动端 App', '高保真 UI'],
      desc: '面向 25—35 岁中高端人群的智能香薰方案。确认产品外观后，用 Figma 完成低保真原型 30 余张；复盘调研确定界面风格后，产出高保真界面与切图 50 余张，并在 Figma Make 中完成可交互演示，配合即梦、可灵 AI 制作功能演示视频。',
      metrics: [{ k: '低保真', v: '30+' }, { k: '高保真切图', v: '50+' }],
      cover: 'duo', accent: '#cfc9b4',
      detail: {
        role: 'UI 设计 · 交互设计 · 演示输出',
        period: '2026.05 — 06 · 8 周',
        team: '个人项目',
        deliverables: '30+ 低保真 · 50+ 高保真切图 · 可交互演示 · 功能视频',
        overview: '面向 25—35 岁中高端人群的智能香薰方案。在外观确认后，我先用 Figma 输出 30 余张低保真线框跑通信息层级与设备联动流程；复盘调研确定界面语言后，产出 50 余张高保真界面与切图，在 Figma Make 中完成可交互演示，并配合即梦、可灵 AI 制作功能演示视频。',
        process: [
          { no: '01', title: '风格定位', desc: '复盘调研结论，面向 25—35 岁中高端人群确定「克制、留白、材质感」的界面语言。' },
          { no: '02', title: '低保真验证', desc: 'Figma 输出 30+ 张线框，先把信息层级与设备联动流程跑通，再谈细节。' },
          { no: '03', title: '高保真落地', desc: '产出 50+ 张高保真界面与切图，统一组件、状态与空态，保证开发可用性。' },
          { no: '04', title: '演示与传播', desc: '在 Figma Make 中完成可交互演示，配合即梦、可灵 AI 制作功能演示视频。' },
        ],
        reflection: '软硬一体的项目里，界面只是半个产品。把「设备此刻在做什么」讲清楚，比多加一个花哨的图表重要得多。',
      },
    },
    {
      id: 'stereo', index: '04', year: '2025', coverImg: '/stereo-cover.jpg',
      shots: [
        { kind: 'render', img: '/stereo-render.jpg', cap: '产品渲染', wide: true },
        { kind: 'detail', img: '/stereo-b-detail.jpg', cap: '部件与结构 · 爆炸图' },
        { kind: 'run', img: '/stereo-b-run.jpg', cap: '尺寸与运行方式' },
        { kind: 'board', img: '/stereo-board.jpg', cap: '完整设计展板' },
      ],
      title: '复古式可触摸音响',
      subtitle: 'STEREO · 可触摸的无障碍音响',
      tags: ['产品设计', '无障碍设计', 'Rhino / Keyshot'],
      desc: '把「听」变成「听 + 触」的复古音响：玻璃罩下的「水波节奏器」随音乐起伏，把声音转译成可见、可触摸的波纹。保留传统扬声功能、可随时随地播放，220mm 的体量单手可握。',
      metrics: [{ k: '主体尺寸', v: '220mm · 单手可握' }, { k: '核心概念', v: '水波节奏器 · 触听融合' }],
      cover: 'tiles', accent: '#dedbc8',
      detail: {
        role: '产品定义 · 三维建模 · 渲染表达',
        period: '产品设计课程项目',
        team: '个人项目',
        deliverables: '产品渲染 · 爆炸图 · 设计展板',
        overview: '传统家庭音响已经无法满足人们的功能需求与审美要求，人们开始追求个性化、注重设计的简约与时尚，希望在听音乐时获得多元体验。这款复古式可触摸音响保留传统扬声功能，可随时随地播放声音，并让听觉与触觉相融合：玻璃罩下的水波节奏器随乐句起伏，灵感来自手纹按摩器的纹理、海上兴起的海浪与水滴入湖的涟漪。开关按键、切歌键、调节旋钮与节奏感应板集中在一块面板上，220mm 的体量单手可握，体积小便于携带，适用于办公、学习与休闲多种场景。',
        process: [
          { no: '01', title: '背景与人群', desc: '普通消费者对音响品质与可玩性的需求日益增长，许多盲人朋友也表现出对音乐的浓厚兴趣——让声音「摸得到」成为设计的原点。' },
          { no: '02', title: '灵感转译', desc: '从手纹按摩器纹理、海上兴起的海浪、水滴入湖的水波中提取形态语言，收敛出「可触摸的波纹」这一核心概念。' },
          { no: '03', title: '部件与结构', desc: '开关按键、切歌键、调节旋钮、节奏感应板、音响中板与底板、四角支撑逐一推敲，玻璃罩下是随音乐起伏的水波节奏器。' },
          { no: '04', title: '渲染与表达', desc: '完成产品建模渲染与爆炸图、设计展板，用使用前后对比与多场景照片讲清使用方式。' },
        ],
        reflection: '无障碍不是最后补一个盲文标签，而是让信息长出第二种感官通道——当声音可以被看见、被摸到，设计才真正覆盖所有人。',
      },
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
  tools: [
    { key: 'figma', name: 'Figma', note: '界面设计、高保真原型与组件体系，日常主战场', level: 95 },
    { key: 'sparkle', name: 'Figma Make', note: '可交互演示，把静态稿变成能点的原型', level: 80 },
    { key: 'rhino', name: 'Rhino', note: '产品三维建模与曲面推敲，从草图到实体', level: 85 },
    { key: 'keyshot', name: 'Keyshot', note: '产品级渲染，材质、光影与最终表现力', level: 82 },
    { key: 'ps', name: 'Photoshop', note: '图像处理、视觉物料与海报合成', level: 88 },
    { key: 'ai', name: 'Illustrator', note: '矢量图形、图标与品牌视觉绘制', level: 78 },
    { key: 'sparkle', name: 'GPT', note: '调研梳理、文案与界面素材生成', level: 90 },
    { key: 'moon', name: '即梦 AI', note: '概念视觉与设计意向快速出图', level: 85 },
    { key: 'film', name: '可灵 AI', note: '产品演示视频生成，让方案动起来', level: 78 },
    { key: 'scissors', name: '剪映', note: '视频剪辑、字幕与成片输出', level: 85 },
    { key: 'canva', name: 'Canva', note: '海报、展板与活动物料的快速产出', level: 88 },
    { key: 'grid', name: 'Excel / PPT', note: '数据整理、图表与方案汇报', level: 85 },
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
      toolsTitle: '我常用的工具',
      toolsNote: '工具是手段，判断力才是核心——这里是我最顺手的那一批。',
    },
    projectPage: {
      back: '返回首页',
      projLabel: 'Selected Work',
      overview: 'Overview',
      metrics: 'Key metrics',
      process: 'Process',
      shots: 'Process artifacts',
      reflection: 'Reflection',
      next: '下一个项目',
      allWorks: '查看全部项目',
      labels: { role: 'Role', period: 'Timeline', team: 'Team', deliverables: 'Deliverables' },
      shotCaps: ['信息架构与低保真线框', '关键流程与状态跳转', '高保真界面与组件规范'],
    },
    works: { no: '02 — Selected Works', title: '精选项目', sub: '四个代表项目：从儿童教育 App 到关怀硬件、软硬一体，再到无障碍音响，覆盖研究、交互、UI 与产品表达全链路。', view: '查看项目' },
    strengths: {
      no: '03 — Strengths', title: '个人优势', sub: '设计判断、AI 工具链与产品表达，三条线拧成一股推进方案落地的能力。', toolkit: 'Toolkit',
      line1: '给有想法的人，一套作品级的流程。',
      line2: '为纯粹的愿景而建，被审美与技术驱动。',
      videoLabel: '创作的起点，是一块空白画布。',
    },
    cards: [
      { num: '01', icon: 'grid', title: '研究与洞察', items: ['市场数据与用户画像', '竞品分析与痛点归纳', '概念定位与方案发散'], more: '了解更多' },
      { num: '02', icon: 'sparkle', title: 'AI 工具链', items: ['GPT 生成界面素材', '即梦 / 可灵 生成视觉', '剪映产出演示视频'], more: '了解更多' },
      { num: '03', icon: 'rhino', title: '原型与三维', items: ['Figma 高保真与点击动效', 'Rhino 建模 · Keyshot 渲染', '展板海报与视觉物料'], more: '了解更多' },
    ],
    contact: {
      no: '04 — Contact', line1: '有想法？', line2pre: '让我们一起把它', line2em: '做出来。',
      hint: '移动鼠标 · 字重随光标靠近而加重',
      phoneLabel: 'Phone / WeChat', locationLabel: 'Location', lookingLabel: 'Looking for',
      lookingValue: '交互 / AI / 产品设计 实习与校招机会', footerNote: 'Designed & built with intent',
    },
  },
}

/* ================= English content ================= */
const en = {
  profile: {
    name: 'Wang Sihan',
    namePinyin: 'WANG SIHAN',
    nameEn: 'WANG SIHAN',
    roles: ['Interaction Designer', 'AI Designer', 'Product Designer'],
    rolesEn: 'INTERACTION / AI / PRODUCT DESIGNER',
    tagline: ['Between interaction, AI and product,', 'I design for the optimal experience.'],
    heroIntro:
      "I'm Wang Sihan — trained in product design, moving into interaction and AI-driven design. Research grounds the decisions, AI amplifies the output, and every pixel has a reason.",
    aboutSegments: [
      { text: "I'm Wang Sihan,", className: '' },
      { text: 'a designer growing up self-taught in the AI era.', className: 'seg-italic' },
      { text: 'I work across interaction, AI-assisted and product design.', className: '' },
    ],
    aboutScrollText:
      'Over the past three years I trained in product design at Qingdao University of Technology while pulling AI tools into research, sketching and prototyping. From a kids learning app to care-driven hardware, research grounds every judgment — design has to be more than good-looking.',
    aboutExtra: [
      'I see myself as someone who translates messy problems into clear interfaces. Before drawing a single screen I spend real time with users and market data — if the direction is wrong, every pixel of polish is wasted.',
      'I keep close track of new tools, especially the AI ones. They never make the judgment call for me, but they let me test ideas faster and express a solution more completely.',
    ],
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
    { value: '04', suffix: '', label: 'Shipped design projects' },
    { value: '90', suffix: '+', label: 'UI prototype screens' },
    { value: '4.53', suffix: '/5.0', label: 'Undergrad GPA' },
    { value: '10', suffix: '+', label: 'Campus events organized' },
  ],
  projects: [
    {
      id: 'xungu', index: '01', year: '2026.05 — 06', coverImg: '/xungu-cover.jpg', coverVideo: '/xungu-demo.mp4',
      shots: [
        {
          kind: 'flow', img: '/xungu-flow.jpg', capIndex: 1, split: true,
          title: 'The main spine · 5 states',
          lead: 'I pulled the spine out on its own — pick a level → story → interactive learning → scoring → reward and back to the map — so every step has a clear entry condition, a predictable way back, and a fallback for the moment a kid gets stuck.',
          points: [
            { no: '01', t: 'Pick a level · Map node', d: 'Choose a node on the map; locked ones stay greyed with a hint. A tap opens the pre-level story.' },
            { no: '02', t: 'Story · Setting the scene', d: 'A short animation introduces the artifact and its context — skippable, and the artifact card can be reopened anytime.' },
            { no: '03', t: 'Play · Three interaction types', d: 'Jigsaw, quiz and pattern-matching rotate; a wrong answer jumps straight back to the matching explanation.' },
            { no: '04', t: 'Scoring · Star rating', d: 'The rating comes from fragments collected and attempts made; hitting the bar unlocks the next node.' },
            { no: '05', t: 'Reward · Back to the map', d: '"Time fragments" and badges are granted, then one tap returns to the map with the new — or missed — node highlighted.' },
          ],
        },
        { kind: 'ui', capIndex: 2, masonry: true, wide: true, items: XUNGU_UI_SHOTS },
      ],
      title: 'Xungu Shiguang · Traditional-culture Learning Game',
      subtitle: "Kids' edutainment App · Interaction prototype",
      tags: ['Mobile App', 'Interaction design', 'Prototype & motion'],
      desc: 'A lightweight app that teaches Chinese traditional culture to kids aged 7–13. Handled early research and product positioning, generated interface assets with GPT and refined them in Figma, built the level-jump logic and a challenge–reward loop, and delivered 40 high-fidelity screens with click-through motion.',
      metrics: [{ k: 'Screens', v: '40+' }, { k: 'Core loop', v: 'Level-based learning path' }],
      cover: 'tiles', accent: '#dedbc8',
      detail: {
        role: 'Product definition · Interaction design · Prototype motion',
        period: '2026.05 — 06 · 8 weeks',
        team: 'Solo project',
        deliverables: '40+ hi-fi screens · Clickable prototype · Motion demo',
        overview: 'A lightweight app that teaches Chinese traditional culture to kids aged 7–13. I started from market research and competitor teardown to land on a "lightweight + level-based" position, generated illustration assets and first-pass copy with GPT, unified typography and visual rules in Figma, then built the level-jump logic and a challenge–reward loop, delivering 40 hi-fi screens with click-through motion on the key paths.',
        process: [
          { no: '01', title: 'Research & positioning', desc: 'Broke down the habits of 7–13 year olds and what parents actually want, compared how existing culture apps structure content, and settled on short sessions, strong feedback and collectibles.' },
          { no: '02', title: 'Information architecture', desc: 'Built a dual track — a main level path plus a side collection track — spreading knowledge across level nodes instead of front-loading it.' },
          { no: '03', title: 'Assets & system', desc: 'Generated illustrations and draft copy with GPT, then unified layout, colour and icon rules in Figma so all 40 screens hold one tone.' },
          { no: '04', title: 'Prototype & motion', desc: 'Implemented the level-jump logic and the challenge–reward loop, plus a clickable prototype with transition motion on key paths.' },
        ],
        reflection: "The hard part of a kids' product isn't polish — it's whether every single feedback moment is worth waiting for. Getting the reward rhythm right beats adding more content.",
      },
    },
    {
      id: 'calm', index: '02', year: '2026.04 — 06', coverImg: '/calm-cover.jpg',
      title: 'Emotion-soothing Device for Autistic Children',
      subtitle: 'Care-oriented smart hardware · Product design',
      tags: ['Smart hardware', 'User research', 'AI-assisted design'],
      desc: 'Started from policy and market research to define the design direction; built user personas and journey maps, ran competitor analysis and pain-point synthesis. Used AI tools to generate design intents and sketches, then pushed through modeling and rendering, presentation boards, and a product film made with Kling AI and CapCut.',
      metrics: [{ k: 'Research', v: 'Persona / Journey / Competitor' }, { k: 'Deliverables', v: 'Renderings + product film' }],
      cover: 'halo', accent: '#d9c9a3',
      detail: {
        role: 'User research · Product design · 3D presentation',
        period: '2026.04 — 06 · 10 weeks',
        team: 'Solo project (course work)',
        deliverables: 'Personas & journey map · Modeling & renders · Boards · Product film',
        overview: 'An emotion-soothing device for autistic children. I opened with policy and market research to validate the topic, built dual-perspective personas for parent and child, mapped the journey before and after a meltdown to find the moment where design can actually intervene, then used AI to generate design intents and sketches before pushing into Rhino modeling, Keyshot rendering and a product film made with Kling AI and CapCut.',
        process: [
          { no: '01', title: 'Policy & market', desc: 'Started from special-education and child mental-health policy, cross-checked against existing products, to confirm the topic was both valuable and feasible.' },
          { no: '02', title: 'Users & scenarios', desc: 'Built parent and child personas and mapped the journey before, during and after a meltdown to locate the moment worth intervening in.' },
          { no: '03', title: 'Concept & sketches', desc: 'Used AI to generate design intents and form sketches, trading off safety, cleanability and portability until the form converged.' },
          { no: '04', title: 'Modeling & presentation', desc: 'Rhino modeling and Keyshot rendering, presentation boards, and a product film produced with Kling AI and CapCut.' },
        ],
        reflection: 'The easiest mistake in care-driven design is deciding on behalf of the user. The judgment that mattered came from the "30 seconds before the meltdown" in the journey map — not from needs I invented at my desk.',
      },
    },
    {
      id: 'aroma', index: '03', year: '2026.05 — 06', coverImg: '/aroma-cover.jpg',
      title: 'Smart Aroma Diffuser & Companion App',
      subtitle: 'Hardware × software · UI / interaction design',
      tags: ['Smart hardware', 'Mobile App', 'High-fidelity UI'],
      desc: 'A premium aroma solution for ages 25–35. After the product form was confirmed, produced 30+ low-fi wireframes in Figma, then 50+ high-fidelity screens and cut assets, with an interactive demo in Figma Make and a feature film created with Jimeng and Kling AI.',
      metrics: [{ k: 'Low-fi', v: '30+' }, { k: 'Hi-fi screens', v: '50+' }],
      cover: 'duo', accent: '#cfc9b4',
      detail: {
        role: 'UI design · Interaction design · Demo production',
        period: '2026.05 — 06 · 8 weeks',
        team: 'Solo project',
        deliverables: '30+ low-fi · 50+ hi-fi screens & assets · Interactive demo · Feature film',
        overview: 'A premium aroma solution for ages 25–35. Once the product form was confirmed, I produced 30+ low-fi wireframes in Figma to get the information hierarchy and device-pairing flow right; after revisiting the research and fixing the interface language, I delivered 50+ hi-fi screens and cut assets, an interactive demo in Figma Make, and a feature film built with Jimeng and Kling AI.',
        process: [
          { no: '01', title: 'Visual direction', desc: 'Revisited the research and set a restrained, spacious, material-led interface language for a 25–35 premium audience.' },
          { no: '02', title: 'Low-fi validation', desc: '30+ wireframes in Figma — get hierarchy and the device flow working before touching detail.' },
          { no: '03', title: 'Hi-fi delivery', desc: '50+ hi-fi screens and cut assets with unified components, states and empty states so it is actually buildable.' },
          { no: '04', title: 'Demo & story', desc: 'An interactive demo in Figma Make, plus a feature film produced with Jimeng and Kling AI.' },
        ],
        reflection: 'In a hardware-plus-software project the interface is only half the product. Making clear what the device is doing right now matters far more than one more fancy chart.',
      },
    },
    {
      id: 'stereo', index: '04', year: '2025', coverImg: '/stereo-cover.jpg',
      shots: [
        { kind: 'render', img: '/stereo-render.jpg', cap: 'Product rendering', wide: true },
        { kind: 'detail', img: '/stereo-b-detail.jpg', cap: 'Parts & structure · Exploded view' },
        { kind: 'run', img: '/stereo-b-run.jpg', cap: 'Dimensions & run mode' },
        { kind: 'board', img: '/stereo-board.jpg', cap: 'Presentation board' },
      ],
      title: 'Retro Touchable Stereo',
      subtitle: 'STEREO · Inclusive audio you can feel',
      tags: ['Product design', 'Inclusive design', 'Rhino / Keyshot'],
      desc: 'A retro stereo you can feel: under the glass hood, a "water-ripple rhythm array" rises and falls with the music, turning sound into something visible and tangible. Classic playback anywhere you go — hearing and touch folded into a 220mm, one-hand-sized body.',
      metrics: [{ k: 'Footprint', v: '220mm · one-hand size' }, { k: 'Core concept', v: 'Ripple rhythm array · touch + sound' }],
      cover: 'tiles', accent: '#dedbc8',
      detail: {
        role: 'Product definition · 3D modeling · Rendering',
        period: 'Product design course project',
        team: 'Solo project',
        deliverables: 'Renderings · Exploded view · Presentation board',
        overview: "Traditional home stereos no longer meet people's functional and aesthetic expectations — listeners want personal, minimal and stylish devices, and a richer experience every time they play music. This retro touchable stereo keeps classic playback, plays anywhere you go, and fuses hearing with touch: under the glass hood a ripple-rhythm array rises and falls with the music, inspired by palm-massager textures, rising sea waves and raindrops on a lake. Switch, skip button, tuning knob and rhythm-sensing pad sit on one panel; the 220mm body is one-hand sized, small enough to carry, and fits work, study and break moments.",
        process: [
          { no: '01', title: 'Context & audience', desc: 'Demand for audio quality and playability keeps rising among mainstream listeners, and many blind friends show a deep love for music — making sound "touchable" became the starting point.' },
          { no: '02', title: 'Inspiration & translation', desc: 'Extracted a form language from palm-massager textures, rising waves and raindrop ripples, converging on "touchable ripples" as the core concept.' },
          { no: '03', title: 'Parts & structure', desc: 'Switch, skip button, tuning knob, rhythm-sensing pad, mid & base plates and corner supports refined one by one; the ripple array lives under the glass hood.' },
          { no: '04', title: 'Rendering & story', desc: 'Modeling, rendering, exploded view and a presentation board; before/after run-mode shots and scenario photos explain the usage.' },
        ],
        reflection: 'Accessibility is not a braille label bolted on at the end — it is giving information a second sensory channel. When sound can be seen and touched, design finally covers everyone.',
      },
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
  tools: [
    { key: 'figma', name: 'Figma', note: 'Interface design, hi-fi prototypes and component systems — my daily driver', level: 95 },
    { key: 'sparkle', name: 'Figma Make', note: 'Interactive demos that turn static screens into clickable flows', level: 80 },
    { key: 'rhino', name: 'Rhino', note: '3D modeling and surface studies, from sketch to solid', level: 85 },
    { key: 'keyshot', name: 'Keyshot', note: 'Product-grade rendering: materials, lighting, final polish', level: 82 },
    { key: 'ps', name: 'Photoshop', note: 'Image work, visual assets and poster compositing', level: 88 },
    { key: 'ai', name: 'Illustrator', note: 'Vector graphics, icons and brand visuals', level: 78 },
    { key: 'sparkle', name: 'GPT', note: 'Research synthesis, copywriting and interface asset generation', level: 90 },
    { key: 'moon', name: 'Jimeng AI', note: 'Concept visuals and fast design-intent renders', level: 85 },
    { key: 'film', name: 'Kling AI', note: 'Product demo films that put the solution in motion', level: 78 },
    { key: 'scissors', name: 'CapCut', note: 'Editing, subtitles and final video delivery', level: 85 },
    { key: 'canva', name: 'Canva', note: 'Fast turnaround on posters, boards and event assets', level: 88 },
    { key: 'grid', name: 'Excel / PPT', note: 'Data cleanup, charts and presentation decks', level: 85 },
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
      toolsTitle: 'Tools I work with',
      toolsNote: 'Tools are the means, judgment is the core — these are the ones I reach for first.',
    },
    projectPage: {
      back: 'Back to home',
      projLabel: 'Selected Work',
      overview: 'Overview',
      metrics: 'Key metrics',
      process: 'Process',
      shots: 'Process artifacts',
      reflection: 'Reflection',
      next: 'Next project',
      allWorks: 'View all work',
      labels: { role: 'Role', period: 'Timeline', team: 'Team', deliverables: 'Deliverables' },
      shotCaps: ['IA & low-fi wireframes', 'Key flows & state transitions', 'Hi-fi screens & component specs'],
    },
    works: { no: '02 — Selected Works', title: 'Selected work', sub: 'Four representative projects — from a kids learning app to care hardware, hardware-software as one, and an accessible stereo — covering research, interaction, UI and product storytelling.', view: 'View project' },
    strengths: {
      no: '03 — Strengths', title: 'What I bring', sub: 'Design judgment, an AI toolchain and product storytelling — three threads braided into one ability to land solutions.', toolkit: 'Toolkit',
      line1: 'Studio-grade workflows for people with ideas.',
      line2: 'Built for pure vision. Powered by craft.',
      videoLabel: 'Every project starts with a blank canvas.',
    },
    cards: [
      { num: '01', icon: 'grid', title: 'Research & insight', items: ['Market data & user personas', 'Competitor & pain-point analysis', 'Concept positioning'], more: 'Learn more' },
      { num: '02', icon: 'sparkle', title: 'AI toolchain', items: ['GPT for interface assets', 'Jimeng / Kling for visuals', 'CapCut for demo films'], more: 'Learn more' },
      { num: '03', icon: 'rhino', title: 'Prototype & 3D', items: ['Figma hi-fi & micro-motion', 'Rhino modeling · Keyshot renders', 'Boards, posters & visual assets'], more: 'Learn more' },
    ],
    contact: {
      no: '04 — Contact', line1: 'Got an idea?', line2pre: "Let's make it ", line2em: 'real.',
      hint: 'Move your cursor · letters grow heavier as you approach',
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

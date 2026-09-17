export const profile = {
  name: '王思涵',
  nameEn: 'WANG SIHAN',
  roles: ['交互设计师', 'AI 设计师', '产品设计师'],
  rolesEn: 'INTERACTION / AI / PRODUCT DESIGNER',
  tagline: ['在交互、AI 与产品之间，', '寻找体验的最优解。'],
  intro: [
    '我是王思涵，青岛理工大学产品设计专业本科生，专注于交互设计、AI 辅助设计与产品设计方向。习惯从市场与用户数据出发，找到真实的需求与痛点，再用设计与 AI 工具把它们推进为可落地的方案。',
    '从儿童学习 App 的交互原型，到自闭症儿童情绪安抚设备，再到智能香薰机与移动端应用——我关注「人」与「智能」的交接处，让技术以更自然的方式进入生活。',
  ],
  location: '四川成都 · 求学于山东青岛',
  email: 'wsh15928698075@qq.com',
  phone: '15928698075',
  education: {
    school: '青岛理工大学',
    major: '产品设计专业（本科）',
    period: '2023.09 — 2027.06',
    gpa: 'GPA 4.53 / 5.0',
    honor: '2025—2026 学年 孙若溪社会奖学金',
    courses: ['产品交互界面设计 92', '交互设计与认知 92', '设计原理 94', '参数化设计 92', '计算机辅助产品设计 93', '3D 打印 92'],
  },
}

export const stats = [
  { value: '03', suffix: '', label: '交付级设计项目' },
  { value: '90', suffix: '+', label: '界面原型产出' },
  { value: '4.53', suffix: '/5.0', label: '本科 GPA' },
  { value: '10', suffix: '+', label: '校园活动策划' },
]

export const projects = [
  {
    id: 'xungu',
    index: '01',
    year: '2026.05 — 06',
    title: '寻古拾光 · 传统文化学习小游戏',
    subtitle: '儿童寓教于乐 App · 交互原型',
    tags: ['移动端 App', '交互设计', '原型动效'],
    desc: '面向 7—13 岁儿童的中国传统文化轻量化学习 App。完成前期调研与产品定位，以 GPT 生成界面素材、Figma 加工排版，建立关卡跳转逻辑与「闯关—奖励」机制，产出 40 个界面的高保真原型与点击动效演示。',
    metrics: [{ k: '界面产出', v: '40+' }, { k: '核心机制', v: '关卡化学习路径' }],
    cover: 'tiles',
    accent: '#8fd3ff',
  },
  {
    id: 'calm',
    index: '02',
    year: '2026.04 — 06',
    title: '自闭症儿童情绪安抚设备',
    subtitle: '关怀向智能硬件 · 产品设计',
    tags: ['智能硬件', '用户研究', 'AI 辅助设计'],
    desc: '从政策与市场调研切入，明确选题方向；构建用户画像与旅程图，完成竞品分析与痛点总结。借助 AI 工具生成设计意向与草图，推进至产品建模与渲染，并制作介绍展板，用可灵 AI 与剪映产出产品介绍视频。',
    metrics: [{ k: '研究方法', v: '画像 / 旅程图 / 竞品' }, { k: '交付物', v: '建模渲染 + 介绍视频' }],
    cover: 'halo',
    accent: '#b9f06a',
  },
  {
    id: 'aroma',
    index: '03',
    year: '2026.05 — 06',
    title: '智能香薰机与移动端 App',
    subtitle: '软硬一体 · UI / 交互设计',
    tags: ['智能硬件', '移动端 App', '高保真 UI'],
    desc: '面向 25—35 岁中高端人群的智能香薰方案。确认产品外观后，用 Figma 完成低保真原型 30 余张；复盘调研确定界面风格后，产出高保真界面与切图 50 余张，并在 Figma Make 中完成可交互演示，配合即梦、可灵 AI 制作功能演示视频。',
    metrics: [{ k: '低保真', v: '30+' }, { k: '高保真切图', v: '50+' }],
    cover: 'duo',
    accent: '#e8c48a',
  },
]

export const strengths = [
  {
    index: '01',
    title: '市场与用户洞察',
    desc: '善于从市场商品数据中发现用户需求与痛点，用用户画像、旅程图与竞品分析支撑每一次设计决策，而不是凭感觉画图。',
  },
  {
    index: '02',
    title: 'AI 工具链整合',
    desc: 'GPT、即梦、可灵 AI 深度融入调研、草图、素材生成与视频制作全流程——让 AI 成为设计杠杆，而不是噱头。',
  },
  {
    index: '03',
    title: '交互原型与动效',
    desc: '以 Figma / Figma Make 为核心，从低保真到高保真、从界面到点击动效，具备 40+ 界面量级的完整原型交付能力。',
  },
  {
    index: '04',
    title: '产品三维表达',
    desc: 'Rhino 建模、Keyshot 渲染，能把概念方案推进到可展示、可评审的产品级视觉呈现，兼顾形态、材料与工艺。',
  },
  {
    index: '05',
    title: '视觉与品牌语言',
    desc: 'PS / AI / Canva 支撑海报、展板与文案的视觉表达，让产品界面与传播物料保持一致的气质与细节。',
  },
  {
    index: '06',
    title: '协作与推动力',
    desc: '生活权益部与科技创新协会的经历，让我擅长信息汇总、一对一沟通与跨角色协作，把事情按节点推进落地。',
  },
]

export const toolset = [
  'Figma', 'Figma Make', 'Rhino', 'Keyshot', 'Photoshop', 'Illustrator',
  'GPT', '即梦 AI', '可灵 AI', '剪映', 'Canva', 'Excel / PPT',
]

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
      shots: [],
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
        claim: '让传统文化，成为孩子愿意主动打开的那款游戏。',
        claimLead: '「寻古拾光」取「探寻古韵、捡拾时光」之意——把民俗、文房与古代生活知识藏进手绘国风场景，用找物玩法承载科普。',
        overview: '面向 7—13 岁儿童的中国传统文化学习 App。我从市场调研与竞品拆解入手，确定「轻量化 + 关卡化」的产品定位；用 GPT 生成插画素材与文案初稿，在 Figma 中统一排版与视觉规范；最终建立关卡跳转逻辑与「闯关—奖励」闭环，交付 40 个高保真界面与关键路径的点击动效。',
        chapters: [
          {
            no: '01', zh: '项目概况', en: 'PROJECT OVERVIEW',
            claim: '传统文化的门槛不在深浅，而在孩子愿不愿意点开第二次。',
            lead: '传统文化科普形式枯燥、文字量大，儿童学习积极性较差。我们把热门的休闲找物玩法与古代文人书斋的手绘场景结合，让民俗、文房、古代生活知识在闯关过程中自然出现。',
            paras: [
              '寻宝遇到困难时可答题换取物品线索，通关即解锁传统文化卷轴，把「游戏」与「传统文化学习」缝在一起，形成娱乐化的学习模式。',
              '产品定位是一款兼具娱乐性与教育意义的轻量级学习 App：聚焦国风实景寻宝与传统文化碎片化科普，让知识获取轻松自然。',
            ],
            media: { type: 'img', src: '/xungu-cover.jpg', cap: '品牌主视觉 · 卷轴与器物', side: true },
            items: [
              { no: '01', t: '目标用户 · 7—13 岁小学生', d: '正处于传统文化启蒙阶段，对生动有趣的休闲找物小游戏有天然的偏好与接受度。' },
              { no: '02', t: '设计背景 · 沉浸式国风', d: '依托古代市井与古风宅院的手绘场景，把枯燥的文化科普转化为游戏化学习。' },
              { no: '03', t: '形式载体 · 轻量闭环', d: '单次一关、一关一知识点，通关即得卷轴，学习成果可收藏、可回看。' },
            ],
          },
          {
            no: '02', zh: '调研与定位', en: 'RESEARCH & POSITIONING',
            claim: '孩子不是不爱传统文化，是不爱被「考」传统文化。',
            lead: '拆解市面传统文化类 App 后，最常见的结构是「图文百科 + 章节测验」——内容一次性铺开，孩子读完就走，而家长真正的诉求「愿意反复打开」反而没人满足。',
            paras: ['下面四条是本次的设计判断：先看同类产品怎么组织内容，再对照 7—13 岁儿童的注意力与记忆特点，反推出「短时长、强反馈、可收集」的产品基调。'],
            items: [
              { no: '01', t: '内容过载', d: '百科式铺开让孩子记不住 → 单关只承载一个知识点，单张卷轴只写一个精简知识点。' },
              { no: '02', t: '缺少进度感', d: '没有一个「下一关」的钩子 → 关卡节点 + 卷轴收集，把学习拆成看得见台阶的旅程。' },
              { no: '03', t: '卡住即流失', d: '找不到东西就退出 → 答对即给线索，答错也给正确答案并收进错题本，不让探索中断。' },
              { no: '04', t: '学完即忘', d: '缺少回顾机制 → 收藏库永久保存，同类知识点跨关卡间隔复现。' },
            ],
          },
          {
            no: '03', zh: '四大核心功能', en: 'CORE FEATURES',
            claim: '探索 → 学习 → 收藏，一条闭环串起全部玩法。',
            items: [
              { no: '01', t: '场景寻宝闯关', d: '精心绘制室外古集市、室内古宅院等国风场景，用户搜寻画面中隐藏的传统物件，集齐即可完成关卡挑战，趣味与探索并存。' },
              { no: '02', t: '提示答题助学纠错', d: '遇阻点击提示触发知识判断题，答对获取关键线索；答错自动存入「纠缪」错题本，形成「探索—学习—反思」闭环。' },
              { no: '03', t: '通关收藏知识卷轴', d: '通关后弹出仿古卷轴，承载本关专属的传统文化知识，解锁内容自动存入藏品库，方便随时查阅与回顾。' },
              { no: '04', t: '个人中心与资产管理', d: '集成个人信息展示与游戏资产管理：收藏页看卷轴、关卡页续玩、纠缪页复盘，构建完整的用户成长体系。' },
            ],
          },
          {
            no: '04', zh: '使用流程', en: 'USER FLOW',
            claim: '六个节点，一条不中断的探索链路。',
            lead: '从首页触达到成果沉淀，每一步都有明确的进入条件与可预期的返回路径；孩子卡住的地方，设计了兜底而不是死路。',
            media: { type: 'img', src: '/xungu-flow.jpg', cap: '关键流程与状态跳转 · 六个状态节点', side: true },
            steps: [
              { no: '01', t: '关卡开启 · 从首页进入寻宝', d: '首页点击【关卡】跳转关卡选择页，按自身进度与兴趣选择关卡，开启沉浸式寻宝体验。' },
              { no: '02', t: '沉浸探索 · 场景中寻找目标物件', d: '在国风场景中寻找隐藏的历史物件；信息框遮挡视野时可一键收起，获得更开阔的画面。' },
              { no: '03', t: '提示互动 · 判断答题推进流程', d: '点击【提示】触发知识判断题，答对即获取关键线索；答错则自动存入纠缪错题本，便于复盘。' },
              { no: '04', t: '界面优化 · 灵活控制信息展示', d: '当场景物件密集、清单遮挡画面时，收起底部信息框还原完整场景视图，提升探索流畅度。' },
              { no: '05', t: '通关收获 · 解锁知识卷轴奖励', d: '集齐当前关卡所有目标物件后触发通关弹窗，同步解锁对应主题的知识卷轴，以国风画卷呈现知识点。' },
              { no: '06', t: '成果管理 · 多维回顾与沉淀', d: '返回首页后可在收藏查看已解锁卷轴、在纠缪中复盘错题，或在个人页管理信息与通关成就。' },
            ],
          },
          {
            no: '05', zh: '四项认知设计', en: 'COGNITIVE DESIGN',
            claim: '让每一次点击，都符合孩子「看得懂、记得住」的认知规律。',
            lead: '注意力引导、认知负荷控制、记忆强化与即时反馈四项认知原理，落到界面上就是位置、色彩、动效与反馈时机的一连串具体决定。',
            items: [
              {
                no: '01', t: '注意力引导',
                d: '确立页面关键信息的视觉锚点，用动态引导与视觉降噪构建清晰的信息层级。',
                list: [
                  '锚点布局：提示按钮固定左上、物品清单置底、通关卷轴居中弹出',
                  '关键控件用仿古棕木色，与浅水墨场景形成色差；场景装饰低饱和弱化',
                  '找到物品触发高亮闪烁，通关卷轴自上而下展开并做发光特效',
                  '同一时间只弹一个弹窗，信息框可收起，避免遮挡与堆叠',
                ],
              },
              {
                no: '02', t: '认知负荷控制',
                d: '把完整学习链路拆成六段，确保单次交互只需执行一项核心操作。',
                list: [
                  '流程拆分：进入场景 → 自主寻宝 → 遇困答题 → 获取线索 → 集齐通关 → 解锁知识',
                  '单次仅展示 1 道判断题，单张卷轴只陈列 1 个民俗小知识点',
                  '知识点自动归档入收藏库、错题自动归集，无需手动记录',
                  '答对后直接标注物品位置，以可视化替代记忆线索',
                ],
              },
              {
                no: '03', t: '记忆强化',
                d: '把知识点与关卡实景深度绑定，让记忆有迹可循。',
                list: [
                  '场景联想：集市关卡对应市井民俗，书斋关卡对应文房与古代家居文化',
                  '解锁卷轴永久保存在收藏页，随时回看复习',
                  '同类知识点拆分到不同关卡，跨关间隔复现，贴合遗忘曲线',
                ],
              },
              {
                no: '04', t: '即时反馈',
                d: '每个动作都立刻给出结果，并明确告知下一步可以做什么。',
                list: [
                  '答对立刻标注物品位置，答错立刻给出正确解析与「学会了」确认',
                  '集齐物品立刻弹出古风通关横幅与卷轴，强化成就感',
                  '通关后给出「返回选关 / 查看收藏」的明确下一步入口',
                  '点击空白区域无多余干扰，信息框收起与展开有清晰的图标反馈',
                ],
              },
            ],
          },
          {
            no: '06', zh: '界面拆解', en: 'INTERFACE BREAKDOWN',
            claim: '八个核心界面，串联一条完整链路。',
            lead: '以国风雅致的视觉语言串联 8 个核心页面：首页定调，关卡页与寻宝页承载探索，答题页与卷轴页完成学习闭环，收藏页与纠缪页沉淀成果。',
            items: [
              { no: '01', t: '开机页与首页', d: '古风山水为底，「寻古拾光」LOGO 构建视觉核心，Q 版人物「小寻」站在进度条上；左上个人头像入口，中轴排列关卡、藏品、纠缪三大功能入口。' },
              { no: '02', t: '个人信息页', d: '展示账号、性别与地区信息，核心呈现已收集卷轴数量，以古籍册页版式融合数据可视化与国风美学。' },
              { no: '03', t: '关卡选择页', d: '木质牌匾式关卡入口错落排布于卷轴背景之上，既符合国风主题，又直观呈现探索进度。' },
              { no: '04', t: '寻宝场景页', d: '手绘古风场景为沉浸背景，左上仿古提示锦囊按钮，底部物品清单可展开收起，兼顾沉浸与空间效率。' },
              { no: '05', t: '答题弹窗页', d: '仿古弹窗配水墨纹样，单次仅 1 道传统文化判断题，分答对、答错两种反馈，让作答充满仪式感。' },
              { no: '06', t: '通关卷轴科普页', d: '以仿古竖版卷轴为主体缓缓展开，承载本关核心知识点，图文并茂，重现古籍阅读的韵味。' },
              { no: '07', t: '收藏页', d: '陈列已解锁的卷轴藏品列表，支持再次点开查看详情，构建用户的专属文化宝库。' },
              { no: '08', t: '纠缪页', d: '系统归纳所有答错的题目并标注正确解析，方便回顾反思，深化对文化知识的理解。' },
            ],
            media: { type: 'masonry', items: XUNGU_UI_SHOTS, cap: '高保真界面 · 18 屏' },
          },
          {
            no: '07', zh: '原型与成果', en: 'PROTOTYPE & OUTCOME',
            claim: '用 Figma 打通全链路可点击原型。',
            paras: [
              '使用 Figma 完成全链路可点击交互，串联从首页探索、关卡挑战到个人资产管理的核心流程；新增纠缪页错题回顾、信息框收起等细节交互，让操作逻辑更贴合少儿用户的认知习惯。',
              '配合 GPT 生成插画与文案初稿，在 Figma 中统一排版、配色与图标规范，保证 40 余个界面气质一致。',
            ],
            media: { type: 'video', src: '/xungu-demo.mp4', cap: '交互原型演示 · Figma 可点击原型', side: true },
            items: [
              { no: '01', t: '原型工具', d: 'Figma 全链路可点击，覆盖 8 个核心页面与关键跳转。' },
              { no: '02', t: '界面产出', d: '40+ 张高保真界面，含首页、寻宝、答题、卷轴等完整链路。' },
              { no: '03', t: '关键动效', d: '关卡跳转、卷轴自上而下展开、物品高亮闪烁与通关横幅。' },
            ],
          },
          {
            no: '08', zh: '总结与展望', en: 'REFLECTION & NEXT',
            claim: '以找物为壳，以文化为核。',
            paras: ['产品落地 4 项核心功能、8 个主界面与 4 项认知设计规范，输出可交互的 Figma 高保真原型，交付完整度达 100%；以找物娱乐为轻量化载体，串联「学习—练习—回顾」链路，完善用户的知识内化闭环。'],
            items: [
              { no: '01', t: '拓展场景内容', d: '持续开发庙会、传统市集等特色关卡场景，扩充民俗题库与卷轴知识库，让文化厚度继续增长。' },
              { no: '02', t: '完善激励体系', d: '新增闯关积分、每日打卡与好友排行榜，配合成就勋章与等级成长，提升活跃度与留存。' },
            ],
          },
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
    nav: { about: '关于我', works: '精选项目', strengths: '个人优势', contact: '联系', cta: '联系我 ↗', themeLight: '切换到浅色模式', themeDark: '切换到深色模式' },
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
      demoVideo: '原型演示 · 静音自动播放',
      coverLabel: '主视觉',
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
      shots: [],
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
        claim: 'Making traditional culture the game a child opens on their own.',
        claimLead: 'Xungu Shiguang means "seeking ancient charm, gathering up time" — folk customs, scholar\'s studio objects and daily life in old China are hidden inside hand-drawn scenes, carried by a hidden-object game.',
        overview: 'A lightweight app that teaches Chinese traditional culture to kids aged 7–13. I started from market research and competitor teardown to land on a "lightweight + level-based" position, generated illustration assets and first-pass copy with GPT, unified typography and visual rules in Figma, then built the level-jump logic and a challenge–reward loop, delivering 40 hi-fi screens with click-through motion on the key paths.',
        chapters: [
          {
            no: '01', zh: 'Project overview', en: 'PROJECT OVERVIEW',
            claim: 'The barrier is not how deep the culture goes — it is whether a child opens it a second time.',
            lead: 'Culture lessons are text-heavy and dull, and children rarely stay motivated. So we paired the popular hidden-object mechanic with hand-drawn scenes of a scholar\'s studio, letting folk customs, stationery and old daily life surface naturally as levels are cleared.',
            paras: [
              'When a search stalls, answering a question trades for a hint; clearing a level unlocks a traditional-culture scroll. Play and learning are stitched together into one entertainment loop.',
              'The product sits as a lightweight learning app with both entertainment and educational value: real-scene treasure hunting in a national style, plus bite-sized culture lessons that make knowledge feel effortless.',
            ],
            media: { type: 'img', src: '/xungu-cover.jpg', cap: 'Key visual · scroll and artifacts', side: true },
            items: [
              { no: '01', t: 'Audience · Ages 7–13', d: 'Primary schoolers at the very start of cultural discovery, with a natural appetite for lively hidden-object games.' },
              { no: '02', t: 'Context · Immersive national style', d: 'Hand-drawn ancient market streets and courtyard houses turn dry explainers into game-based learning.' },
              { no: '03', t: 'Format · Lightweight loop', d: 'One level at a time, one knowledge point per level, a scroll on completion — collectable and re-readable.' },
            ],
          },
          {
            no: '02', zh: 'Research & positioning', en: 'RESEARCH & POSITIONING',
            claim: 'Children do not dislike traditional culture — they dislike being tested on it.',
            lead: 'Tearing down existing culture apps, the dominant structure is "illustrated encyclopedia + chapter quiz": content dumped in one go, children read and leave. The thing parents actually want — that a child comes back on their own — goes unaddressed.',
            paras: ['These four are the design judgments behind the project: first study how comparable apps structure content, then read it against the attention and memory traits of 7–13 year olds, and derive a tone of short sessions, strong feedback and collectibles.'],
            items: [
              { no: '01', t: 'Content overload', d: 'Encyclopedia dumps do not stick → one knowledge point per level, one concise point per scroll.' },
              { no: '02', t: 'No sense of progress', d: 'Nothing pulls you to the next level → map nodes plus scroll collecting turn learning into visible steps.' },
              { no: '03', t: 'Stuck means churn', d: 'Failing to find an object ends the session → a correct answer gives the hint, a wrong one still gives the right answer and files it away, so exploration never breaks.' },
              { no: '04', t: 'Learned and forgotten', d: 'No review loop → a permanent collection library, with related points reappearing across levels.' },
            ],
          },
          {
            no: '03', zh: 'Core features', en: 'CORE FEATURES',
            claim: 'Explore → learn → collect: one loop runs the whole product.',
            items: [
              { no: '01', t: 'Scene-based treasure hunt', d: 'Hand-drawn outdoor markets and indoor courtyards hide traditional objects to find; collecting them all clears the level — fun and discovery in one.' },
              { no: '02', t: 'Hint quiz & error book', d: 'A hint opens a culture question; a correct answer reveals the object. Wrong answers land in the "Jiumiu" error book, closing an explore–learn–reflect loop.' },
              { no: '03', t: 'Scroll rewards on clear', d: 'Clearing a level opens an antique scroll carrying that level\'s culture knowledge, auto-filed into the collection library for review anytime.' },
              { no: '04', t: 'Profile & asset management', d: 'Profile info and in-game assets in one place: scrolls in Collection, progress in Levels, mistakes in Jiumiu — a complete growth system.' },
            ],
          },
          {
            no: '04', zh: 'User flow', en: 'USER FLOW',
            claim: 'Six nodes, one unbroken chain of exploration.',
            lead: 'From first touch to the results a child keeps — every step has a clear entry condition and a predictable way back, and wherever a child might get stuck there is a fallback instead of a dead end.',
            media: { type: 'img', src: '/xungu-flow.jpg', cap: 'Key flows & state transitions · six states', side: true },
            steps: [
              { no: '01', t: 'Open a level · From home', d: 'Tap Levels on the home screen to reach the level picker, then choose by progress or interest and start the hunt.' },
              { no: '02', t: 'Explore · Find the objects', d: 'Search the scene for hidden historical objects; collapse the info panel when it blocks the view for a wider frame.' },
              { no: '03', t: 'Hint · Answer to advance', d: 'A hint raises a culture question; a correct answer yields the key clue, while a wrong one is filed into the error book for review.' },
              { no: '04', t: 'Control · Flexible info display', d: 'When objects crowd the scene, collapse the checklist to restore the full view and keep exploration smooth.' },
              { no: '05', t: 'Clear · Unlock the scroll', d: 'Collecting every target object triggers the clear popup and unlocks the matching scroll, presenting the knowledge point as a national-style painting.' },
              { no: '06', t: 'Manage · Review and keep', d: 'Back on home, review unlocked scrolls in Collection, revisit mistakes in Jiumiu, or manage profile info and achievements.' },
            ],
          },
          {
            no: '05', zh: 'Cognitive design', en: 'COGNITIVE DESIGN',
            claim: 'Every tap follows how a child actually sees and remembers.',
            lead: 'Four cognitive principles — attention guidance, cognitive load control, memory reinforcement and instant feedback — land on screen as a series of concrete decisions about position, colour, motion and timing.',
            items: [
              {
                no: '01', t: 'Attention guidance',
                d: 'Visual anchors for key information, with motion cues and visual noise reduction building a clear hierarchy.',
                list: [
                  'Anchor layout: hint button pinned top-left, checklist at the bottom, clear-scroll centred',
                  'Key controls in antique wood brown against pale ink-wash scenes; decorations desaturated',
                  'Found objects flash; the clear-scroll unfolds downward with a glow',
                  'Only one modal at a time, and the info panel can be collapsed to avoid stacking',
                ],
              },
              {
                no: '02', t: 'Cognitive load control',
                d: 'The learning chain is split into six steps so a single interaction only asks for one core action.',
                list: [
                  'Enter scene → search → answer when stuck → get the clue → collect all → unlock knowledge',
                  'Only one quiz question at a time; one scroll carries exactly one folk knowledge point',
                  'Knowledge auto-files into the library and mistakes auto-collect — nothing to note by hand',
                  'A correct answer marks the object position directly, replacing memory with a visual cue',
                ],
              },
              {
                no: '03', t: 'Memory reinforcement',
                d: 'Knowledge is bound to the physical scene of each level so memory has something to hold on to.',
                list: [
                  'Scene association: the market level carries street folk culture, the studio level carries scholar\'s-desk culture',
                  'Unlocked scrolls stay in the Collection permanently for review',
                  'Related points are spread across levels and reappear at intervals, following the forgetting curve',
                ],
              },
              {
                no: '04', t: 'Instant feedback',
                d: 'Every action returns a result immediately, and says clearly what to do next.',
                list: [
                  'Correct answers mark the position at once; wrong ones show the right explanation and a "Got it" confirm',
                  'Collecting everything pops the clear banner and scroll immediately, reinforcing the win',
                  'After clearing, explicit next steps: back to levels, or view the collection',
                  'Tapping empty space creates no disturbance; collapsing and expanding the panel has clear icon feedback',
                ],
              },
            ],
          },
          {
            no: '06', zh: 'Interface breakdown', en: 'INTERFACE BREAKDOWN',
            claim: 'Eight core screens, one complete chain.',
            lead: 'Eight screens tied together in an elegant national-style language: the home screen sets the tone, level and hunt screens carry exploration, quiz and scroll screens close the learning loop, and collection and error screens hold the results.',
            items: [
              { no: '01', t: 'Splash & home', d: 'Landscape ink painting as the base with the Xungu Shiguang logo at the centre and the chibi character "Xiao Xun" on the progress bar; profile entry top-left, with levels, collection and error-book entries down the central axis.' },
              { no: '02', t: 'Profile', d: 'Account, gender and region, with the collected scroll count as the hero — an ancient book-layout that merges data with the aesthetic.' },
              { no: '03', t: 'Level select', d: 'Wooden plaque entries scattered across a scroll background — true to the theme while showing progress at a glance.' },
              { no: '04', t: 'Hunt scene', d: 'A hand-drawn scene as the immersive backdrop, an antique hint pouch top-left, and a collapsible checklist at the bottom balancing immersion with space.' },
              { no: '05', t: 'Quiz modal', d: 'An antique popup with ink patterns holding exactly one culture question, with distinct right and wrong feedback for a sense of ceremony.' },
              { no: '06', t: 'Clear-scroll lesson', d: 'A vertical antique scroll unfolds slowly with the level\'s core knowledge point, text and image together, echoing the feel of reading an old book.' },
              { no: '07', t: 'Collection', d: 'A gallery of unlocked scrolls, each reopenable — the child\'s own cultural treasure house.' },
              { no: '08', t: 'Jiumiu (error book)', d: 'Every wrong answer collected with the correct explanation attached, ready for review and reflection.' },
            ],
            media: { type: 'masonry', items: XUNGU_UI_SHOTS, cap: 'Hi-fi screens · 18' },
          },
          {
            no: '07', zh: 'Prototype & outcome', en: 'PROTOTYPE & OUTCOME',
            claim: 'A fully clickable prototype, built in Figma.',
            paras: [
              'The whole chain is clickable in Figma — home exploration, level challenges and personal asset management — with added details such as error-book review and a collapsible info panel that fit how children actually operate.',
              'Illustrations and first-pass copy were generated with GPT, then layout, colour and icon rules were unified in Figma so all 40+ screens hold one tone.',
            ],
            media: { type: 'video', src: '/xungu-demo.mp4', cap: 'Prototype demo · clickable in Figma', side: true },
            items: [
              { no: '01', t: 'Tooling', d: 'Fully clickable in Figma across 8 core screens and key transitions.' },
              { no: '02', t: 'Screens', d: '40+ hi-fi screens covering home, hunt, quiz, scroll and the rest of the chain.' },
              { no: '03', t: 'Key motion', d: 'Level transitions, the scroll unfolding downward, object highlight flashes and the clear banner.' },
            ],
          },
          {
            no: '08', zh: 'Reflection & next', en: 'REFLECTION & NEXT',
            claim: 'A hunt as the shell, culture as the core.',
            paras: ['The project lands 4 core features, 8 main screens and 4 cognitive design principles, shipping a clickable hi-fi Figma prototype at 100% completeness; the hidden-object game is a lightweight carrier that links learning, practice and review into a closed knowledge loop.'],
            items: [
              { no: '01', t: 'Grow the scenes', d: 'Keep building temple fairs and traditional markets, expanding the question and scroll libraries so the cultural depth keeps growing.' },
              { no: '02', t: 'Build the motivation loop', d: 'Add level points, daily check-ins and a friends leaderboard, with achievement badges and level growth to lift activity and retention.' },
            ],
          },
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
    nav: { about: 'About', works: 'Work', strengths: 'Strengths', contact: 'Contact', cta: 'Get in touch ↗', themeLight: 'Switch to light mode', themeDark: 'Switch to dark mode' },
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
      demoVideo: 'Prototype demo · muted autoplay',
      coverLabel: 'Key visual',
      projLabel: 'Selected Work',
      overview: 'Overview',
      metrics: 'Key metrics',
      process: 'Process',
      shots: 'Process artifacts',
      reflection: 'Reflection',
      next: 'Next project',
      allWorks: 'View all work',
      labels: { role: 'Role', period: 'Timeline', team: 'Team', deliverables: 'Deliverables' },
      toTop: 'Back to top',
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

# 作品集网站 · 完整交接包（截至 2026-09-17 23:30）

> **新任务开场直接发这一句：**
> 「先读 `HANDOFF.md`，然后我们继续优化作品集网站。」
> 读完即可无缝接手，无需重新读全部源码。

---

## 一、项目与运行

| 项 | 值 |
|---|---|
| 项目目录 | `C:\Users\DELL\WorkBuddy\2026-09-15-09-57-46\portfolio\` |
| 技术栈 | React 18 + Vite 5 + framer-motion；**无路由库、无 Tailwind、无 UI 库** |
| 样式 | 纯原生 CSS，集中在 `src/index.css`（CSS 变量体系） |
| 启动 | `portfolio/` 下 `npm run dev` → `http://127.0.0.1:5173` |
| 一键启动 | 双击 `portfolio/start-preview.bat` |
| 构建检查 | `npx vite build` |
| 环境坑 | 系统 PATH 无 npm/node，bash 需先 `export PATH="/usr/bin:/bin:/usr/local/bin:$PATH"`；Node 在 `C:\Users\DELL\.workbuddy\binaries\node\versions\22.22.2-3\`；git 在 `C:\Users\DELL\.workbuddy\binaries\PortableGit\versions\1.2.0\cmd\git.exe` |

## 二、当前视觉风格：Prisma 式「黑底 + 奶油色电影感」

（2026-09-17 由原「荧光绿极简」整体改版而来，参考 Prisma 工作室落地页）

### 配色（CSS 变量，定义在 `src/index.css :root`）
| 变量 | 值 | 用途 |
|---|---|---|
| `--bg` | `#000000` | 全局背景 |
| `--surface` | `#101010` | 关于卡片、项目卡 |
| `--card` | `#212121` | Features / 工具卡 |
| `--text` | `#E1E0CC` | 主文字 |
| `--primary` | `#DEDBC8` | 强调色（暖奶油），标题、按钮底 |
| `--muted` | `rgba(225,224,204,.62)` | 正文次级 |
| `--dim` | `rgba(225,224,204,.38)` | 小标签 |
| `--line` | `rgba(225,224,204,.12)` | 发丝线 |
| `--line-strong` | `rgba(225,224,204,.26)` | 描边 |

- **单一强调色原则**：全站只用奶油色，没有其他彩色。要改气质优先改 `--primary`。
- 项目封面三色（奶油系微调）：`#dedbc8` / `#d9c9a3` / `#cfc9b4`。

### 字体（`index.html` 引入 Google Fonts）
- **Almarai**（300/400/700/800）：全局默认（无中文字形，中文自动回退苹方/雅黑）
- **Instrument Serif**（仅斜体）：用于斜体强调句（关于页标题中段、项目副标题、联系页末句）
- **JetBrains Mono**：等宽小标签（`.mono`，11px，字距 .18em，大写）
- 国内 Google Fonts 可能慢/失败，已配 CJK 回退；彻底方案是把字体自托管到 `public/fonts/`

### 版式与质感
- 版心 `--container: 1920px`；≥2400px 取消限宽铺满；`--gutter: clamp(24px,3.6vw,64px)`
- 大圆角：画框 28px、卡片 18–28px、按钮全圆角
- `.noise-overlay`（baseFrequency .85 / 3层，mix-blend overlay，opacity .7）铺在首屏视频上
- `.bg-noise`（.9 / 4层）以 15% 透明度铺在 Features 区
- 动效缓动 `[0.16,1,0.3,1]`；卡片入场 `[0.22,1,0.36,1]`

## 三、页面结构（自上而下）

**首页（暗色）**
1. **Hero** —— 整屏内嵌圆角画框（外留白16px + 圆角28px + 视频铺满 + 噪点 + 上下渐变压暗）
   - 巨型标题 `WANG` / `SIHAN` 两行：17vw、行高 .85、字距 -.07em，逐词从遮罩下方拉起，末行带 ✳︎ 星标
   - 右上：简介 + Based in / Status + 奶油胶囊按钮（黑圆箭头）
   - 视频不自动播放，**鼠标横向移动擦洗时间轴**（灵敏度 0.8，seek 防洪水，触屏降级为静音循环）
   - 底部：SCROLL 指示 + 右下「移动鼠标擦洗画面 ←→」提示
2. **Works 精选项目** —— 3 张大卡（左封面 SVG / 右信息：编号、年份、标题、衬线斜体副标题、描述、标签、指标）
3. **Features 个人优势** —— 4 列卡：1 视频卡 + 3 张编号清单卡（对勾 + 条目 + 斜角箭头「了解更多」），错峰缩放入场，底部工具 chips
4. **Contact 联系** —— 整屏收尾：逐词上浮大字（末句衬线斜体）+ 邮箱大链接 + 三栏信息 + 页脚

**二级页：关于我（点击导航「关于我」进入，暗色）**
- 顶部「← 返回首页」
- 暗色大卡片：小标签 → 三段混排标题（正常 / **Instrument Serif 斜体** / 正常）→ 滚动逐字显影的长段 → 照片 + 两段设计观自述 + 教育背景 → 四项数据
- 卡片外：**工具能力区** 12 张卡（自绘线性图标 + 名称 + 说明 + 熟练度细线）
- 底部「去看看精选项目 →」

**导航**：从页面顶边垂下的**黑色胶囊**（`rounded-b-18px`，贴顶无间距），内含 Logo + 三个链接 + 中/EN 切换；向下滚动自动上滑隐藏，鼠标进入顶部 120px 自动下拉（向上滚动也会复现）。
**联系我**：独立于导航，固定右上角，奶油底黑字 + 黑圆箭头，点击滚到底部联系区，滚动时不隐藏。

## 四、内容与文案在哪（`src/i18n.jsx` 单文件双语字典）

结构（zh / en 各一份，**新增中文必须同步加英文**）：
```
{ profile: { name, namePinyin, nameEn, roles[], rolesEn, tagline[],
             heroIntro, aboutSegments[{text,className}], aboutScrollText,
             aboutExtra[], location, email, phone, intro[],
             education{school,major,period,gpa,honor} },
  stats[4], projects[3], strengths[6],
  tools[12]      // {key, name, note, level} —— 关于页工具卡
  toolset[12]    // 首页底部 chips
  ui: { nav{about,works,strengths,cta}, hero{basedIn,status,statusValue,viewWork,scroll,scrubHint},
        about{no,title,sub,heading{pre,em,post}},
        aboutPage{back,no,title,lead,backToWork,toolsTitle,toolsNote},
        works{no,title,sub},
        strengths{no,title,sub,toolkit,line1,line2,videoLabel, cards[3]{num,title,items[],more}},
        contact{no,line1,line2pre,line2em,phoneLabel,locationLabel,lookingLabel,lookingValue,footerNote} } }
```
⚠️ **最大的坑**：`cards`、`aboutPage`、`works`、`strengths`、`contact` 都在 **ui 对象内部**；`projects`、`stats`、`tools`、`toolset`、`profile` 在**根层**。曾因把 `ui.cards` 当成根层 `cards` 解构导致整页崩溃黑屏。

## 五、组件清单（`src/components/`）
- `Nav.jsx` 顶部胶囊导航 + 固定联系按钮（自动收起/复现逻辑）
- `Hero.jsx` / `HeroVideo.jsx` 首屏与鼠标擦洗视频
- `Works.jsx` 项目卡（含手写 SVG 封面 `Cover`，三种 variant：tiles/halo/duo）
- `Strengths.jsx` Features 四卡
- `Contact.jsx` 收尾页
- `AboutPage.jsx` 关于二级页
- `ToolIcon.jsx` 自绘线性图标集（figma/sparkle/rhino/keyshot/ps/ai/moon/film/scissors/canva/grid）
- `src/anim.jsx` 动效组件：`WordsPullUp`、`WordsPullUpMultiStyle`（分段样式）、`ScrollRevealText`（滚动逐字）、`FadeUp`、`CardIn`
- `src/hooks.js` `useReveal`（旧版滚动入场，多数组件已改用 anim.jsx）

## 六、已定决策（不要轻易推翻）
1. 暗色为主 + **单一奶油强调色**，不使用其他彩色
2. 首屏主标题必须是**拼音** `WANG SIHAN`，汉字名只出现在眉标
3. **关于我是独立二级页**（曾为浅色，改版 Prisma 后改为暗色；浅色能力 `.theme-light` 仍保留在 CSS，需要可切回）
4. 全站中英双语，文案只在 `i18n.jsx`
5. 不用 Tailwind（避免与现有 CSS 冲突），不用路由库（用 App 的 view 状态）
6. 首屏视频靠鼠标擦洗，不自动播放
7. 导航是贴顶垂下的黑色胶囊；「联系我」独立固定右上，不参与收起
8. 版心 1920px，PC 端优先
9. 关于页**不要**再放邮箱/电话/地点（与底部联系页重复，已移除）

## 七、版本管理（已启用 git）
- 快照历史（最新在上方）：
  - `94a9c2c` 关于页移除重复联系信息，改为自述 + 12 款工具能力（自绘图标 + 熟练度）
  - `4641e1f` 修复 Strengths 读 cards 层级错误导致整页崩溃；补 en 的 namePinyin
  - `ba603d3` 全站改为 Prisma 风格（黑底奶油色 + 逐词/逐字动效）
  - `4fde7a2` git 说明与脚本
  - `fa4c11e` 基础版
- 存快照：双击 `checkpoint.bat "说明"`；回退：双击 `rollback.bat`（留空=撤销最近一次）
- ⚠️ `rollback.bat` 是 `reset --hard`，回退前先存一次

## 八、待办 / 下一步
- [ ] 三个项目的**真实截图**替换手写 SVG 封面（放到 `public/`，改 Works 的 `Cover` 为 `<img>`）
- [ ] 首屏视频换成自己的素材（`public/hero.mp4`），当前用的是 cloudfront 临时链接
- [ ] 字体自托管（避免 Google Fonts 不稳）
- [ ] 可能做项目详情二级页
- [ ] 移动端细节打磨（目前 nav 链接 ≤960px 隐藏，无汉堡菜单）

## 九、协作习惯
- 用户说「哪一块 + 改什么」即可动手，可以给具体数值
- 希望我先给判断再动手，有冲突会说明理由
- **交付前务必验证页面真的渲染出来**（只跑 build 抓不到运行时错误，曾因此交付黑屏）
- 后台 dev server 空闲会被回收；用户说「打开预览」时先 curl 5173，不通再 `npm run dev`

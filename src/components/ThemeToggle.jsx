/* 昼夜切换：太阳 ↔ 月亮，图标用遮罩挖出月牙，切换时平滑过渡 */
export default function ThemeToggle({ theme, onToggle, label = 'Toggle theme' }) {
  const isLight = theme === 'light'
  return (
    <button
      type="button"
      className={`theme-toggle${isLight ? ' is-light' : ''}`}
      onClick={onToggle}
      aria-label={label}
      title={label}
      aria-pressed={isLight}
    >
      <svg className="sun-and-moon" viewBox="0 0 24 24" aria-hidden="true">
        <mask id="tt-moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
          <circle className="moon-cut" cx="16" cy="9" r="7.5" fill="#000" />
        </mask>
        <circle className="sun" cx="12" cy="12" r="6.4" fill="currentColor" mask="url(#tt-moon-mask)" />
        <g
          className="sun-beams"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        >
          <line x1="12" y1="1.4" x2="12" y2="3.2" />
          <line x1="12" y1="20.8" x2="12" y2="22.6" />
          <line x1="4.4" y1="4.4" x2="5.7" y2="5.7" />
          <line x1="18.3" y1="18.3" x2="19.6" y2="19.6" />
          <line x1="1.4" y1="12" x2="3.2" y2="12" />
          <line x1="20.8" y1="12" x2="22.6" y2="12" />
          <line x1="4.4" y1="19.6" x2="5.7" y2="18.3" />
          <line x1="18.3" y1="5.7" x2="19.6" y2="4.4" />
        </g>
      </svg>
    </button>
  )
}

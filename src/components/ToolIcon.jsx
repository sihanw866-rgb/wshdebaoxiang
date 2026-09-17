/**
 * 统一风格的工具图标：24×24 线性栅格，currentColor 描边，与站点克制气质一致。
 * 没有使用品牌 logo，避免各家风格不一 + 授权问题。
 */
export default function ToolIcon({ kind, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  switch (kind) {
    case 'figma':
      return (
        <svg {...common} strokeWidth={0} fill="currentColor">
          <path d="M8.5 2h3.5v6.5H8.5a3.25 3.25 0 0 1 0-6.5Z" opacity=".95" />
          <path d="M12 2h3.5a3.25 3.25 0 0 1 0 6.5H12V2Z" opacity=".7" />
          <path d="M8.5 8.75H12V15H8.5a3.13 3.13 0 0 1 0-6.25Z" opacity=".85" />
          <path d="M12 8.75h3.5a3.13 3.13 0 0 1 0 6.25H12V8.75Z" opacity=".6" />
          <circle cx="10.25" cy="18.5" r="3.25" opacity=".75" />
        </svg>
      )
    case 'sparkle':
      return (
        <svg {...common}>
          <path d="M12 3.5c.9 4.2 2.3 5.6 6.5 6.5-4.2.9-5.6 2.3-6.5 6.5-.9-4.2-2.3-5.6-6.5-6.5 4.2-.9 5.6-2.3 6.5-6.5Z" />
          <path d="M18.5 15.5c.35 1.6.9 2.15 2.5 2.5-1.6.35-2.15.9-2.5 2.5-.35-1.6-.9-2.15-2.5-2.5 1.6-.35 2.15-.9 2.5-2.5Z" opacity=".6" />
        </svg>
      )
    case 'rhino':
      return (
        <svg {...common}>
          <path d="M4 17.5c1.2-5.2 4-8.6 8.2-10.3l2.6 3.4-3.1 1.2" />
          <path d="M14.8 7.2 18 3.4c1.4 1.6 1.9 3.6 1.5 5.8" />
          <path d="M3 20.5h7" opacity=".6" />
          <path d="M12.7 11.8c1 .8 1.5 2 1.5 3.6" opacity=".5" />
        </svg>
      )
    case 'keyshot':
      return (
        <svg {...common}>
          <circle cx="11" cy="13" r="6.5" />
          <path d="M8.6 9.4a4.6 4.6 0 0 1 4-2.3" opacity=".7" />
          <path d="M17.5 4.5 20 7M19 3.5v2.6h-2.6" />
        </svg>
      )
    case 'ps':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M8.6 16.4V8.2h3.2a2.4 2.4 0 0 1 0 4.8H8.6" />
          <path d="M15.2 16.2c-.9-.8-1.3-1.6-1.2-2.6.1-1.1.7-1.8 1.9-1.9 1.2-.1 1.9.4 2.2 1.4.2.8-.1 1.5-.7 1.9-.6.4-1.4.5-2.2.2" opacity=".85" />
        </svg>
      )
    case 'ai':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M8.4 15.6 11.4 8.6l3 7" />
          <path d="M9.5 13.2h3.8" opacity=".8" />
          <path d="M15.4 15.6v-4" />
          <path d="M15.4 11.9v.1" />
        </svg>
      )
    case 'moon':
      return (
        <svg {...common}>
          <path d="M19 14.6A7.6 7.6 0 0 1 9.4 5a7.8 7.8 0 1 0 9.6 9.6Z" />
          <path d="M16.4 4.2v2.2M15.3 5.3h2.2" opacity=".6" />
        </svg>
      )
    case 'film':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="M7.5 5v14M16.5 5v14" opacity=".5" />
          <path d="M10.6 9.6l4 2.4-4 2.4V9.6Z" />
        </svg>
      )
    case 'scissors':
      return (
        <svg {...common}>
          <circle cx="6.5" cy="17.5" r="2.5" />
          <circle cx="6.5" cy="6.5" r="2.5" />
          <path d="M8.6 8.4 19 18M19 6 8.6 15.6" />
        </svg>
      )
    case 'canva':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M8.4 10.4c1.6-1.6 3.4-1.4 3.6.2.2 1.6-2 2-2 3.6 0 1.4 1.4 2 2.4 1.6" />
        </svg>
      )
    case 'grid':
      return (
        <svg {...common}>
          <rect x="3.5" y="4.5" width="17" height="15" rx="3" />
          <path d="M3.5 9.5h17M9.5 9.5v10M15 9.5v10" opacity=".6" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 8v4l3 2" />
        </svg>
      )
  }
}

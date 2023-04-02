import { LinkRendererProps } from '@graphcms/rich-text-react-renderer'
import Link from 'next/link'

export default function LinkResolver({
  children,
  openInNewTab,
  href,
  rel,
  ...rest
}: LinkRendererProps) {
  if (!href) return <div>{children}</div>

  if (href.match(/^https?:\/\/|^\/\//i)) {
    return (
      <a
        href={href}
        target={openInNewTab ? '_blank' : '_self'}
        rel={rel || 'noopener noreferrer'}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  )
}

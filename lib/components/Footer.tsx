import { PortableTextBlock } from 'sanity'

export function Footer({ footer }: { footer?: PortableTextBlock[] }) {
  return (
    <footer className="w-full rounded-lg bg-violet-50 p-2 pt-8">Footer</footer>
  )
}

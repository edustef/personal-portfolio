import { PortableTextBlock } from 'sanity'

export function Footer({ footer }: { footer?: PortableTextBlock[] }) {
  return (
    <footer className="bg-brand-100 w-full rounded-lg p-2 pt-8">Footer</footer>
  )
}

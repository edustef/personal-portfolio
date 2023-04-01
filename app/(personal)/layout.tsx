import { Footer, Navbar } from 'lib/components/global'
import { PreviewBanner } from 'lib/components/preview/PreviewBanner'
import { getSettings } from 'lib/sanity/sanity.client'
import { getPreviewToken } from 'lib/sanity/sanity.server.preview'
import { AlertCircle } from 'lucide-react'

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const token = getPreviewToken()
  const settings = (await getSettings({ token })) || {
    menuItems: [],
    footer: [],
  }

  return (
    <div className="noise isoloate bg-brand-200 text-brand-800  min-h-screen">
      {token && <PreviewBanner />}
      <div className="relative flex h-full w-full flex-col gap-20 overflow-hidden px-4 py-4">
        <header>
          <Navbar />
        </header>
        {children}
        <Footer footer={settings.footer} />
        <div className="bg-brand-300/50 text-brand-600 flex items-center gap-3 rounded-lg p-2 font-mono text-xs italic">
          <AlertCircle className="w-[2em]" />
          <span>
            JSX element &apos;div&apos; has no
            <br /> corresponding closing tag.
          </span>
        </div>
      </div>
    </div>
  )
}

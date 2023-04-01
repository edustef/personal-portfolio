import { toPlainText } from '@portabletext/react'
import { HomePage } from 'lib/components/pages/home/HomePage'
import { HomePagePreview } from 'lib/components/pages/home/HomePagePreview'
import { PreviewSuspense } from 'lib/components/preview/PreviewSuspense'
import { PreviewWrapper } from 'lib/components/preview/PreviewWrapper'
import { getHomePage, getSettings } from 'lib/sanity/sanity.client'
import { getPreviewToken } from 'lib/sanity/sanity.server.preview'
import { siteMeta } from 'lib/sanity/siteMeta'
import { notFound } from 'next/navigation'

export async function generateMetadata() {
  const token = getPreviewToken()

  const [settings, page] = await Promise.all([
    getSettings({ token }),
    getHomePage({ token }),
  ])

  return siteMeta({
    title: page?.title,
    description: page?.overview ? toPlainText(page.overview) : '',
    image: settings?.ogImage,
  })
}

export default async function IndexRoute() {
  const token = getPreviewToken()
  const data = await getHomePage({ token })

  if (!data && !token) {
    notFound()
  }

  if (!data && token) {
    notFound()
  }

  return (
    <>
      {!token && !!data && <HomePage data={data} />}
      {token && data && (
        <>
          <PreviewSuspense
            fallback={
              <PreviewWrapper>
                <HomePage data={data} />
              </PreviewWrapper>
            }
          >
            <HomePagePreview token={token} />
          </PreviewSuspense>
        </>
      )}
    </>
  )
}

import { toPlainText } from '@portabletext/react'
import { HomePage } from 'components/pages/home/HomePage'
import { HomePagePreview } from 'components/pages/home/HomePagePreview'
import { PreviewSuspense } from 'components/preview/PreviewSuspense'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import { getHomePage, getSettings } from 'lib/sanity.client'
import { getPreviewToken } from 'lib/sanity.server.preview'
import { siteMeta } from 'lib/siteMeta'
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

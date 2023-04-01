import { toPlainText } from '@portabletext/react'
import { HomePage } from 'lib/components/pages/home/HomePage'
import { HomePagePreview } from 'lib/components/pages/home/HomePagePreview'
import { PreviewSuspense } from 'lib/components/preview/PreviewSuspense'
import { PreviewWrapper } from 'lib/components/preview/PreviewWrapper'
import ScrollUpWorkaround from 'lib/components/shared/ScrollUpWorkaround'
import { getHomePage, getProfile, getSettings } from 'lib/sanity/sanity.client'
import { getPreviewToken } from 'lib/sanity/sanity.server.preview'
import { siteMeta } from 'lib/sanity/siteMeta'

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

  const [homepageData, profileData] = await Promise.all([
    getHomePage({ token }),
    getProfile({ token }),
  ])
  const data = {
    homepageData: homepageData,
    profileData: profileData,
  }

  return (
    <>
      {!token && <HomePage data={data} />}
      {token && (
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
      <ScrollUpWorkaround />
    </>
  )
}

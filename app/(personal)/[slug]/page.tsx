import { toPlainText } from '@portabletext/react'
import { Page } from 'components/pages/page/Page'
import { PagePreview } from 'components/pages/page/PagePreview'
import { PreviewSuspense } from 'components/preview/PreviewSuspense'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import { getHomePageTitle, getPageBySlug, getSettings } from 'lib/sanity.client'
import { getPreviewToken } from 'lib/sanity.server.preview'
import { siteMeta } from 'lib/siteMeta'
import { notFound } from 'next/navigation'

export async function generateMetadata() {
  const token = getPreviewToken()

  const [homePageTitle, page, settings] = await Promise.all([
    getHomePageTitle({ token }),
    getPageBySlug({ slug: 'about', token }),
    getSettings({ token }),
  ])

  return siteMeta({
    title: page?.title,
    baseTitle: homePageTitle,
    description: page?.overview ? toPlainText(page.overview) : '',
    image: settings?.ogImage,
  })
}

export default async function PageSlugRoute({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const token = getPreviewToken()
  const data = await getPageBySlug({ slug })

  if (!data && !token) {
    notFound()
  }

  if (!data && token) {
    notFound()
  }

  return (
    <>
      {!token && !!data && <Page data={data} />}
      {token && data && (
        <PreviewSuspense
          fallback={
            <PreviewWrapper>
              <Page data={data} />
            </PreviewWrapper>
          }
        >
          <PagePreview token={token} slug={params.slug} />
        </PreviewSuspense>
      )}
    </>
  )
}

import { toPlainText } from '@portabletext/react'
import { Page } from 'lib/components/pages/page/Page'
import { PagePreview } from 'lib/components/pages/page/PagePreview'
import { PreviewSuspense } from 'lib/components/preview/PreviewSuspense'
import { PreviewWrapper } from 'lib/components/preview/PreviewWrapper'
import ScrollUpWorkaround from 'lib/components/shared/ScrollUpWorkaround'
import {
  getHomePageTitle,
  getPageBySlug,
  getSettings,
} from 'lib/sanity/sanity.client'
import { getPreviewToken } from 'lib/sanity/sanity.server.preview'
import { siteMeta } from 'lib/sanity/siteMeta'
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
      <ScrollUpWorkaround />
    </>
  )
}

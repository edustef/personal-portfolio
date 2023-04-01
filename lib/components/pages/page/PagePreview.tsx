'use client'

import { usePreview } from 'lib/sanity/sanity.preview'
import { pageBySlugQuery } from 'lib/sanity/sanity.queries'
import type { PagePayload } from 'types'

import { Page } from './Page'

export function PagePreview({
  token,
  slug,
}: {
  token: null | string
  slug: string
}) {
  const about: PagePayload = usePreview(token, pageBySlugQuery, {
    slug: slug,
  })

  return <Page data={about} />
}

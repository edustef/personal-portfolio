import type { Image } from 'sanity'

import { urlForImage } from './sanity.image'

export function siteMeta({
  baseTitle,
  description,
  image,
  title,
}: {
  baseTitle?: string
  description?: string
  image?: Image
  title?: string
}) {
  const metaTitle = [
    ...(title ? [title] : []),
    ...(baseTitle ? [baseTitle] : []),
  ].join(' | ')

  const imageUrl =
    image && urlForImage(image)?.width(1200).height(627).fit('crop').url()

  return {
    title: metaTitle,
    viewport: 'width=device-width,initial-scale=1.0',
    appleTouchIcon: '/favicon/apple-touch-icon.png',
    favicon32: '/favicon/favicon-32x32.png',
    favicon16: '/favicon/favicon-16x16.png',
    manifest: '/favicon/site.webmanifest',
    shortcutIcon: '/favicon/favicon.ico',
    msTileColor: '#000000',
    msConfig: '/favicon/browserconfig.xml',
    themeColor: '#000',
    description: description,
    ogImage: imageUrl,
  }
}

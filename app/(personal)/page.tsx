import { HomePage } from 'lib/components/pages/HomePage'
import ScrollUpWorkaround from 'lib/components/shared/ScrollUpWorkaround'
import { getHomePage } from 'lib/sanity/sanity.client'
import { siteMeta } from 'lib/sanity/siteMeta'
import { notFound } from 'next/navigation'

export async function generateMetadata() {
  const page = await getHomePage()

  return siteMeta({
    title: page?.title,
    description: page?.profile.about,
  })
}

export default async function IndexRoute() {
  const data = await getHomePage()

  if (!data) {
    notFound()
  }

  return (
    <>
      {<HomePage data={data} />}
      <ScrollUpWorkaround />
    </>
  )
}

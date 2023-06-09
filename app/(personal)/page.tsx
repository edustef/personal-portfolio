import { Certificates } from 'lib/components/Certificates'
import { Jobs } from 'lib/components/Jobs'
import { Profile } from 'lib/components/Profile'
import { Projects } from 'lib/components/Projects'
import { ScrollUpWorkaround } from 'lib/components/shared/ScrollUpWorkaround'
import { getHomePage, getSettings } from 'lib/sanity/sanity.client'
import { siteMeta } from 'lib/sanity/siteMeta'
import { notFound } from 'next/navigation'

export async function generateMetadata() {
  const page = await getHomePage()
  const settings = await getSettings()

  return siteMeta({
    title: settings?.title,
    baseTitle: page?.title,
    description: page?.profile.about,
    image: settings?.ogImage,
  })
}

export default async function IndexRoute() {
  const data = await getHomePage()

  if (!data) {
    notFound()
  }

  return (
    <>
      <main className="m-auto flex w-full max-w-3xl flex-col items-start gap-20">
        {/* @ts-expect-error Server Component */}
        <Profile data={data.profile} />
        <section className="w-full">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-violet-700">Work</h2>
            {/* @ts-expect-error Server Component */}
            <Jobs />
          </div>
        </section>
        <section>
          <div>
            <h2 className="text-3xl font-semibold text-violet-700">Projects</h2>
            {/* @ts-expect-error Server Component */}
            <Projects />
          </div>
        </section>
        <section>
          <div>
            <h2 className="text-3xl font-semibold text-violet-700">
              Studies & Certificates
            </h2>
            {/* @ts-expect-error Server Component */}
            <Certificates />
          </div>
        </section>
      </main>
      <ScrollUpWorkaround />
    </>
  )
}

import { Profile } from 'lib/components/Profile'
import { Work } from 'lib/components/Work'
import { HomePageType } from 'lib/sanity/sanity.queries'

type Props = {
  data: HomePageType
}

export function HomePage({ data }: Props) {
  return (
    <main className="flex flex-col items-start gap-20">
      {/* @ts-expect-error Server Component */}
      <Profile data={data.profile} />
      <section>
        <div className="flex flex-col gap-4">
          <h2 className="text-brand-600 text-3xl font-semibold">Work</h2>
          {/* @ts-expect-error Server Component */}
          <Work />
        </div>
      </section>
      <section>
        <div>
          <h2 className="text-brand-600 text-3xl font-semibold">Projects</h2>
        </div>
      </section>
      <section>
        <div>
          <h2 className="text-brand-600 text-3xl font-semibold">Contact</h2>
        </div>
      </section>
    </main>
  )
}

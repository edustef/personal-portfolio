import Avatar from 'lib/components/avatar'
import { HomePageQuery, ProfileQuery } from 'lib/sanity/sanity.queries'

type Props = {
  data: {
    profileData: ProfileQuery
    homepageData: HomePageQuery
  }
}

export function HomePage({ data }: Props) {
  const { profileData } = data

  return (
    <main className="flex flex-col items-start gap-20">
      <div className="bg-artifact from-brand-300/25 absolute left-0 top-0 -z-10 h-64 w-[36rem] -translate-x-[20rem] translate-y-[21px] rotate-45 rounded-lg bg-gradient-to-br to-transparent" />
      <div className="flex flex-col gap-2">
        <h1 className="text-brand-800 relative -z-20 text-4xl font-extrabold">
          {profileData.name}
        </h1>
        <p className="text-brand-500 max-w-xs font-mono text-base tracking-tight">
          {profileData.motto}
        </p>
      </div>
      <section className="flex w-full flex-col">
        <div className="max-w-fit">
          <h2 className="text-brand-600 text-3xl font-semibold">About me</h2>
        </div>
        <div className="relative flex w-full items-center justify-between gap-2">
          <div className="from-brand-300/25 absolute -right-28 top-1/2 h-60 w-60 -translate-y-1/2 -rotate-45 rounded-full bg-gradient-to-l to-transparent" />
          <p className="max-w-[13rem]">
            I am a front-end developer with a focus on sublime and accessible
            user interfaces.
          </p>
          <Avatar image={profileData.picture} />
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-4">
          <h2 className="text-brand-600 text-3xl font-semibold">Work</h2>
          {/* @ts-expect-error Server Component */}
          {/* <Work /> */}
        </div>
      </section>
      <section>
        <div>
          <h2 className="text-brand-600 text-3xl font-semibold">Projects</h2>
          {/* @ts-expect-error Server Component */}
          {/* <Projects /> */}
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

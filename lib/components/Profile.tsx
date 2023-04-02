import Avatar from 'lib/components/Avatar'
import { getProfile } from 'lib/sanity/sanity.client'
import { notFound } from 'next/navigation'
import React from 'react'

export async function Profile() {
  const data = await getProfile()

  if (!data) notFound()

  return (
    <>
      <div className="bg-artifact from-brand-300/25 absolute left-0 top-0 -z-10 h-64 w-[36rem] -translate-x-[20rem] translate-y-[21px] rotate-45 rounded-lg bg-gradient-to-br to-transparent md:hidden" />
      <div className="flex flex-col gap-2">
        <h1 className="text-brand-800 relative -z-20 text-4xl font-extrabold">
          {data.name}
        </h1>
        <p className="text-brand-500 max-w-xs font-mono text-base tracking-tight">
          {data.motto}
        </p>
      </div>
      <section className="flex w-full flex-col gap-4 sm:gap-0">
        <div className="max-w-fit">
          <h2 className="text-brand-600 text-3xl font-semibold">About me</h2>
        </div>
        <div className="relative flex w-full items-center justify-between gap-2">
          <div className="bg-artifact from-brand-300/25 absolute -right-24 top-20 h-60 w-60 -translate-y-1/2  rounded-full bg-gradient-to-bl to-transparent sm:h-80 sm:w-80 sm:translate-x-10 md:hidden" />
          <p className="max-w-[13rem] sm:max-w-sm">
            I am a front-end developer with a focus on sublime and accessible
            user interfaces.
          </p>
          <Avatar image={data.picture} />
        </div>
      </section>
    </>
  )
}

import { getProfile } from 'lib/sanity/sanity.client'
import { notFound } from 'next/navigation'
import React from 'react'

import Avatar from './Avatar'

export async function Profile() {
  const data = await getProfile()

  if (!data) notFound()

  return (
    <>
      <div className="relative grid w-full grid-cols-3 grid-rows-2">
        <div className="bg-artifact absolute left-0 top-1/2 -z-10 h-[calc(100%_+_4rem)] w-full -translate-x-[16%] -translate-y-1/2 rounded-lg bg-gradient-to-br from-purple-300/25 to-transparent to-80% md:w-[70%] md:-translate-x-8 " />
        <div className="col-span-3">
          <h1 className="relative -z-20 text-3xl font-extrabold text-purple-950">
            {data.name}
          </h1>
          <p className="max-w-xs font-mono text-base tracking-tight text-purple-500">
            {data.motto}
          </p>
        </div>
        <div className="col-span-2 self-center">
          <div className="max-w-fit">
            <h2 className="text-2xl font-semibold text-purple-700">About me</h2>
          </div>
          <div className="flex items-center justify-between gap-2">
            <p className="max-w-[13rem] sm:max-w-sm">
              I am a front-end developer with a focus on sublime and accessible
              user interfaces.
            </p>
          </div>
        </div>
        <div className="relative place-self-center">
          <div className="bg-artifact absolute -right-24 top-1/2 hidden h-56 w-56 -translate-y-1/2 rounded-full bg-gradient-to-l from-purple-300/25 to-transparent to-80% sm:h-80 sm:w-80 sm:-translate-x-8 md:block md:h-80 md:w-80" />
          <Avatar
            className="h-28 w-28 sm:h-36 sm:w-36 md:h-48 md:w-48"
            image={data.picture}
          />
        </div>
      </div>
    </>
  )
}

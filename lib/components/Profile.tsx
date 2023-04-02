import ImageBox from 'lib/components/shared/ImageBox'
import { getProfile } from 'lib/sanity/sanity.client'
import { cn } from 'lib/utils/cn'
import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React, { ReactNode } from 'react'
import { Image } from 'sanity'

export async function Profile() {
  const data = await getProfile()

  if (!data) notFound()

  return (
    <>
      <div className="relative grid w-full grid-cols-3 grid-rows-2 gap-y-8 md:gap-0">
        <div className="bg-artifact absolute left-0 top-1/2 -z-10 h-[calc(100%_+_4rem)] w-full -translate-x-[16%] -translate-y-1/2 rounded-lg bg-gradient-to-br from-violet-400/25 to-transparent to-80% md:w-[calc(100%_+_4rem)] md:-translate-x-8 " />
        <div className="col-span-3 flex flex-col gap-4">
          <div>
            <h1 className="relative -z-20 text-3xl font-extrabold text-violet-950">
              {data.name}
            </h1>
            <p className="max-w-xs font-mono text-base tracking-tight text-violet-700">
              {data.motto}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <SocialLinks links={data.socialLinks} />
          </div>
        </div>
        <div className="col-span-2 self-center">
          <div className="max-w-fit">
            <h2 className="text-2xl font-semibold text-violet-700">About me</h2>
          </div>
          <p className="w-full max-w-[13rem] sm:max-w-sm">
            I am a front-end developer with a focus on sublime and accessible
            user interfaces.
          </p>
        </div>
        <div className="relative w-full place-self-center">
          <Avatar
            className="aspect-square w-full sm:h-36 sm:w-36 md:h-48 md:w-48"
            image={data.picture}
          />
        </div>
      </div>
    </>
  )
}

type AvatarProps = {
  image: Image
  className?: string
}

function Avatar({ image, className }: AvatarProps) {
  return (
    <div
      className={cn(
        'avatar relative isolate flex flex-shrink-0 items-center justify-center rounded-full',
        className
      )}
    >
      <div className="absolute -z-10 h-[calc(100%_+_1rem)] w-[calc(100%_+_1rem)] rounded-full bg-violet-400/20 md:h-[calc(100%_+_2rem)] md:w-[calc(100%_+_2rem)]" />
      <div className="absolute -z-10 h-[calc(100%_+_0.5rem)] w-[calc(100%_+_0.5rem)] rounded-full bg-violet-400/20 md:h-[calc(100%_+_1rem)] md:w-[calc(100%_+_1rem)]" />
      <ImageBox
        classesWrapper="rounded-full"
        image={image}
        width={667}
        height={667}
        alt="Profile picture"
      />
      <div className="before:animate-opacity after:animate-opacity absolute left-0 top-0 h-full w-full rounded-full bg-fuchsia-500 opacity-[15%]" />
    </div>
  )
}

type SocialLinksProps = {
  links: {
    name: string
    url: string
  }[]
}
function SocialLinks({ links }: SocialLinksProps) {
  return (
    <>
      <div className="flex gap-2">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.url}
              className="group flex h-10 w-10 items-center justify-center rounded-md hover:border hover:border-violet-500 bg-violet-500/40 p-2 text-violet-50 backdrop-blur-sm hover:bg-violet-200"
            >
              {link.name === 'github' && (
                <Github className="group-hover:text-violet-500" />
              )}
              {link.name === 'twitter' && (
                <Twitter className="group-hover:text-violet-500" />
              )}
              {link.name === 'linkedin' && (
                <Linkedin className="group-hover:text-violet-500" />
              )}
            </Link>
          )
        })}
      </div>
    </>
  )
}

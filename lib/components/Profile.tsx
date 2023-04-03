import ImageBox from 'lib/components/shared/ImageBox'
import Tag from 'lib/components/shared/Tag'
import { getProfile } from 'lib/sanity/sanity.client'
import { cn } from 'lib/utils/cn'
import {
  ExternalLink,
  Github,
  Laptop,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React, { ReactNode } from 'react'
import { Image } from 'sanity'

export async function Profile() {
  const data = await getProfile()

  if (!data) notFound()

  return (
    <>
      <div className="relative grid w-full grid-cols-3 grid-rows-2 gap-x-4 gap-y-4 md:gap-x-0">
        <div className="bg-artifact absolute left-0 top-1/2 -z-10 h-[calc(100%_+_4rem)] w-full -translate-x-[16%] -translate-y-1/2 rounded-lg bg-gradient-to-br from-violet-400/25 to-transparent to-70% md:w-[calc(100%_+_4rem)] md:-translate-x-8 " />
        <div className="col-span-2">
          <div className="flex flex-col gap-4">
            <h1 className="relative -z-20 text-3xl font-extrabold text-violet-950 md:text-5xl">
              {data.name}
            </h1>
            <p className="max-w-xs font-mono text-base tracking-tight text-violet-800">
              {data.motto}
            </p>
            <div className="flex flex-col gap-2">
              <SocialLinks links={data.socialLinks} />
            </div>
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-2 self-center">
          <h2 className="text-2xl font-semibold text-violet-800">About me</h2>
          <p className="w-full max-w-[16rem] sm:max-w-sm">
            I am a front-end developer with a focus on sublime and accessible
            user interfaces.
          </p>
          <div className="flex flex-wrap gap-2">
            <Tag className="flex w-fit items-center gap-2 bg-violet-50/50">
              <MapPin className="w-[1.2em]" />
              <span>{data.location}</span>
            </Tag>
            <Tag className="flex w-fit items-center gap-2 bg-violet-50/50">
              <Laptop className="w-[1.2em]" />
              <span>{data.workPreference}</span>
            </Tag>
            <a href={`mailto:${data.email}`}>
              <Tag className="flex w-fit items-center gap-2 bg-violet-50/50">
                <Mail className="w-[1.2em]" />
                <span>{data.email}</span>
                <ExternalLink className="w-[1.15em]" />
              </Tag>
            </a>
          </div>
        </div>
        <div className="relative col-start-3 row-start-1 grid w-full place-items-center place-self-center">
          <Avatar
            className="aspect-square w-full max-w-[12rem]"
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
      <div className=" animate-spin-slow absolute -z-10 h-[calc(100%_+_1rem)] w-[calc(100%_+_1rem)] rounded-full bg-gradient-to-tl from-violet-400/50 to-transparent to-90% transition-opacity duration-1000 md:h-[calc(100%_+_2rem)] md:w-[calc(100%_+_2rem)]" />
      <div className="animate-spin-fast absolute -z-10 h-[calc(100%_+_0.5rem)] w-[calc(100%_+_0.5rem)] rounded-full bg-gradient-to-br from-violet-400/50 to-transparent to-90% transition-opacity duration-1000 md:h-[calc(100%_+_1rem)] md:w-[calc(100%_+_1rem)]" />
      <ImageBox
        className="rounded-full contrast-125"
        image={image}
        width={667}
        height={667}
        alt="Profile picture"
      />
      <div className="absolute left-0 top-0 h-full w-full rounded-full bg-violet-400/20 " />
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
              className="group flex h-10 w-10 items-center justify-center rounded-md bg-violet-400 p-2 text-violet-50 hover:border hover:border-violet-400/30 hover:bg-violet-400/20"
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

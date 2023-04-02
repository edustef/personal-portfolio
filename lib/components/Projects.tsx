import { CustomPortableText } from 'lib/components/shared/CustomPortableText'
import ImageBox from 'lib/components/shared/ImageBox'
import { getProjects } from 'lib/sanity/sanity.client'
import { ProjectType } from 'lib/sanity/sanity.queries'
import React from 'react'

export async function Projects() {
  const data = await getProjects()
  return (
    <div className="flex flex-col gap-6">
      {data.map((project) => (
        <Project key={project._id} data={project} />
      ))}
    </div>
  )
}

type ProjectProps = {
  data: ProjectType
}
export function Project({ data }: ProjectProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <CustomPortableText value={data.description} />
        <ImageBox
          className="aspect-video w-full"
          width={1920}
          height={1080}
          image={data.coverImage}
        />
      </div>
    </div>
  )
}

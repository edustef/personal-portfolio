import { CustomPortableText } from 'lib/components/shared/CustomPortableText'
import Tag from 'lib/components/shared/Tag'
import { getJobs } from 'lib/sanity/sanity.client'
import { JobType } from 'lib/sanity/sanity.queries'
import { ArrowRight, CalendarDays, User } from 'lucide-react'
import React from 'react'

export async function Jobs() {
  const jobs = await getJobs()
  return (
    <div className="flex flex-col gap-6">
      {jobs.map((job) => (
        <Job key={job._id} data={job} />
      ))}
    </div>
  )
}

export function Job({ data }: { data: JobType }) {
  const locale = 'en'
  const startDateText = new Date(data.startDate).toLocaleDateString(locale, {
    month: 'short',
    year: 'numeric',
  })
  const endDateText = data.isCurrent
    ? data.todayText
    : new Date(data.endDate).toLocaleDateString(locale, {
        month: 'short',
        year: 'numeric',
      })

  return (
    <div className="rounded-lg bg-violet-50 p-4 text-violet-950">
      <div className="flex max-w-2xl flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">{data.company}</h2>
          <div className="flex items-center gap-2 text-sm italic">
            <User className="w-[1.5em]" />
            <span>{data.position}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CalendarDays className="w-[1.5em]" />
            <span>{startDateText}</span>
            <ArrowRight className="w-[1em]" />
            <span>{endDateText}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {data.skills.map((skill, index) => (
            <Tag key={index}>{skill.name}</Tag>
          ))}
        </div>
        <CustomPortableText value={data.description} />
      </div>
    </div>
  )
}

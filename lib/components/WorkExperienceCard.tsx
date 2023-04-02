import { CustomPortableText } from 'lib/components/shared/CustomPortableText'
import Markdown from 'lib/components/shared/Markdown'
import { JobType } from 'lib/sanity/sanity.queries'
import { ArrowRight, CalendarDays, User } from 'lucide-react'
import React from 'react'

const WorkExperienceCard: React.FC<JobType> = ({
  company,
  description,
  isCurrent,
  skills,
  startDate,
  endDate,
  todayText,
  position,
}) => {
  const locale = 'en'
  const startDateText = new Date(startDate).toLocaleDateString(locale, {
    month: 'short',
    year: 'numeric',
  })
  const endDateText = isCurrent
    ? todayText
    : new Date(endDate).toLocaleDateString(locale, {
        month: 'short',
        year: 'numeric',
      })

  return (
    <div className="rounded-lg bg-violet-50 p-4 text-violet-950">
      <div className="flex max-w-2xl flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">{company}</h2>
          <div className="flex items-center gap-2 text-sm italic">
            <User className="w-[1.5em]" />
            <span>{position}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CalendarDays className="w-[1.5em]" />
            <span>{startDateText}</span>
            <ArrowRight className="w-[1em]" />
            <span>{endDateText}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-md bg-violet-100 px-2 py-1 text-sm font-semibold text-violet-700"
            >
              {skill.name}
            </div>
          ))}
        </div>
        <CustomPortableText value={description} />
      </div>
    </div>
  )
}

export default WorkExperienceCard

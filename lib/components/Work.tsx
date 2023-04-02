import WorkExperienceCard from 'lib/components/WorkExperienceCard'
import { getJobs } from 'lib/sanity/sanity.client'
import React from 'react'

export async function Work() {
  const jobs = await getJobs()
  return (
    <div className="flex flex-col gap-6">
      {jobs.map((job) => (
        <WorkExperienceCard key={job._id} {...job} />
      ))}
    </div>
  )
}

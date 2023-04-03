import { CustomPortableText } from 'lib/components/shared/CustomPortableText'
import {
  getCertificates,
  getJobs,
  getProfile,
  getProjects,
} from 'lib/sanity/sanity.client'
import React from 'react'

export default async function ResumePage() {
  const [profile, jobs, projects, certificates] = await Promise.all([
    getProfile(),
    getJobs(),
    getProjects(),
    getCertificates(),
  ])

  if (!profile || !jobs || !projects || !certificates) return null

  return (
    <div>
      <div>{profile.name}</div>
      <div>{profile.email}</div>
      <div>{profile.about}</div>
      <div>{profile.phone}</div>
      <div>{profile.location}</div>
      <div>{profile.workPreference}</div>
      <div>
        {profile.socialLinks.map((socialLink) => (
          <div key={socialLink.name}>
            <div>{socialLink.name}</div>
            <div>{socialLink.url}</div>
          </div>
        ))}
        <div>
          {jobs.map((job) => (
            <div key={job._id}>
              <div>{job.company}</div>
              <CustomPortableText value={job.description} />
              <div>{job.isCurrent}</div>
              <div>{job.position}</div>
              <div>{job.startDate}</div>
              <div>{job.endDate}</div>
              <div>{job.todayText}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

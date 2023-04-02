import 'server-only'

import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity/sanity.api'
import { createClient } from 'next-sanity'
import { cache } from 'react'

import {
  certificatesQuery,
  CertificateType,
  homePageQuery,
  HomePageType,
  jobsQuery,
  JobType,
  profileQuery,
  ProfileType,
  projectBySlugQuery,
  projectsQuery,
  ProjectType,
} from './sanity.queries'

const sanityClient = () => {
  return createClient({ projectId, dataset, apiVersion, useCdn })
}

export const getHomePage = cache(() => {
  const res = sanityClient().fetch<HomePageType | null>(homePageQuery)
  if (!res) throw new Error('Home page not found')

  return res
})

export const getProfile = cache(async () => {
  const data = await sanityClient().fetch<ProfileType | null>(profileQuery)

  if (!data) throw new Error('No profile found')

  return data
})

export const getJobs = cache(async () => {
  const data = await sanityClient().fetch<JobType[] | null>(jobsQuery)

  if (!data) return []

  return data
})

export const getProjects = cache(async () => {
  const data = await sanityClient().fetch<ProjectType[] | null>(projectsQuery)

  if (!data) return []

  return data
})

export const getProjectBySlug = cache(async ({ slug }: { slug: string }) => {
  const data = await sanityClient().fetch<ProjectType | null>(
    projectBySlugQuery,
    {
      slug,
    }
  )

  if (!data) throw new Error('No project found')

  return data
})

export const getCertificates = cache(async () => {
  const data = await sanityClient().fetch<CertificateType[] | null>(
    certificatesQuery
  )

  if (!data) return []

  return data
})

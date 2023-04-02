import 'server-only'

import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity/sanity.api'
import { createClient } from 'next-sanity'

import {
  homePageQuery,
  homePageTitleQuery,
  HomePageType,
  jobsQuery,
  JobType,
  profileQuery,
  ProfileType,
  projectBySlugQuery,
  ProjectType,
  settingsQuery,
  SettingsType,
} from './sanity.queries'

const sanityClient = () => {
  return createClient({ projectId, dataset, apiVersion, useCdn })
}

export async function getHomePage() {
  const res = sanityClient().fetch<HomePageType | null>(homePageQuery)
  if (!res) throw new Error('Home page not found')

  return res
}

export async function getProfile() {
  const data = await sanityClient().fetch<ProfileType | null>(profileQuery)

  if (!data) throw new Error('No profile found')

  return data
}

export async function getJobs() {
  const data = await sanityClient().fetch<JobType[] | null>(jobsQuery)

  if (!data) throw new Error('No jobs found')

  return data
}

export async function getHomePageTitle() {
  const data = await sanityClient().fetch<HomePageType['title'] | null>(
    homePageTitleQuery
  )

  if (!data) throw new Error('No home page title found')

  return data
}

export async function getProjectBySlug({ slug }: { slug: string }) {
  const data = await sanityClient().fetch<ProjectType | null>(
    projectBySlugQuery,
    {
      slug,
    }
  )

  if (!data) throw new Error('No project found')

  return data
}

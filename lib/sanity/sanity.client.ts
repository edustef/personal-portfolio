import 'server-only'

import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity/sanity.api'
import { createClient } from 'next-sanity'

import {
  HomePageQuery,
  homePageQuery,
  HomePageTitleQuery,
  homePageTitleQuery,
  pageBySlugQuery,
  PagesQuery,
  ProfileQuery,
  profileQuery,
  projectBySlugQuery,
  ProjectQuery,
  SettingsQuery,
  settingsQuery,
} from './sanity.queries'


const sanityClient = (token?: string) => {
  return createClient({ projectId, dataset, apiVersion, useCdn, token })
}

export async function getHomePage({ token }: { token?: string }) {
  const res = sanityClient(token).fetch<HomePageQuery | null>(homePageQuery)
  if (!res) throw new Error('Home page not found')

  return res
}

export async function getProfile({ token }: { token?: string }) {
  return await sanityClient(token).fetch<ProfileQuery | null>(profileQuery)
}

export async function getHomePageTitle({ token }: { token?: string }) {
  return await sanityClient(token).fetch<HomePageQuery['title'] | null>(
    homePageTitleQuery
  )
}

export async function getPageBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}) {
  return await sanityClient(token).fetch<PagesQuery | null>(pageBySlugQuery, {
    slug,
  })
}

export async function getProjectBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}) {
  return await sanityClient(token).fetch<ProjectQuery | null>(
    projectBySlugQuery,
    { slug }
  )
}

export async function getSettings({ token }: { token?: string }) {
  return await sanityClient(token).fetch<SettingsQuery | null>(settingsQuery)
}

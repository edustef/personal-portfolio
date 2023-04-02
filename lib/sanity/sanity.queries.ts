import { groq } from 'next-sanity'
import { Image, PortableTextBlock } from 'sanity'

// add home page query type
export type HomePageType = {
  _id: string
  footer: string
  profile: ProfileType
  title: string
}
export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id, 
    footer,
    overview, 
    profile->{
      _id,
      name,
      motto,
      email,
      picture,
      about,
      location,
      phone,
      workPreference,
    }, 
    title, 
  }
`

export type HomePageTitle = Pick<HomePageType, 'title'>
export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`

export type ProfileType = {
  _id: string
  name: string
  motto: string
  email: string
  picture: Image
  about: string
  location: string
  phone: string
  workPreference: string
}
export const profileQuery = groq`
  *[_type == "profile"][0]{
    _id,
    name,
    motto,
    email,
    picture,
    about,
    location,
    phone,
    workPreference,
  }
`

export type SkillType = {
  _id: string
  name: string
}
export const skillQuery = groq`
  *[_type == "skill"]{
    _id,
    name,
  }
`

export type JobType = {
  _id: string
  company: string
  description: PortableTextBlock[]
  startDate: string
  endDate?: string
  position: string
  skills: SkillType[]
}
export const jobsQuery = groq`
  *[_type == "job"] | order(startDate desc){
    _id,
    company,
    description,
    startDate,
    endDate,
    position,
    skills[]->{
      _id,
      name,
    },
  }
`

export type ProjectType = {
  _id: string
  client: string
  coverImage: string
  description: string
  duration: {
    start: string
    end: string
  }
  overview: PortableTextBlock[]
  site: string
  slug: string
  tags: string[]
  title: string
}
export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client, 
    coverImage,
    description,
    duration, 
    overview,
    site, 
    "slug": slug.current,
    tags,
    title,
  }
`

export type SettingsType = {
  _id: string
  footer: PortableTextBlock[]
  menuItems: {
    _type: string
    slug: string
    title: string
  }[]
  ogImage: Image
}
export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`

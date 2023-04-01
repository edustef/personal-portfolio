import { groq } from 'next-sanity'
import { Image, PortableTextBlock } from 'sanity'

// add home page query type
export type HomePageQuery = {
  _id: string
  footer: string
  overview: PortableTextBlock[]
  showcaseProjects: {
    _type: string
    coverImage: Image
    overview: PortableTextBlock[]
    slug: string
    tags: string[]
    title: string
  }[]
  title: string
}
export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id, 
    footer,
    overview, 
    showcaseProjects[]->{
      _type,
      coverImage, 
      overview, 
      "slug": slug.current,
      tags, 
      title, 
    }, 
    title, 
  }
`

export type ProfileQuery = {
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

export type HomePageTitleQuery = Pick<HomePageQuery, 'title'>
export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`

export type PagesQuery = {
  _id: string
  body: string
  overview: PortableTextBlock[]
  slug: string
  title: string
}
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    slug,
    title,
  }
`

export type ProjectQuery = {
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

export type SettingsQuery = {
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

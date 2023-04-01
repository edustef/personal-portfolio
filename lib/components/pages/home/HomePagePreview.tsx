'use client'

import { usePreview } from 'lib/sanity/sanity.preview'
import {
  HomePageQuery,
  homePageQuery,
  ProfileQuery,
  profileQuery,
} from 'lib/sanity/sanity.queries'

import { HomePage } from './HomePage'

export function HomePagePreview({ token }: { token: null | string }) {
  const homepageData: HomePageQuery = usePreview(token, homePageQuery)
  const profileData: ProfileQuery = usePreview(token, profileQuery)

  if (!homepageData) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  return <HomePage data={{homepageData, profileData}} />
}

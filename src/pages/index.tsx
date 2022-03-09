import type { NextPage } from 'next'
import PublicTemplate from '@/components/public/public-template'
import HeadMetaContent from '@/components/public/head-meta-content'
import HomeBanner from '@/components/public/home-banner/home-banner'

const Home: NextPage = () => {
  return (
    <PublicTemplate>
      <HeadMetaContent title="App Joga Fácil" meta="App Joga Fácil" />
      <HomeBanner />
    </PublicTemplate>
  )
}

export default Home

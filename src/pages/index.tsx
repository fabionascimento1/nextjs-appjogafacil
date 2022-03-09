import type { NextPage } from 'next'
import PublicTemplate from '@/components/public/public-template'
import HeadMetaContent from '@/components/public/head-meta-content'
import Header from '@/components/public/header/header'

const Home: NextPage = () => {
  return (
    <PublicTemplate>
      <HeadMetaContent title="App Joga Fácil" meta="App Joga Fácil" />
    </PublicTemplate>
  )
}

export default Home

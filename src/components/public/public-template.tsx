import type { NextPage } from 'next'
import Header from '@/components/public/header/header'

const PublicTemplate: NextPage = ({children}): JSX.Element => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default PublicTemplate

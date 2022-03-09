import type { NextPage } from 'next'
import styles from '@/styles/Global.module.scss'
import Header from '@/components/public/header/header'
import Head from 'next/head'


const PublicTemplate: NextPage = ({children}): JSX.Element => {
  return (
    <>
    <div className={styles.container}>
      <Header />
      {children}
    </div>
    </>
  )
}

export default PublicTemplate

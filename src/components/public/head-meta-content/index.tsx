import type { NextPage } from 'next'
import Head from 'next/head'

type Props = {
  title: string
  meta: string
}

const HeadMetaContent: NextPage<Props> = (props: Props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.meta} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HeadMetaContent

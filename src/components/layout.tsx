import React, { ReactNode } from 'react'
import Head from 'next/head'

import { Container } from '@/styles/components/layout'

interface Props {
  children: ReactNode
  title: string
}

export const Layout = ({ children, title }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>{children}</Container>
    </>
  )
}

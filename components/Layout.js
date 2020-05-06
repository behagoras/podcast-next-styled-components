import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'

const Header = styled.header`
  color: #fff;
  background: #8756ca;
  padding: 15px;
  text-align: center;
`
const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header>{title}</Header>
      {children}
      <style jsx global>
        {`
          body {
            margin: 0;
            font-family: 'helvetica-neue', 'helvetica', 'arial', 'system-ui';
            background: white;
          }
          `}
      </style>
    </>
  )
}

export default Layout

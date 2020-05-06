import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  color: #fff;
  background: #8756ca;
  padding: 15px;
  text-align: center;
`
const Layout = ({ title, children }) => {
  return (
    <>
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

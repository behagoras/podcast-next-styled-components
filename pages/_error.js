import React from 'react'
import styled from 'styled-components'

import Link from 'next/link'
import Layout from '../components/Layout'





const Error = ({ statusCode }) => {

  return (
    <Layout title={`Error: ${statusCode}`}>
      {
        statusCode === 404 ? (
          <div className="Message">
            <h1>Esta página no existe</h1>
            <p><Link href="/"><a>Volver a la página de inicio</a></Link></p>

          </div>
        ) : (
          <div className="Message">
            <h1>Hubo un error</h1>
            <p>Intente nuevamente más tarde</p>
          </div>
        )
      }
      <style jsx>{`
        h1{
          color blue;
          background-color: ;
        }
      `}</style>
    </Layout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error

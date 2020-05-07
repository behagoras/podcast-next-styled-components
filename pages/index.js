import React from 'react'
import fetch from 'isomorphic-fetch'
import Error from './_error'

import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'

const index = ({ channels = [], statusCode }) => {

  if (statusCode !== 200) return <Error statusCode />

  return (
    <Layout title="Podcasts">
      <ChannelGrid channels={channels} />
    </Layout>
  )
}

export async function getServerSideProps({ res }) {
  try {
    const res = await fetch('https://api.audioboom.com/channels/recommended')
    const { body: channels } = await res.json()
    res.statusCode = 200
    return { props: { channels, statusCode: res.statusCode } }
  } catch (error) {
    res.statusCode = 503
    return { props: { statusCode: res.statusCode } }
  }

}

export default index

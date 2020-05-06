import React from 'react'

import fetch from 'isomorphic-fetch'
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'

const index = ({ channels = [] }) => {
  return (
    <Layout title="Podcasts">
      <ChannelGrid channels={channels} />
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  const res = await fetch('https://api.audioboom.com/channels/recommended')
  const { body: channels } = await res.json()
  return { props: { channels } }
}

export default index

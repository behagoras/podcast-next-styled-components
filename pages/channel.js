import React, { useState } from 'react'
import styled from 'styled-components'
import Error from './_error'
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'
import PodcastsGrid from '../components/PodcastsGrid'

const Banner = styled.div`
  width: 100%;
  padding-bottom: 25%;
  background-position: 50% 50%;
  background-size: cover;
  background-color: #aaa;
`

const channel = ({ channel = {}, series = [], audioClips = [], statusCode }) => {
  const [openPodcast,setOpenPodcast]=useState(null)

  handleOpenPodcast=(e,podcast)=>{
    e.preventDefault()
    setOpenPodcast(podcast)
  }

  if (statusCode !== 200) return <Error statusCode={statusCode} />

  {openPodcast&&<div>Podcast Abierto</div>}

  console.log(channel)
  return (
    <Layout title="Podcasts">
      <Banner style={{ backgroundImage: `url(${channel.urls.banner_image.original})` }} />
      <ChannelGrid channels={series} title={channel.title} />
      <PodcastsGrid audioClips={audioClips} title="Últimos Podcasts" />
    </Layout>
  )
}

export async function getServerSideProps({ query, res }) {

  try {
    const { id } = query

    const [resChannel, resSeries, resAudios] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${id}`),
      fetch(`https://api.audioboom.com/channels/${id}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${id}/audio_clips`),
    ])
    if (resChannel.status >= 400) {
      res.statusCode = resChannel.status
      return { props: {
        channel: {},
        series: {},
        audioClips: {},
        statusCode: res.statusCode,
      } }
    }

    const { body: { channel } } = await resChannel.json()
    const { body: { channels: series } } = await resSeries.json()
    const { body: { audio_clips: audioClips } } = await resAudios.json()
    res.statusCode = 200
    return { props: { channel, series, audioClips, statusCode: res.statusCode } }
  } catch (error) {
    res.statusCode = 503
    return { props: { statusCode: res.statusCode } }
  }

}

export default channel

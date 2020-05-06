import React from 'react'
import styled from 'styled-components'
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

const channel = ({
  channel,
  series,
  audioClips,
}) => {
  console.log(channel)
  return (
    <Layout title="Podcasts">
      <Banner style={{ backgroundImage: `url(${channel.urls.banner_image.original})` }} />
      <ChannelGrid channels={series} title={channel.title} />
      <PodcastsGrid audioClips={audioClips} title="Últimos Podcasts" />
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  const { id } = query

  const [resChannel, resSeries, resAudios] = await Promise.all([
    fetch(`https://api.audioboom.com/channels/${id}`),
    fetch(`https://api.audioboom.com/channels/${id}/child_channels`),
    fetch(`https://api.audioboom.com/channels/${id}/audio_clips`),
  ])
  const { body: { channel } } = await resChannel.json()
  const { body: { channels: series } } = await resSeries.json()
  const { body: { audio_clips: audioClips } } = await resAudios.json()
  return { props: {
    channel,
    series,
    audioClips,
  } }
}

export default channel

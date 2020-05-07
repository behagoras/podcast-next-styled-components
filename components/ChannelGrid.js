import React from 'react'
import styled from 'styled-components'
import Channel from './Channel'

const Channels = styled.a`
  display: grid;
  grid-gap: 15px;
  padding: 15px;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
`

const Title = styled.h2`
  padding: 5px;
  font-size: 0.9em;
  font-weight: 600;
  margin: 0;
  text-align: center;
`

const ChannelGrid = ({ channels, title }) => {
  return (
    <>
      { title && <Title>{title}</Title> }
      <Channels>
        { channels.map((channel) => <Channel channel={channel} key={`c-${channel.id}`} />) }
      </Channels>
    </>
  )
}

export default ChannelGrid

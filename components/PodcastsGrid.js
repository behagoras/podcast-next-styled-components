import React from 'react'
import styled from 'styled-components'
import Podcast from './Podcast'

const Title = styled.h2`
  font-weight: 600;
  padding: 15px;
`

const PodcastsGrid = ({ audioClips, title }) => {
  return (
    <>
      { title && <Title>{title}</Title> }
      { audioClips.map((clip) => <Podcast podcast={clip} />)}
    </>
  )
}

export default PodcastsGrid

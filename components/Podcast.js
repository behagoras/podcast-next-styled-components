import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
  display: block;
  text-decoration: none;
  text-align:left;
  color: #333;
  padding: 15px;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  cursor: pointer;
  &:hover {
    color: #000;
  }
`
const PodcastTitle = styled.h3`
  padding: 5px;
  font-size:0.9em;
  font-weight: 600;
  margin: 0;
`

const Meta = styled.div`
  color: #666;
  margin-top: 0.5em;
  font-size: 0.8em;
`

const Podcast = ({ podcast }) => {
  return (
    <Link href={`/podcast?id=${podcast.id}`} key={`k-${podcast.id}`}>
      <Container>
        <PodcastTitle>{ podcast.title }</PodcastTitle>
        <Meta>
          { Math.ceil(podcast.duration / 60) }
          {' minutes'}
        </Meta>
      </Container>
    </Link>
  )
}

export default Podcast

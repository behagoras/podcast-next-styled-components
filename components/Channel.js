import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Title = styled.h3`
  padding: 5px;
  font-size:0.9em;
  font-weight: 600;
  margin: 0;
  text-align: center;
`

const Container = styled.a`
  display: block;
  margin-bottom: 0.5em;
  color: #333;
  text-decoration: none;
`
const Image = styled.img`
  border-radius: 3px;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
  width: 100%;
`

const Channel = ({ channel }) => {
  return (
    <Link href={`/channel?id=${channel.id}`} prefetch>
      <Container>
        <Image src={channel.urls.logo_image.original} alt={channel.name} />
        <Title>{channel.title}</Title>
      </Container>
    </Link>
  )
}

export default Channel

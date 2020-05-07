import React from 'react'
import styled from 'styled-components'
import {Link} from '../routes'
import slug from '../utils/slug';


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
    // <Link route='blog' params={{slug: 'hello-world'}}>
    // href={`/channel?id=${channel.id}`}
    <Link route="channel" params={{
      slug:slug(channel.title),
      id:channel.id
    }}>
      <Container>
        <Image src={channel.urls.logo_image.original} alt={channel.name} />
        <Title>{channel.title}</Title>
      </Container>
    </Link>
  )
}

export default Channel

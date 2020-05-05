import React from 'react'
import styled from 'styled-components'

import fetch from 'isomorphic-fetch'

const Header = styled.header`
  color: #fff;
  background: #8756ca;
  padding: 15px;
  text-align: center;
`

const Channels = styled.div`
  display: grid;
  grid-gap: 15px;
  padding: 15px;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
`
const Channel = styled.a`
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
const Title = styled.h2`
  padding: 5px;
  font-size: 0.9em;
  font-weight: 600;
  margin: 0;
  text-align: center;
`

export default class index extends React.Component {
  static async getInitialProps() {
    const req = await fetch('https://api.audioboom.com/channels/recommended')
    const { body: channels } = await req.json()
    return { channels }
  }

  render() {
    const { channels } = this.props
    return (
      <>
        <Header>Encabezado</Header>
        <Channels>
          {
            channels.map((channel) => {
              return (
                <Channel>
                  <Image src={channel.urls.logo_image.original} alt={channel.name} />
                  <Title>{channel.title}</Title>
                </Channel>
              )
            })
          }
        </Channels>
        <style jsx global>
          {`
          body {
            margin: 0;
            font-family: helvetica-neue, helvetica, arial, system-ui;
            background: white;
          }
          `}
        </style>
      </>
    )
  }
}


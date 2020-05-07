import React from 'react'
import 'isomorphic-fetch'
import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.div`
  color: #fff;
  background: #8756ca;
  padding: 15px;
  text-align: center;
`

const Nav = styled.div`
  background: none;
`
const LinkElement = styled.div`
  display: inline-block;
  padding: 15px;
  color: white;
  cursor: pointer;
  text-decoration: none;
`
const Clip = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background: #8756ca;
  color: white;
`
const Picture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1;
  flex-direction: column;
  width: auto;
  padding: 10%;
  & div {
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
  }
`

const Player = styled.div`
  padding: 30px;
  background: rgba(0,0,0,0.3);
  text-align: center;
`
const H3 = styled.div`
  margin: 0;
`
const H6 = styled.div`
  margin: 0;
  margin-top: 1em;
`
const Audio = styled.audio`
  margin-top: 2em;
  width: 100%;
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
`

const Podcast = ({ clip = {} }) => {
  console.log(clip)
  return (
    <div>
      <Header>Podcasts</Header>
      <Modal>
        <Clip className="clip">
          <Nav>
            <Link href={`/channel?id=${clip.channel.id}`}>
              <LinkElement className="close">&lt; Volver</LinkElement>
            </Link>
          </Nav>
          <Picture>
            <div style={{ backgroundImage: `url(${clip.urls.image || clip.channel.urls.logo_image.original})` }} />
          </Picture>
          <Player>
            <H3>{ clip.title }</H3>
            <H6>{ clip.channel.title }</H6>
            <Audio controls autoPlay={true}>
              <source src={clip.urls.high_mp3} type="audio/mpeg" />
            </Audio>
          </Player>
        </Clip>
      </Modal>
      <style jsx global>
        {`
          body {
            margin: 0;
            font-family: 'helvetica-neue', 'helvetica', 'arial', 'system-ui';
            background: white;
          }
          `}
      </style>
    </div>
  )
}

export async function getServerSideProps({ query, res }) {
  try {
    const { id } = query
    const fetchClip = await fetch(`https://api.audioboom.com/audio_clips/${id}.mp3`)
    const clip = (await fetchClip.json()).body.audio_clip
    console.log('clip', clip)
    res.statusCode = 200
    return { props: { clip, statusCode: res.statusCode } }
  } catch (error) {
    res.statusCode = 503
    return { props: { statusCode: res.statusCode } }
  }

}

export default Podcast

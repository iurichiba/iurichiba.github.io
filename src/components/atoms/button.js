import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const anaglyph_frames = keyframes`
  from, 20%, 53%, 80%, to {
    text-shadow: none;
    color: white;
  }

  40% {
    text-shadow: rgba(255,0,0,0.5) -4px 0px 0px;
    color:rgba(0,255,255,0.5);
  }

  70% {
    text-shadow: rgba(255,0,0,0.5) 4px 0px 0px;
    color:rgba(0,255,255,0.5);
  }

  90% {
    text-shadow: rgba(255,0,0,0.5) 0px 4px 0px;
    color:rgba(0,255,255,0.5);
  }
`

const SSButton = styled.button`
  -webkit-transition: text-shadow 0.1s linear;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 20px;
  border: solid 1px white;
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  color: white;
  padding: 12px 16px;

  > p {
    display: inline-block;
    transform: rotate(-90deg);
}

  &:hover {
    animation: ${anaglyph_frames} 0.33s linear;
  }
`

export default SSButton;

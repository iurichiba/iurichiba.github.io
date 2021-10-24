import { keyframes } from '@emotion/react'

export const anaglyph = keyframes`
  from, 5%, 15%, 25%, to {
    filter: none;
    color: white;
  }

  10% {
    filter: drop-shadow(-2px -2px 1px red) drop-shadow(2px 2px 1px cyan);
    color: red;
  }

  20% {
    filter: drop-shadow(-2px 2px 1px red) drop-shadow(2px -2px 1px cyan);
    color: cyan;
  }
`

import { keyframes } from "@emotion/react";

export const anaglyph = (distance = 8) => {
  return keyframes`
    from, 3%, 9%, 15%, to {
      filter: none;
      color: white;
    }

    6% {
      filter: drop-shadow(-${distance}px -${distance}px 1px red) drop-shadow(${distance}px ${distance}px 1px cyan);
      color: red;
    }

    12% {
      filter: drop-shadow(-${distance}px ${distance}px 1px red) drop-shadow(${distance}px -${distance}px 1px cyan);
      color: cyan;
    }
  `;
};

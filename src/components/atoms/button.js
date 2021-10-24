import styled from "@emotion/styled";
import { anaglyph as anaglyph_frames } from "../../styles/animations";

const SSButton = styled.button`
  font-family: "Barlow", sans-serif;
  font-size: 16px;
  line-height: 20px;
  border: solid 1px white;
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  color: white;
  padding: 12px 16px;

  &:hover {
    font-weight: bold;
    border: solid 2px white;
    background-color: #ffffff16;
    animation: ${anaglyph_frames} 1s ease-in;
    > svg {
      stroke-width: 3px;
    }
  }
`;

export default SSButton;

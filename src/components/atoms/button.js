import styled from "@emotion/styled";
import { anaglyph as anaglyphEffect } from "../../styles/animations";

const SSButton = styled.button`
  position: relative;
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
    animation: ${anaglyphEffect(3)} 1.33s ease-in;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: solid 1.33px white;
      background-color: #ffffff16;
    }
  }
`;

export default SSButton;

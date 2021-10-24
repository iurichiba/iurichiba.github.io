import styled from "@emotion/styled";

import logo from "../../logo.svg";
import { anaglyph as anaglyph_frames } from "../../styles/animations";

const AnimatedImage = styled.img`
	animation: ${anaglyph_frames} 1.33s ease-out 2.33s infinite;
`;

const Logo = (props) => {
	return <AnimatedImage src={logo} alt="Shoryuken Solutions" {...props} />;
};

export default Logo;

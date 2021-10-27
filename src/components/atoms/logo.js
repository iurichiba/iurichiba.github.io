import styled from "@emotion/styled";

import logo from "../../logo.svg";
import { anaglyph as anaglyphEffect } from "../../styles/animations";

const AnimatedImage = styled.img`
	animation: ${anaglyphEffect(3)} 1.33s ease-in 3.33s infinite alternate;
`;

const Logo = (props) => {
	return <AnimatedImage src={logo} alt="Shoryuken Solutions" {...props} />;
};

export default Logo;

import SSLogo from './components/atoms/logo';
import SSButtonWithIcon, { kAlignment } from "./components/atoms/icon-button";
import { FileText as FileTextIcon, AtSign as AtSignIcon } from "react-feather";

import { center, fill } from "./styles/common";
import "./home.css";

// MARK: -- Constants
const kCVAddress =
  "https://github.com/iurichiba/iurichiba.github.io/raw/gh-pages/iurichiba-cv2021.pdf";
const kEmailAddress = "mailto:iuri.chiba@shoryuken.solutions";

// MARK: -- ⚛️ Main Component
const Home = (props) => {
  return (
    <div style={styles.home}>
      <SSLogo className="logo" />
      <div className="description">
        <p>
          <em>
            This web portfolio is <strong>under construction</strong>; in the
            meantime, please use the links below:
          </em>
        </p>
      </div>
      <div className="buttonGroup">
        <SSButtonWithIcon
          as="a"
          href={kCVAddress}
          decoration={<FileTextIcon />}
          alignment={kAlignment.LEFT}
        >
          download résumé
        </SSButtonWithIcon>
        <SSButtonWithIcon
          as="a"
          href={kEmailAddress}
          decoration={<AtSignIcon />}
          alignment={kAlignment.LEFT}
        >
          get in touch
        </SSButtonWithIcon>
      </div>
    </div>
  );
};

// MARK: -- Styles
const styles = {
  home: {
    ...center,
    ...fill,
    flexDirection: "column",
    color: "white",
  },
};

// MARK: -- Module Export
export default Home;

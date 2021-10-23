import PropTypes from "prop-types";

import SSButton from "./button.js";
import * as Icon from "react-feather";

import { addProps } from "../../helpers/element-manipulation";

// MARK: -- Constants
export const kAlignment = Object.freeze({
  LEFT: { label: "left", flexDirection: "row" },
  RIGHT: { label: "right", flexDirection: "row-reverse" },
});

// MARK: -- Helper Functions
const elementWithProps = (element, newProps) => {
  const newElement = addProps(element, newProps);
  return newElement;
};

// MARK: -- ⚛️ Main Component
const SSButtonWithIcon = (props) => {
  const { children, ...otherProps } = props;
  return (
    <SSButton style={styles(props).button} {...otherProps}>
      {elementWithProps(props.decoration, {
        style: styles(props).icon,
        size: 16,
      })}
      {props.children}
    </SSButton>
  );
};

// MARK: -- Styles
const styles = ({ alignment: { flexDirection } }) => {
  return {
    button: {
      display: "flex",
      flexDirection,
      justifyContent: 'space-between',
      alignItems: "center",
      textAlign: "right",
    },
    icon: { marginRight: 12 },
  };
};

// MARK: -- Prop Types
SSButtonWithIcon.propsTypes = {
  decoration: PropTypes.instanceOf(Icon).isRequired,
  alignment: PropTypes.oneOf([Object.keys(kAlignment)]),
};

SSButtonWithIcon.defaultProps = {
  alignment: kAlignment.LEFT,
};

// MARK: -- Module Export
export default SSButtonWithIcon;

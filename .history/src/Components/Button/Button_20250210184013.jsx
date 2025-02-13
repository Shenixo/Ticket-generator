import "./Button.css";
import PropTypes from "prop-types";

const Button = ({children, background = "white"}) => {
  return <div style={{background: background}} className="button">{children}</div>;
  background: PropTypes.string,
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Button;

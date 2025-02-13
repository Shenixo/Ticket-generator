import "./Button.css";
import PropTypes from "prop-types";

const Button = ({children}) => {
  return <div className="button">{children}</button>;
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Button;

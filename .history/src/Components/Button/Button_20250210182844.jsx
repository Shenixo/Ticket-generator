import "./Button.css";
import PropTypes from "prop-types";

const Button = ({}) => {
  return <button className="button">{buttonContent}</button>;
};

Button.propTypes = {
  buttonContent: PropTypes.string.isRequired,
};

export default Button;

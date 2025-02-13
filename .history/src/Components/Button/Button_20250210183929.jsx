import "./Button.css";
import PropTypes from "prop-types";

const Button = ({children, back}) => {
  return <div className="button">{children}</div>;
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Button;

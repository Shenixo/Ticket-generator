import "./Button.css";
import PropTypes from "prop-types";

const Button = ({
  children,
  background = "white",
  border = "none",
  color = "black",
  disabled = false,
  className = "",
  type
}) => {
  return (
    <button
      type
      disabled={!!disabled} 
      style={{ background, color, border }}
      className={`button ${disabled ? "disabled" : ""} ${className}`} 
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired, 
  background: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;

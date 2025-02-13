import "./Button.css";
import PropTypes from "prop-types";

const Button = ({
  children,
  background = "white",
  border = "none",
  color = "black",
  disabled = false,
}) => {
  return (
    <button
      disabled={!!disabled} 
      style={{ background, color, border }}
      className={`button ${disabled ? "disabled" : ""}`} 
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
};

export default Button;

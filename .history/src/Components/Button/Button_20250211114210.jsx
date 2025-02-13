import "./Button.css";
import PropTypes from "prop-types";

const Button = ({
  children,
  onclickBtn,
  background = "white",
  border = "none",
  color = "black",
  disabled = false,
  className = "",
  type
}) => {
  return (
    <button
      type={type}
      disabled={!!disabled} 
      onClick={onclickBtn}
      style={{ background, color, border }}
      className={`button ${disabled ? "disabled" : ""} ${className}`} 
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onclickBtn: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;

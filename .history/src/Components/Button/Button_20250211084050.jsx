import "./Button.css";
import PropTypes from "prop-types";

const Button = ({
  children,
  background = "white",
  border = "none",
  color = "black",
  disabled: false
}) => {
  return (
    <buttton
      disabled={disabled === null}
      style={{ background: background, color: color, border: border }}
      className="button"
    >
      {children}
    </buttton>
  );
  disabled: PropTypes.bool,
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string,
};

export default Button;

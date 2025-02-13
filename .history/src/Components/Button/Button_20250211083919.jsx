import "./Button.css";
import PropTypes from "prop-types";

const Button = ({
  children,
  background = "white",
  border = "none",
  color = "black",
  disabled
}) => {
  return (
    <div
      style={{ background: background, color: color, border: border }}
      className="button"
    >
      {children}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string,
};

export default Button;

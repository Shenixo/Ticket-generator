import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ children, background = "white" }) => {
  return (
    <div style={{ background: background, color: color, border: border }} className="button">
      {children}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  background: PropTypes.string,
};

export default Button;

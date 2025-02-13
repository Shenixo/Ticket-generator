import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ children, background, className="" }) => {
  return <div style={{background: background}} className={``}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
};

export default Card;

import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ children,  }) => {
  return <div style={{background: background}} className="card">{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;

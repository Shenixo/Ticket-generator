import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ children, background, className = "", onClickTab = {} }) => {
  return (
    <div onClick={onClickTab} style={{ background: background }} className={`card ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    background: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClickTab: PropTypes.func,
};

export default Card;

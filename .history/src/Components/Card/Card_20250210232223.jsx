import "./Card.css"
import PropTypes fromi 'prop-types';

const Card = ({children})l => {
  return (
    <div className="card">
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Card

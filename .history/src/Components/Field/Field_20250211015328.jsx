import "./Field.css";
import PropTypes from "prop-types";
const Field = ({ label_content }) => {
  return (
    <div className="field">
          <label htmlFor={label_content}>{label_content}</label>
          {
              field
          }
    </div>
  );
};
Field.propTypes = {
  label_content: PropTypes.string.isRequired,
};

export default Field;

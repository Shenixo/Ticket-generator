import "./Field.css";
import PropTypes from "prop-types";
const Field = ({ label_content, field }) => {
    const options = [1,]
  return (
    <div className="field">
      <label htmlFor={label_content}>{label_content}</label>
          {field === "input" && <input type="text" />}
          {field === "select" && }
          
    </div>
  );
};
Field.propTypes = {
  label_content: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
};

export default Field;

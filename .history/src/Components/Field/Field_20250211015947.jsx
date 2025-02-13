import "./Field.css";
import PropTypes from "prop-types";
const Field = ({ label_content, field }) => {
    const options = Array.from({length: 10}, (_, i) => i + 1)
  return (
    <div className="field">
      <label htmlFor={label_content}>{label_content}</label>
          {field === "input" && <input type="text" />}
          {field === "select" && <select name="dro" id=""></select>  }
          
    </div>
  );
};
Field.propTypes = {
  label_content: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
};

export default Field;

import Card from "../Card/Card";
import "./Field.css";
import PropTypes from "prop-types";
const Field = ({ label_content, field }) => {
  const options = Array.from({ length: 10 }, (_, i) => i + 1);

  const ticketType = {
    details: {
      type: "regular access",
      price: "free",
      tickets_vailable: "20",
    },
    details1: {
      type: "vip access",
      price: "20",
      tickets_vailable: "20",
    },
    details2: {
      type: "Regular access",
      price: "vvip access",
      tickets_vailable: "20",
    },
  };
  return (
    <div className="field">
      <label htmlFor={label_content}>{label_content}</label>
      {field === "input" && <input type="text" />}
      {field === "select" && (
        <select name="dropdown" id="dropdown">
          {options.map((num) => (
            <option key={num}>{num}</option>
          ))}
        </select>
      )}
      {field === "card" && (
        <Card className="select-ticket-type">
                  {Object.entries(ticketType).map(([key, value], idx) => <Card key={idx}>{ key}</Card>)}
        </Card>
      )}
    </div>
  );
};
Field.propTypes = {
  label_content: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
};

export default Field;

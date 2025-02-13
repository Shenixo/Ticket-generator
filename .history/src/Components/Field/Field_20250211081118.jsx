import { useState } from "react";
import Card from "../Card/Card";
import "./Field.css";
import PropTypes from "prop-types";
const Field = ({ label_content, field }) => {
  const options = Array.from({ length: 10 }, (_, i) => i + 1);
  const [activeTab, setActiveTab] = useState(null);
  const ticketType = {
    details: {
      type: "regular access",
      price: "free",
      tickets_available: "20",
      total_tickets: "25",
    },
    details1: {
      type: "vip access",
      price: 20,
      tickets_available: "20",
      total_tickets: "30",
    },
    details2: {
      type: "vvip access",
      price: 150,
      tickets_available: "20",
      total_tickets: "25",
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
          {Object.entries(ticketType).map(([key, value], idx) => (
            <Card
              className={`ticket_type ${
                activeTab === key ? "active_tab" : null
              }`}
              onClickTab={() => setActiveTab(key)}
              key={idx}
            >
                <h3 style={{marginBottom: ".4rem"}}>
                  {typeof value.price === "number" ? "$" : null}
                  {value.price}
                </h3>
                <p>{value.type}</p>
                <p>{value.tickets_available}</p>
            </Card>
          ))}
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

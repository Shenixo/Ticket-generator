import Card from "../Card/Card";
import "./Field.css";
import PropTypes from "prop-types";
import { useTicketContext } from "../../Context/TicketContext";

const Field = ({ label_content, field }) => {
  const { activeTab, setActiveTab, formData, handleFormData, error } = useTicketContext();

  const options = Array.from({ length: 10 }, (_, i) => i + 1);
  const ticketType = {
    details: { type: "regular access", price: "free", tickets_available: 20, total_tickets: 25 },
    details1: { type: "vip access", price: 20, tickets_available: 20, total_tickets: 30 },
    details2: { type: "vvip access", price: 150, tickets_available: 25, total_tickets: 40 },
  };
  
console.log("activeTab:", activeTab)
  return (
    <div className="field">
      <label htmlFor={label_content}>{label_content}</label>
      
      {field === "input" && (
        <div>
          <input type="text" />
          {error && <small className="error">{error}</small>}
        </div>
      )}

      {field === "select" && (
        <>
          <select onChange={handleFormData} name="number_of_tickets" id="dropdown" value={formData.number_of_tickets || ""}>
            <option value="" disabled>Select number of tickets</option>
            {options.map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          {error.number_of_tickets && <small className="error">{error.number_of_tickets}</small>}
        </>
      )}

      {field === "card" && (
        <div>
          <Card className="select-ticket-type">
            {Object.entries(ticketType).map(([key, value], idx) => (
              <Card
                className={`ticket_type ${activeTab === key ? "active_tab" : ""}`}
                onClick={() => setActiveTab(key)}
                key={idx}
              >
                <h3 style={{ marginBottom: ".4rem" }}>
                  {typeof value.price === "number" ? "$" : null}{value.price}
                </h3>
                <p>{value.type}</p>
                <span>{value.tickets_available}/{value.total_tickets}</span>
              </Card>
            ))}
          </Card>
          {error.activeTab && <small className="error">{error.activeTab}</small>}
        </div>
      )}
    </div>
  );
};


Field.propTypes = {
  label_content: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  error: PropTypes.shape({
    activeTab: PropTypes.string,
    number_of_tickets: PropTypes.string,
  }),
};

export default Field;

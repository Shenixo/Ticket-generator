import Card from "../Card/Card";
import "./Field.css";
import PropTypes from "prop-types";
import { useTicketContext } from "../../Context/TicketContext";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

const Field = ({ label_content, field, type }) => {
  const { activeTab, setActiveTab, formData, handleFormData, error } =
    useTicketContext();

  const options = Array.from({ length: 10 }, (_, i) => i + 1);
  const ticketType = {
    details: {
      type: "Regular Access",
      price: "Free",
      tickets_available: 20,
      total_tickets: 25,
    },
    details1: {
      type: "VIP Access",
      price: 20,
      tickets_available: 20,
      total_tickets: 30,
    },
    details2: {
      type: "VVIP Access",
      price: 150,
      tickets_available: 25,
      total_tickets: 40,
    },
  };
console.log()
  return (
    <div className="field">
      <label htmlFor={label_content}>{label_content}</label>

      {field === "input" && (
        <div>
          <input
            type={type}
            name={type === "email" ? "email" : "name"}
            value={formData[type === "email" ? "email" : "name"] || ""}
            onChange={handleFormData}
            aria-describedby={`${type}-error`}
          />
          <div
            className={`error-message ${
              error[type === "email" ? "email" : "text"] ? "show" : ""
            }`}
          >
            <small role="alert">{error[type]}</small>
          </div>
        </div>
      )}

      {field === "text_area" && (
        <div>
          <textarea
            rows="3"
            name="special_request"
            value={formData.special_request || ""}
            onChange={handleFormData}
            aria-describedby={`${label_content}-error`}
            className="text-area"
          ></textarea>
          <div
            className={`error-message ${error.special_request ? "show" : ""}`}
          >
            <small role="alert">{error.special_request}</small>
          </div>
        </div>
      )}

      {field === "image-upload" && (
        <div className="image-upload-container">
          <input
            className="image-upload"
            type="file"
            name="profile_upload"
            id="profile_upload"
            aria-describedby={`${label_content}-error`}
            accept="image/*"
          />
          <label htmlFor="profile_upload" className="image-upload-label">
            <div className="upload-box">
              <CloudDownloadOutlinedIcon />
              <p>Drag & drop or click to upload</p>
            </div>
          </label>
          <div className={`error-message ${error.image_upload ? "show" : ""}`}>
            <small role="alert">{error.image_upload}</small>
          </div>
        </div>
      )}

      {field === "select" && (
        <>
          <select
            onChange={handleFormData}
            name="number_of_tickets"
            id="dropdown"
            value={formData.number_of_tickets || ""}
          >
            <option value="" disabled>
              Select number of tickets
            </option>
            {options.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <div
            className={`error-message ${error.number_of_tickets ? "show" : ""}`}
          >
            <small role="alert">{error.number_of_tickets}</small>
          </div>
        </>
      )}

      {field === "card" && (
        <div>
          <Card className="select-ticket-type">
            {Object.entries(ticketType).map(([key, value], idx) => (
              <Card
                className={`ticket_type ${
                  activeTab === key ? "active_tab" : ""
                }`}
                onClickTab={() => setActiveTab(key)}
                key={idx}
              >
                <h3 style={{ marginBottom: ".4rem" }}>
                  {typeof value.price === "number" ? "$" : null}
                  {value.price}
                </h3>
                <p>{value.type}</p>
                <span>
                  {value.tickets_available}/{value.total_tickets}
                </span>
              </Card>
            ))}
          </Card>
          <div className={`error-message ${error.activeTab ? "show" : ""}`}>
            <small role="alert">{error.activeTab}</small>
          </div>
        </div>
      )}
    </div>
  );
};

Field.propTypes = {
  label_content: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Field;

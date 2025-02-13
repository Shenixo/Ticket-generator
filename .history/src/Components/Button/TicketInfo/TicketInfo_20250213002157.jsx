import "./TicketInfo.css";
import PropTypes from "prop-types";
import { useTicketContext } from "../../../Context/TicketContext";
const TicketInfo = () => {
  const { formData } = useTicketContext();
  return (
    <div className="ticket-info">
      <div className="ticket-info-first">
        <Content
          title="Name:"
          value={formData.name}
          borderRight="1px"
          borderBottom="1px"
        />
        <Content title="Email:" value={formData.email} borderBottom="1px" />
      </div>
      <div className="ticket-info-first">
        <Content
          title="Name:"
          value={formData.name}
          borderRight="1px"
          borderBottom="1px"
        />
        <Content
          title="Ticket for:"
          value={formData.number_of_tickets}
          borderBottom="1px"
        />
      </div>
      <Content
        title="Special Request:"
        value={formData.special_request ? formData.special_request : "Nil"}
        borderTop="1px"
      />
    </div>
  );
};

export default TicketInfo;

const Content = ({
  title,
  value,
  borderRight = "none",
  borderLeft = "none",
  borderTop = "none",
  borderBottom = "none",
}) => {
  return (
    <div
          style={{
        border: {`1px solid ${}`}
     
      }}
      className="content"
    >
      <small>{title}</small>
      <p>{value}</p>
    </div>
  );
};
Content.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  borderRight: PropTypes.string,
  borderLeft: PropTypes.string,
  borderTop: PropTypes.string,
  borderBottom: PropTypes.string,
};

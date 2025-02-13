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
          borderRight="2px solid #12464e"
          borderBottom="2px solid #12464e"
        />
        <Content
          title="Email:"
          value={formData.email}
          borderBottom="2px solid #12464e"
        />
      </div>
      <div className="ticket-info-first">
        <Content
          title="Name:"
          value={formData.name}
          borderRight="2px solid #12464e"
          borderBottom="1px solid #12464e"
        />
        <Content
          title="Ticket for:"
          value={formData.number_of_tickets}
          borderBottom="2px solid #12464e"

        />
      </div>
      <Content
        title="Special Request:"
        value={formData.special_request ? formData.special_request : "Nil"}
        borderTop="2px"
      />
      <div className="button-container">
         <Button
                          border="1px solid #24A0B5"
                          background="transparent"
                          color="#24A0B5"
                          onclickBtn={() => setToProceed(false)}
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          onclickBtn={handleVerifyForm}
                          background="#24A0B5"
                          color="#fff"
                        >
                          Get My Tickets
        </Button>
        
      </div>
    </div>
  );
};

export default TicketInfo;

const Content = ({
  title,
  value,
  borderBottom = "none",
  borderRight = "none",
  borderLeft = "none",
  borderTop = "none",
}) => {
  return (
    <div
      style={{
        borderBottom: borderBottom,
        borderRight: borderRight,
        borderLeft: borderLeft,
        borderTop: borderTop,
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

import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import Progress from "../../Components/Progress/Progress";
import Ticket from "../../Components/Ticket/Ticket";
import "./Tickets.css";
import { useTicketContext } from "../../Context/TicketContext";
const Tickets = () => {
  const { allFieldIsFilled, toProceed, formData } = useTicketContext()
  const isTicketReady = allFieldIsFilled(formData)
  return (
    <div className="tickets-container">
      <Card className="big-card" background="#041E23">
        <div className="title">
          <Progress />
          <h1>Your Ticket is Booked!</h1>
          <p>Check your email for a copy or you can download</p>
        </div>
        <Ticket />
        <div className="button-container button-container-ticket">
          <Link style={{ textDecoration: "none", width: "100%" }} to="/">
            <Button
              border="1px solid #24A0B5"
              background="transparent"
              color="#24A0B5"
            >
              Book Another Ticket
            </Button>
          </Link>
          <Button
            type="submit"
            // onclickBtn={handleVerifyForm}
            background="#24A0B5"
            color="#fff"
          >
            Download Ticket
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Tickets;

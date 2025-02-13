import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import Progress from "../../Components/Progress/Progress";
import Ticket from "../../Components/Ticket/Ticket";
import "./Tickets.css";
const Tickets = () => {
  return (
    <div className="tickets-container">
      <Card background="#041E23">
        <div className="title">
          <Progress />
          <h1>Your Ticket is Booked!</h1>
          <p>Check your email for a copy or you can download</p>
        </div>
        <Ticket />
        <div className="button-container">
        <Button
                  border="1px solid #24A0B5"
                  background="transparent"
                  color="#24A0B5"
                  // onclickBtn={() => setToProceed(false)}
                >
                  Book Another Ticket
                </Button>
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

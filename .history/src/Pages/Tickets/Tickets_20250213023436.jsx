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
        
      </Card>
    </div>
  );
};

export default Tickets;

import "./Ticket.css"
import ticketImage from "../../assets/ticket.svg";
import Card from "../Card/Card";

const Ticket = () => {
  return (
    <div className="ticket-div" style={{ backgroundImage: `url(${ticketImage})` }}>
      <Card
    </div>
  )
}

export default Ticket

import "./Ticket.css"
import ticketImage from "../../assets/ticket.svg";

const Ticket = () => {
  return (
    <div className="ticket-div" style={{ backgroundImage: `url(${ticketImage})` }}>
      <h1>Hello dev</h1>
    </div>
  )
}

export default Ticket

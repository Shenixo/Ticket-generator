import Card from "../../Components/Card/Card"
import "./Tickets.css"
const Tickets = () => {
  return (
    <div className="tickets-container">
      <Card background="#041E23">
        <div className="title">
        <h1>Your Ticket is Booked!</h1>
        <p>Check your email for a copy or you can download</p>
        </div>
        
      </Card>
    </div>
  )
}

export default Tickets

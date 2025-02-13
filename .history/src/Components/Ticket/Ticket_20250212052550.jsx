import "./Ticket.css"


const Ticket = () => {
  return (
    <div className="ticket-container">
      <div className="ticket">
        <div className="corner corner-top-left"></div>
        <div className="corner corner-top-right"></div>
        <div className="corner corner-bottom-left"></div>
        <div className="corner corner-bottom-right"></div>
      </div>
    </div>
  );
};

export default Ticket

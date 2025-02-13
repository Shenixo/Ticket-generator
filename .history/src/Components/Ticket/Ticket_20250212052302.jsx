import "./Ticket.css";

const Ticket = () => {
  return (
    <div className="ticket-container">
      <div className="ticket"></div>
    </div>
  );
};

export default Ticket;

/* Ticket.css */
.ticket-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.ticket {
  width: 300px;
  height: 600px;
  background-color: #12464E;
  border: 5px solid #24A0B5;
  position: relative;
}

/* Creating inward rounded edges */
.ticket::before,
.ticket::after,
.ticket .corner-top-left,
.ticket .corner-top-right,
.ticket .corner-bottom-left,
.ticket .corner-bottom-right {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 50%;
}

.ticket::before {
  top: -20px;
  left: -20px;
}

.ticket::after {
  top: -20px;
  right: -20px;
}

.ticket .corner-bottom-left {
  bottom: -20px;
  left: -20px;
}

.ticket .corner-bottom-right {
  bottom: -20px;
  right: -20px;
}

import "./Ticket.css";

const Ticket = () => {
  return (
    <div className="ticket-container">
      <div className="ticket">
        <div className="ticket-content">
          <h1 className="ticket-title">Hello Dev</h1>
        </div>
      </div>
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
  height: 601px;
  background: linear-gradient(135deg, #ffcc00, #ff6600);
  border-radius: 20px;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.ticket::before,
.ticket::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 50%;
}

.ticket::before {
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
}

.ticket::after {
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
}

.ticket-content {
  padding: 2rem;
  text-align: center;
}

.ticket-title {
  font-size: 24px;
  color: #fff;
  font-weight: bold;
}

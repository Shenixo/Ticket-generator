import "./TicketInfo.css";
const TicketInfo = () => {
  return (
    <div className="ticket-info">
      <div className="ticket-info-first">
              <div>
                  <p>hello dev</p>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default TicketInfo;


const Content = (title) => {
  return (
    <div className="content">
          <small>{title}</small>
          <p>{ value}</p>
    </div>
  )
}


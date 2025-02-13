import Card from "../../Components/Card/Card";
import Progress from "../../Components/Progress/Progress";
import "./Events.css";

const Events = () => {
    const eventDate = new Date(2025, 2, 15, 19, 0, 0);
    
  return (
    <div className="events">
      <Card background="#041e23">
        <Progress />
        <Card
          className="ticket-selection-card"
          background="linear-gradient(220deg, #082228 0%, #0d3942 100%)"
        >
          <h1>Techember Fest &apos;&apos; 25 </h1>
          <p>
            Join us for an unforgettable experience at Eko Convention Centre!
            Secure your spot now.
          </p>
          <div className="loc-nd-time">
            <span>Victoria Island</span>
            {/* <span>{eventDate}</span> */}
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default Events;

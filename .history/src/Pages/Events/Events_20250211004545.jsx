import Card from "../../Components/Card/Card";
import Progress from "../../Components/Progress/Progress";
import PlaceIcon from '@mui/icons-material/Place';
import "./Events.css";

const Events = () => {
  const eventDate = new Date("2025-03-15T19:00:00");
  const options = { month: "long", day: "numeric", year: "numeric" };
  const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };
  const formattedDate = eventDate.toLocaleDateString("en-US", options);
  const formattedTime = eventDate.toLocaleTimeString("en-US", timeOptions);
  return (
    <div className="events">
      <Card background="#041e23">
        <Progress />
        <Card
          className="ticket-selection-card"
          background="linear-gradient(-2deg, #082228 0%, #0d3942 100%)"
        >
          <h1>Techember Fest &apos;&apos; 25 </h1>
          <p>
            Join us for an unforgettable experience at Eko Convention Centre!
            Secure your spot now.
          </p>
          <div className="loc-nd-time">
          <div><PlaceIcon/> Victoria Island</div>
            <div>
              {formattedDate} | {formattedTime}
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default Events;

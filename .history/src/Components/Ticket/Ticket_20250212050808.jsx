import "./Ticket.css";
import ticketImage from "../../assets/ticket.svg";
import Card from "../Card/Card";
import PlaceIcon from "@mui/icons-material/Place";
const Ticket = () => {
  const eventDate = new Date("2025-03-15T19:00:00");
  const options = { month: "long", day: "numeric", year: "numeric" };
  const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };
  const formattedDate = eventDate.toLocaleDateString("en-US", options);
  const formattedTime = eventDate.toLocaleTimeString("en-US", timeOptions);
  return (
    <div
      className="ticket-div"
      style={{ backgroundImage: `url(${ticketImage})` }}
    >
      <Card
      >
        <div>
          <h1>Techember Fest &apos;&apos;25</h1>
          <p>
            Join us for an unforgettable experience at Eko Convention Centre!
            Secure your spot now.
          </p>
          <div className="loc-nd-time">
            <div>
              <PlaceIcon style={{ color: "red", marginRight: ".2rem" }} />
              <a
                style={{ color: "white" }}
                href="https://maps.app.goo.gl/v1UoCKye4R48sTdo7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Victoria Island
              </a>
            </div>
            <div>
              {formattedDate} | {formattedTime}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Ticket;

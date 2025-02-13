import Card from "../../Components/Card/Card";
import Progress from "../../Components/Progress/Progress";
import PlaceIcon from "@mui/icons-material/Place";
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
          background="linear-gradient(-25deg, #082228 0%, #0d3942 100%)"
        >
          <h1>Techember Fest &apos;&apos; 25 </h1>
          <p>
            Join us for an unforgettable experience at Eko Convention Centre!
            Secure your spot now.
          </p>
          <div className="loc-nd-time">
            <div>
              <PlaceIcon style={{ color: "red", marginRight: ".2rem" }} />
              <a
                href="https://maps.app.goo.gl/v1UoCKye4R48sTdo7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Victoria Island
              </a>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.7969874446676!2d3.430682020304916!3d6.42592631423634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf595acb634e9%3A0xc622cf20ce82ea55!2sEko%20Convention%20Center!5e0!3m2!1sen!2sng!4v1739264472159!5m2!1sen!2sng"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
                here
              </iframe>
            </div>
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

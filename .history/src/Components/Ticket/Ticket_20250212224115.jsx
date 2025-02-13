import Card from "../Card/Card";
import "./Ticket.css";
import PlaceIcon from "@mui/icons-material/Place";
import {
  eventDate,
  options,
  timeOptions,
  formattedDate,
  formattedTime,
} from "../../Pages/Events/Events";

const Ticket = () => {
  return (
    <div className="ticket-container">
      <div className="ticket">
        <div className="corner corner-top-left"></div>
        <div className="corner corner-top-right"></div>
        <div className="corner corner-bottom-left"></div>
        <div className="corner corner-bottom-right"></div>
        <Card className="ticket-card">
          <div>
            <h1>Techember Fest &apos;&apos;25</h1>

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
      <div className="ticket second-ticket">
        <div className="corner corner-top-left"></div>
        <div className="corner corner-top-right"></div>
        <div className="corner corner-bottom-left"></div>
        <div className="corner corner-bottom-right"></div>
      </div>
    </div>
  );
};

export default Ticket;

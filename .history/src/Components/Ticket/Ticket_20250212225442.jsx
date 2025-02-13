import Card from "../Card/Card";
import "./Ticket.css";
import PlaceIcon from "@mui/icons-material/Place";
import { formattedDate, formattedTime } from "../../Pages/Events/Events";

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

              <div>
                <PlaceIcon style={{ color: "red", marginRight: ".2rem" }} />
                Eko Convention Centre, Victoria Island La

              </div>
              <div>
                {formattedDate} | {formattedTime}
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

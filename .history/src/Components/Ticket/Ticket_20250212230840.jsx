import Card from "../Card/Card";
import "./Ticket.css";
import PlaceIcon from "@mui/icons-material/Place";
import { formattedDate, formattedTime } from "../../Pages/Events/Events";
import {formData} from "../../Context/TicketContext"
const Ticket = () => {
  return (
    <div className="ticket-container">
      <div className="ticket">
        <div className="corner corner-top-left"></div>
        <div className="corner corner-top-right"></div>
        <div className="corner corner-bottom-left"></div>
        <div className="corner corner-bottom-right"></div>
        <Card className="ticket-card">
          <div className="ticket-card-inner">
            <h1>Techember Fest &apos;&apos;25</h1>
              <div className="loc">
                <PlaceIcon style={{ color: "red", marginRight: ".3rem", fontSize: "20px" }} />
                Eko Convention Centre VI, Lagos
              </div >
              <div className="time">
                {formattedDate} | {formattedTime}
            </div>
            <div className="profile-upload">
              {formData.}
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

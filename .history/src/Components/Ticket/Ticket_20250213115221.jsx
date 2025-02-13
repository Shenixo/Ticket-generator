import Card from "../Card/Card";
import "./Ticket.css";
import PlaceIcon from "@mui/icons-material/Place";
import { formattedDate, formattedTime } from "../../Pages/Events/Events";
import { useTicketContext } from "../../Context/TicketContext";
import TicketInfo from "../Button/TicketInfo/TicketInfo";
import BarcodeGenerator from "../Barcode/Barcode";
const Ticket = () => {
  const { formData } = useTicketContext();
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
              <PlaceIcon
                style={{ color: "red", marginRight: ".3rem", fontSize: "20px" }}
              />
              Eko Convention Centre VI, Lagos
            </div>
            <div className="time">
              {formattedDate} | {formattedTime}
            </div>
            <div className="profile-upload">
              <img
                src={formData.profile_upload}
                alt="Uploaded preview"
                className="image-preview-ticket"
              />
            </div>
          </div>
          <TicketInfo/>
        </Card>
      </div>
      <div className="ticket second-ticket">
<BarcodeGenerator
        <div className="corner corner-top-left"></div>
        <div className="corner corner-top-right"></div>
        <div className="corner corner-bottom-left"></div>
        <div className="corner corner-bottom-right"></div>
      </div>
    </div>
  );
};

export default Ticket;

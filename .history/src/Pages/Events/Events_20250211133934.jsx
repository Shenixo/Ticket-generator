import Card from "../../Components/Card/Card";
import Progress from "../../Components/Progress/Progress";
import Form from "../../Components/Form/Form";
import PlaceIcon from "@mui/icons-material/Place";
import "./Events.css";
import { useTicketContext } from "../../Context/TicketContext";

const Events = () => {
  const eventDate = new Date("2025-03-15T19:00:00");
  const options = { month: "long", day: "numeric", year: "numeric" };
  const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };
  const formattedDate = eventDate.toLocaleDateString("en-US", options);
  const formattedTime = eventDate.toLocaleTimeString("en-US", timeOptions);
  const {toProceed} = useTicketContext()

  return (
    <div className="events">
      <Card className="bi-card" background="#041e23">
        <Progress />
        <Card className="big-card">
          <Card
            className="ticket-selection-card"
            background="linear-gradient(-42deg, #082228 45%, #0d3942 100%)"
          >
            
              
          </Card>
          <hr id="line" />
          <Form />
        </Card>
      </Card>
    </div>
  );
};

export default Events;

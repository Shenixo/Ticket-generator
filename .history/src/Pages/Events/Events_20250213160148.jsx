import Card from "../../Components/Card/Card";
import Progress from "../../Components/Progress/Progress";
import Form from "../../Components/Form/Form";
import PlaceIcon from "@mui/icons-material/Place";
import { useTicketContext } from "../../Context/TicketContext";
import "./Events.css";
import Field from "../../Components/Field/Field";
import Modal from "../../Components/Modal/Modal";

const eventDate = new Date("2025-03-15T19:00:00");
const options = { month: "long", day: "numeric", year: "numeric" };
const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };
export const formattedDate = eventDate.toLocaleDateString("en-US", options);
export const formattedTime = eventDate.toLocaleTimeString("en-US", timeOptions);
const Events = () => {
  const { toProceed, openModal, formSubmitted } = useTicketContext();
  return (
    <div className="events">
      {openModal && openModal && <Modal />}
      <Card className="outer-card" background="#041e23">
        <Progress value={toProceed ? "Attendee Details" : "Ticket Selection"} />
        <Card className="big-card">
          <Card
            className={`ticket-selection-card ${toProceed ? "left" : null}`}
            background="linear-gradient(-42deg, #082228 45%, #0d3942 100%)"
          >
            {!toProceed ? (
              <div>
                <h1>Techember Fest &apos;&apos;25</h1>
                <p>
                  Join us for an unforgettable experience at Eko Convention
                  Centre! Secure your spot now.
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
            ) : (
              <div>
                <Field
                  label_content="Upload Profile Photo"
                  field="image-upload"
                />
              </div>
            )}
          </Card>
          <hr id="line" />
          <Form />
        </Card>
      </Card>
    </div>
  );
};

export default Events;

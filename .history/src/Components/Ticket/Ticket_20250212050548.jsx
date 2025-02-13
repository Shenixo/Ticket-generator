import "./Ticket.css"
import ticketImage from "../../assets/ticket.svg";
import Card from "../Card/Card";

const Ticket = () => {
  return (
    <div className="ticket-div" style={{ backgroundImage: `url(${ticketImage})` }}>
      <Card  className={`ticket-selection-card ${toProceed ? "left" : null}`}
            background="linear-gradient(-42deg, #082228 45%, #0d3942 100%)">
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
      </Card>
    </div>
  )
}

export default Ticket

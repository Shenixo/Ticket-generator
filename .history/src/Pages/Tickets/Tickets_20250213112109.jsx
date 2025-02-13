import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import Progress from "../../Components/Progress/Progress";
import Ticket from "../../Components/Ticket/Ticket";
import html2canvas from "html2canvas";
import "./Tickets.css";
import { useTicketContext } from "../../Context/TicketContext";

const Tickets = () => {
  const { allFieldIsFilled, toProceed, formData, setBack } = useTicketContext();
  const isTicketReady = allFieldIsFilled(formData) && toProceed;
  const [isLoaded, setIsLoaded] = useState(false);

  // Ensure images are loaded before capturing the ticket
  useEffect(() => {
    const checkImagesLoaded = () => {
      const images = document.querySelectorAll("#ticket-container img");
      const allLoaded = Array.from(images).every((img) => img.complete && img.naturalHeight !== 0);
      setIsLoaded(allLoaded);
    };

    checkImagesLoaded();
    const interval = setInterval(checkImagesLoaded, 500);

    return () => clearInterval(interval);
  }, [isTicketReady]);

  // Function to capture and download the ticket
  const handleDownload = async () => {
    if (!isLoaded) {
      alert("Please wait until the images are fully loaded.");
      return;
    }

    const ticketElement = document.getElementById("ticket-container");
    if (!ticketElement) return;

    try {
      const canvas = await html2canvas(ticketElement, {
        scale: 2,
        useCORS: true, // Ensures external images load correctly
        allowTaint: true, // Helps with CORS issues
        logging: true, // Debugging
      });

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "ticket.png"; // Name of the downloaded file
      link.click();
    } catch (error) {
      console.error("Error capturing the ticket:", error);
    }
  };

  return (
    <div className="tickets-container">
      <Card className="big-card" background="#041E23">
        <div className="title">
          {isTicketReady && <Progress />}
          <h1>{isTicketReady ? "Your Ticket is Booked!" : "No Ticket available"}</h1>
          <p>{isTicketReady ? "Check your email for a copy or you can download" : "Back to Events to book a ticket"}</p>
        </div>

        {/* Ensure the Ticket component is properly wrapped */}
        {isTicketReady ? (
          <div id="ticket-container">
            <Ticket />
          </div>
        ) : (
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button className="back" border="1px solid #24A0B5" background="transparent" color="#24A0B5">
                Events
              </Button>
            </Link>
          </div>
        )}

        {isTicketReady && (
          <div className="button-container button-container-ticket">
            <Link style={{ textDecoration: "none", width: "100%" }} to="/">
              <Button onclickBtn={() => setBack(false)} border="1px solid #24A0B5" background="transparent" color="#24A0B5">
                Book Another Ticket
              </Button>
            </Link>
            <Button type="submit" background="#24A0B5" color="#fff" onClick={handleDownload}>
              Download Ticket
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Tickets;

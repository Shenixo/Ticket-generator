import { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import for navigation
import "./Modal.css";
import { ticketType } from "../Field/Field";
import { useTicketContext } from "../../Context/TicketContext";
import { CircularProgress } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Modal = () => {
  const [isClosing, setIsClosing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(""); 
  const [alert, setAlert] = useState("");  // Stores the alert message
  const [alertType, setAlertType] = useState(""); // Determines if alert is success or error
  const [isProcessing, setIsProcessing] = useState(false); 
  const [isAlertVisible, setIsAlertVisible] = useState(false);  // Track alert visibility
  const { openModal, activeTab, setOpenModal } = useTicketContext();
  const navigate = useNavigate();  // Hook for navigation

  const ticketTypeKeys = Object.entries(ticketType).map(([key]) => key);
  const ticket_type = ticketTypeKeys.find((tabKey) => tabKey === activeTab);

  const ticketPrice = ticketType[ticket_type]?.price || 0; 

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpenModal(false);
      setIsClosing(false);
    }, 300);
  };

  const handlePayment = () => {
    if (ticketPrice === 0) {
      setAlert("Your free ticket has been booked successfully!");
      setAlertType("success");
      setIsAlertVisible(true); // Show alert
      setTimeout(() => {
        handleCloseModal();
        setAlert("");  // Clear alert after 2 seconds
        setIsAlertVisible(false); // Hide alert
      }, 2000);
    } else if (paymentMethod) {
      setIsProcessing(true);
      setTimeout(() => {
        setAlert(`Payment successful via ${paymentMethod}`);
        setAlertType("success");
        setIsAlertVisible(true); // Show alert
        setIsProcessing(false);
        setTimeout(() => {
          navigate("./my_tickets");  // Navigate to my_tickets after successful payment
        }, 500);  // Wait for alert display before navigating
      }, 2000);
    } else {
      setAlert("Please select a payment method.");
      setAlertType("error");
      setIsAlertVisible(true); // Show alert
      setTimeout(() => {
        setAlert("");  // Clear alert after 2 seconds
        setIsAlertVisible(false); // Hide alert
      }, 2000);
    }
  };

  // Set alert background color based on alert type
  const alertBackground = alertType === "success" ? "green" : alertType === "error" ? "red" : "transparent";

  return (
    <>
      {/* Display alert at the center of the page */}
      {alert && isAlertVisible && (
        <div className={`alert ${isAlertVisible ? 'alert-show' : 'alert-hide'}`} style={{ backgroundColor: alertBackground }}>
          {alert}
        </div>
      )}

      {openModal && (
        <div className={`modal-overlay-web ${isClosing ? "fade-out" : ""}`}>
          {ticket_type !== "details" ? (
            <div
              className={`modal-web ${isClosing ? "modalOut" : "modalIn"}`}
              onAnimationEnd={() => {
                if (isClosing) {
                  setOpenModal(false);
                  setIsClosing(false);
                }
              }}
            >
              <CloseOutlinedIcon onClick={handleCloseModal} className="close-modal-btn" />

              <h2>Confirm Ticket Purchase</h2>
              <p>Ticket Type: {ticket_type}</p>
              <p>Price: {ticketPrice === 0 ? "Free" : `$${ticketPrice}`}</p>

              {ticketPrice > 0 && (
                <div className="payment-options">
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      value="Card"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Pay via Card
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      value="Bank Transfer"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Pay via Bank Transfer
                  </label>
                </div>
              )}

              <button onClick={handlePayment} disabled={isProcessing}>
                {isProcessing ? "Processing..." : ticketPrice === 0 ? "Get Free Ticket" : "Proceed to Pay"}
              </button>
            </div>
          ) : (
            <CircularProgress />
          )}
        </div>
      )}
    </>
  );
};

export default Modal;

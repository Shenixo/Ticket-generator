import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";
import { ticketType } from "../Field/Field";
import { useTicketContext } from "../../Context/TicketContext";
import { CircularProgress } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Button from "../Button/Button";

const Modal = () => {
  const [isClosing, setIsClosing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(""); 
  const [alert, setAlert] = useState("");  
  const [alertType, setAlertType] = useState(""); 
  const [isProcessing, setIsProcessing] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const { openModal, activeTab, setOpenModal, setFormSubmitted } = useTicketContext();
  const navigate = useNavigate();

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
      setIsAlertVisible(true);  
      setTimeout(() => {
        setIsAlertVisible(false); 
      }, 2000);
    } else if (paymentMethod) {
      setIsProcessing(true);
      setTimeout(() => {
        setAlert(`Payment successful via ${paymentMethod}`);
        setAlertType("success");
        setIsAlertVisible(true);
        setIsProcessing(false);
        setTimeout(() => {
          setIsAlertVisible(false);
        }, 2000);
        setTimeout(() => {
          setOpenModal(false)
          navigate("./my_tickets");
          // setFormSubmitted(true)
        }, 3000);
      }, 2000);
    } else {
      setAlert("Please select a payment method.");
      setAlertType("error");
      setIsAlertVisible(true);
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 2000);

    }
  };

  const alertBackground = alertType === "success" ? "#28a745" : alertType === "error" ? "#dc3545" : "transparent";
  return (
    <>
      {alert && (
        <div className={`alert ${isAlertVisible ? "alert-show" : "alert-hide"}`} style={{ backgroundColor: alertBackground }}>
          {alert}
        </div>
      )}

      {openModal && (
        <div className={`modal-overlay-web ${isClosing ? "fade-out" : ""}`}>
          {ticket_type !== "details" ? (
            <div className={`modal-web ${isClosing ? "modalOut" : "modalIn"}`} onAnimationEnd={() => {
              if (isClosing) {
                setOpenModal(false);
                setIsClosing(false);
              }
            }}>
              <CloseOutlinedIcon onClick={handleCloseModal} className="close-modal-btn" />

              <h2>Confirm Ticket Purchase</h2>
              <p>Ticket Type: {ticketType[ticket_type].type}</p>
              <p>Price: {ticketPrice === 0 ? "Free" : `$${ticketPrice}`}</p>

              {ticketPrice > 0 && (
                <div className="payment-options">
                  <label>
                    <input type="radio" name="payment" value="Card" onChange={(e) => setPaymentMethod(e.target.value)} />
                    Pay via Card.
                  </label>
                  <label>
                    <input type="radio" name="payment" value="Bank Transfer" onChange={(e) => setPaymentMethod(e.target.value)} />
                    Pay via Bank Transfer.
                  </label>
                </div>
              )}
              <Button className="back" border="1px solid #24A0B5" background="transparent" color="#24A0B5" onclickBtn={handlePayment} disabled={isProcessing}>
                {isProcessing ? "Processing..." : ticketPrice === 0 ? "Get Free Ticket" : "Proceed to Pay"}
              </Button>
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

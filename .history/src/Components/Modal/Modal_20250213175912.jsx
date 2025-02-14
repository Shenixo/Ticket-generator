import { useState } from "react";
import "./Modal.css";
import { ticketType } from "../Field/Field";
import { useTicketContext } from "../../Context/TicketContext";
import { CircularProgress } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Modal = () => {
  const [isClosing, setIsClosing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(""); 
  const []
  const [isProcessing, setIsProcessing] = useState(false); 
  const { openModal, activeTab, setOpenModal } = useTicketContext();

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
      alert("Your free ticket has been booked successfully!");
      handleCloseModal();
    } else if (paymentMethod) {
      setIsProcessing(true);
      setTimeout(() => {
        alert(`Payment successful via ${paymentMethod}`);
        setIsProcessing(false);
        handleCloseModal();
      }, 2000);
    } else {
      alert("Please select a payment method.");
    }
  };

  return (
    <>
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

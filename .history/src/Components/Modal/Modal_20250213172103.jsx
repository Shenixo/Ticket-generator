/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./Modal.css";
import { ticketType } from "../Field/Field";
import { useTicketContext } from "../../Context/TicketContext";
import { CircularProgress } from "@mui/material";

const Modal = ({ children, setOpenModal }) => {
  const [isClosing, setIsClosing, formData] = useState(false);
  const { openModal, activeTab } = useTicketContext();
  const Tabkeys = Object.entries(ticketType).map(([key]) => key);
  const ticket_type = Tabkeys.filter((tabkey) => tabkey === activeTab)[0];

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpenModal(false);
      setIsClosing(false);
    }, 300); 
  };
console.log(formData)
  useEffect(() => {
    if (!openModal) {
      document.body.style.overflow = 'auto'; 
    }
  }, [openModal]);

  return (
    <>
      {openModal && (
        <div
          className={`modal-overlay-web ${isClosing ? "fade-out" : ""}`}
        >
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
              {children}

              <button
                onClick={handleCloseModal}
                className="close-modal-btn"
              >
                Close
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

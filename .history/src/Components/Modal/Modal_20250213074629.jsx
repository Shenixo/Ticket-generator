/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Modal.css";
import {ticketType}from "../Field/Field"
import { useTicketContext } from "../../Context/TicketContext";
const Modal = ({ children, setOpenModal }) => {
  const [isClosing, setIsClosing] = useState(false);
  const { openModal } = useTicketContext()
  const Tabkeys = Object.entries(ticketType).map(([key]) => key);
    const ticket_type = Tabkeys.filter((tabkey) => tabkey === activeTab)[0];

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modal-overlay-web")) {
      setIsClosing(true);
    }
  };

  const handleAnimationEnd = () => {
    if (isClosing) {
      setOpenModal(false);
      setIsClosing(false);
    }
  };

  return (
    <>
      {openModal && (
        <div
          className={`modal-overlay-web ${isClosing ? "fade-out" : ""}`}
          onClick={handleOverlayClick}
        >
          <div
            className={`modal-web ${isClosing ? "modalOut" : "modalIn"}`}
            onAnimationEnd={handleAnimationEnd}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

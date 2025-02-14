/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./Modal.css";
import { ticketType } from "../Field/Field";
import { useTicketContext } from "../../Context/TicketContext";
import { CircularProgress } from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const Modal = ({ children }) => {
  const [isClosing, setIsClosing] = useState(false);
  const { openModal, activeTab,setOpenModal } = useTicketContext();
  const Tabkeys = Object.entries(ticketType).map(([key]) => key);
  const ticket_type = Tabkeys.filter((tabkey) => tabkey === activeTab)[0];

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpenModal(false);
      setIsClosing(false);
    }, 300); 
  };

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
              <CloseOutlinedIcon onClick={handleCloseModal} close-modal-btn/>
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

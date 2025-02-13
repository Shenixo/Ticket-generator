/* eslint-disable react/prop-types */
import Lottie from "lottie-react";
import "./Modal.css";
ottieflow-success-08-4fbb67-easey.json";

const Modal = ({ children, openModal, setOpenModal, title, text1, text2, buttonText = "", go_to = "" }) => {

  const [isClosing, setIsClosing] = useState(false);


 

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

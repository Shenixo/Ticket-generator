/* eslint-disable react/prop-types */
import Lottie from "lottie-react";
import "./Modal.css";
import { useEffect, useRef, useState } from "react";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import success from "../../../../Assets/WebsiteAssets/animations/lottieflow-success-08-4fbb67-easey.json";

const Modal = ({ children, openModal, setOpenModal, title, text1, text2, buttonText = "", go_to = "" }) => {


  useEffect(() => {
    console.log('Modal Open:', openModal);
    if (checkRef.current && openModal && isLottieReady) {
      const lottieInstance = checkRef.current.animation;

      // Ensure lottieInstance is valid before calling playSegments
      if (lottieInstance) {
        setTimeout(() => {
          console.log('Playing segments:', displayCheck);
          lottieInstance.playSegments(displayCheck, true);
        }, 300); // Adjust time for smoother control
      }
    }
  }, [openModal, isLottieReady]);

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
            <div className="lottie-div">
              <Lottie
                className="modal-icon"
                animationData={success}
                loop={false}
                lottieRef={checkRef}
                onComplete={() => setIsLottieReady(true)} // Set readiness to true once Lottie is ready
                style={{ width: 40, height: 40 }}
              />
            </div>
            <div className="modal-title">
              <h2>{title}</h2>
              <p>{text1}</p>
              <span>{text2}</span>
              <Link style={{ textDecoration: "none" }} to={go_to}>
                <Button color="#fff" background="#3567A6">
                  {buttonText}
                </Button>
              </Link>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

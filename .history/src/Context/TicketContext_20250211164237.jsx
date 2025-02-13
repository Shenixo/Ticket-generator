import { createContext, useContext, useRef, useState } from "react";
import PropTypes from "prop-types";

export const TicketContextCreated = createContext();

const TicketContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [toProceed, setToProceed] = useState(false);
  const timeoutRef = useRef(null);

  const [formData, setFormData] = useState({
    number_of_tickets: 0,
    name: "",
    email: "",
    special_request: ""
  });

  const [error, setError] = useState({
    number_of_tickets: "",
    activeTab: "",
    name: "",
    email: "",
    special_request: ""
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVerifyForm = (event) => {
    event.preventDefault();

    let newErrors = {
      number_of_tickets: "",
      activeTab: "",
      name: "",
      email: "",
      special_request: ""
    };

    if (!toProceed) {
      if (!formData.number_of_tickets) {
        newErrors.number_of_tickets = "Select number of tickets";
      }
      if (!activeTab) {
        newErrors.activeTab = "Select a ticket type";
      }
    } else {
      if (!formData.name.trim()) {
        newErrors.name = "Enter your name";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Enter your email";
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Enter a valid email address (e.g., johndoegmail.com)";
      }
      if (!formData.special_request.trim()) {
        newErrors.special_request = "This field cannot be empty";
      }
    }

    setError(newErrors);

    if (Object.values(newErrors).some((err) => err !== "")) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setError({
        number_of_tickets: "",
        activeTab: "",
        name: "",
        email: "",
        special_request: ""
      }), 3000);
      return;
    }

    setToProceed(true);
  };

  const contextValue = {
    activeTab,
    setActiveTab,
    setFormData,
    formData,
    handleFormData,
    setError,
    error,
    toProceed,
    handleVerifyForm
  };

  return (
    <TicketContextCreated.Provider value={contextValue}>
      {children}
    </TicketContextCreated.Provider>
  );
};

export const useTicketContext = () => {
  const context = useContext(TicketContextCreated);
  if (!context) {
    throw new Error(
      "useTicketContext must be used within a TicketContextProvider"
    );
  }
  return context;
};

TicketContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TicketContextProvider;

import { createContext, useContext, useRef, useState } from "react";
import PropTypes from "prop-types";

export const TicketContextCreated = createContext();
const TicketContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(null);
  const timeoutRef = useRef(null)
  const [error, setError] = useState({ number_of_tickets: "", activeTab: "" });
  const [formData, setFormData] = useState({
    number_of_tickets: 0,
  });
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value ? Number(value) : "", 
    }));
  };

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Form submitted!");
    };
  const handleVerifyForm = (event) => {
    event.preventDefault();
    let newErrors = { number_of_tickets: "", activeTab: "" }; 
    if (!formData.number_of_tickets) {
      newErrors.number_of_tickets = "Select number of tickets";
    }
    if (!activeTab) {
      newErrors.activeTab = "Select a ticket type";
    }
    setError(newErrors); 
    if (newErrors.number_of_tickets || newErrors.activeTab) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
       timeoutRef.current = setTimeout(() => setError({ number_of_tickets: "", activeTab: "" }), 3000);
      return;
    }
  }    
  const toProceed = 
  const contextValue = {
    activeTab,
    setActiveTab,
    setFormData,
    formData,
    handleFormData,
    setError,
    error,
    handleVerifyForm,
    handleSubmit
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

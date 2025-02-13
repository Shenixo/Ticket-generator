import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const TicketContextCreated = createContext();
const TicketContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [error, setError] = useState(null)
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
      let errorMessage = "";
  
      if (!formData.number_of_tickets ) {
        errorMessage = "Select number of tickets";
      } else if (!activeTab ) {
        errorMessage = "Select a ticket type";
      }
      
      if (errorMessage) {
        setError(errorMessage);
        setTimeout(() => setError(null), 3000);
        return;
      }
  
      setError("");
      handleSubmit(event);
    };
  const contextValue = {
    activeTab,
    setActiveTab,
    setFormData,
    formData,
    handleFormData,
    setError,
    error
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

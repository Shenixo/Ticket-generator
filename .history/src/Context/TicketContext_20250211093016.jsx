import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const TicketContextCreated = createContext();
const TicketContextProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState(null);
    const [formData, setFormData] = useState({
        number_of_tickets: 0
    })
  const handleFormData = (e) => {
    const [name, value] = e.target
    setFormData(prev => )
  }

  const contextValue = {
    activeTab,
      setActiveTab,
      setFormData,
      formData,
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

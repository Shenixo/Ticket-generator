import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const TicketContextCreated = createContext();
const TicketContextProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState(null);
    const [formData, setFormData] = useState({
        
    })

  const contextValue = {
    activeTab,
    setActiveTab,
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

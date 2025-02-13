import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const TicketContext = createContext(); 
const 

const TicketContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(false);

  const contextValue = {
    activeTab,
    setActiveTab,
  };

  return (
    <TicketContext.Provider value={contextValue}> 
      {children}
    </TicketContext.Provider>
  );
};

TicketContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TicketContextProvider;

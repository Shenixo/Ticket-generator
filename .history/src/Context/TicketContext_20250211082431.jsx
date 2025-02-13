import { useContext, useState } from "react"
import PropTypes from 'prop-types';

const TicketContextProvider = ({children}) => {
    const TicketContext = useContext()
    const [activeTab, setActiveTab] = useState(false)
return (
    <div>
      {children}
    </div >
  )
}
TicketContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TicketContextProvider

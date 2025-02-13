import { useContext, useState } from "react"

const TicketContextProvider = ({children}) => {
    const TicketContext = useContext()
    const [activeTab, setActiveTab] = useState(false)

  return (
    <div>
      
    </div>
  )
}

export default TicketContextProvider

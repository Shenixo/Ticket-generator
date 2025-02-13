import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Events from './Pages/Events/Events'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='events' element={<Events/>}/>
        <Route path='tickets' element={<Tickets/>}/>
        <Route path='events' element={<Events/>}/>
      </Routes>
   </div>
  )
}

export default App

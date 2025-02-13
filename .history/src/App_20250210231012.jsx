import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Events from "./Pages/Events/Events";
import Tickets from "./Pages/Tickets/Tickets";
import About from "./Pages/About/About";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

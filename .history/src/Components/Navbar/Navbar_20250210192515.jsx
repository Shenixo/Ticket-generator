import "./Navbar.css";
import Company_logo from "../../assets/Ticket-site-logo.svg";
import Button from "../Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";

const menuList = ["Events", "My Tickets", "About Project"];
const Navbar = () => {
    const [activeNav, setActiveNav] = useState(null)
    const handleNavList = (activeNavList, navIndex) => {
        if (activeNavList === menuList[])
    }
  return (
    <nav>
      <div>
        <img src={Company_logo} alt="Company's logo" />
      </div>
      <ul className="nav-list">
        {menuList.map((list, idx) => (
          <li onClick={() => handleNavList(list, idx)} key={list}>{list}</li>
        ))}
      </ul>
      <Button>
        My Tickets <ArrowForwardIcon fontSize="10" />
      </Button>
    </nav>
  );
};

export default Navbar;

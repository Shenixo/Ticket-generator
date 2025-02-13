import "./Navbar.css";
import Company_logo from "../../assets/Ticket-site-logo.svg";
import Button from "../Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuList = ["Events", "My Tickets", "About Project"];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(menuList[0]); 

  const handleNavList = (navItem) => {
    setActiveNav(navItem); 
  };

  return (
    <nav>
        <Link to="/">
        <img src={Company_logo} alt="Company's logo" />
        </Link>
      <ul className="nav-list">
        {menuList.map((list) => (
          <li
            key={list}
            onClick={() => handleNavList(list)}
            className={activeNav === list ? "active_nav" : ""} 
          >
            {list}
          </li>
        ))}
      </ul>
      <Link style={{color: "black", textDecoration}} to="/">
      <Button className="tickets">
        MY TICKETS <ArrowForwardIcon fontSize="10" />
      </Button>
      </Link>
    </nav>
  );
};

export default Navbar;

import "./Navbar.css";
import Company_logo from "../../assets/Ticket-site-logo.svg";
import Button from "../Button/Button";
const menuList = ["Events", "My Tickets", "About Project"];
import EastIcon from '@mui/icons-material/East';
const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={Company_logo} alt="Company's logo" />
      </div>
      <ul className="nav-list">
        {menuList.map((list) => (
            <li key={list}>{ list}</li>
        ))}
      </ul>
      <Button>My Tickets   </Button>
    </nav>
  );
};

export default Navbar;

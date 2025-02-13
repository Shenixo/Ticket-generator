import "./Navbar.css";
import Company_logo from "../../assets/Ticket-site-logo.svg";
import Button from "../Button/Button";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const menuList = ["Events", "My Tickets", "About Project"];

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
      <Button>My Tickets <ArrowRightIcon/>  </Button>
    </nav>
  );
};

export default Navbar;

import "./Navbar.css";
import Company_logo from "../../assets/Ticket-site-logo.svg";
import Button from "../Button/Button";
const menuList = ["Events", "My Tickets", "About Project"];
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Navbar = () => {
    const [a]
    const handleNavList = () => {

    }
  return (
    <nav>
      <div>
        <img src={Company_logo} alt="Company's logo" />
      </div>
      <ul className="nav-list">
        {menuList.map((list) => (
          <li onClick={handleNavList} key={list}>{list}</li>
        ))}
      </ul>
      <Button>
        My Tickets <ArrowForwardIcon fontSize="10" />
      </Button>
    </nav>
  );
};

export default Navbar;

import "./Navbar.css";
import Company_logo from "../../assets/Ticket-site-logo.svg";
const menuList = ["Events", "My Tickets", "About Project"]


const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={Company_logo} alt="Company's logo" />
      </div>
          <div>
              {menuList.map(list => li)}
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;

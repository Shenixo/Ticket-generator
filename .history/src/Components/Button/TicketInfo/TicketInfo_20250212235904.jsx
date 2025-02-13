import { Title } from "@mui/icons-material";
import "./TicketInfo.css";
import PropTypes from "prop-types";
const TicketInfo = () => {
  return (
    <div className="ticket-info">
      <div className="ticket-info-first">
        <div>
          <p>hello dev</p>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default TicketInfo;

const Content = ({ title, value }) => {
  return (
    <div className="content">
      <small>{title}</small>
      <p>{value}</p>
    </div>
  );
};
Content.PropTypes = {
     title: 
}

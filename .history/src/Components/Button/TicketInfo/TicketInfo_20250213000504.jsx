import { Title } from "@mui/icons-material";
import "./TicketInfo.css";
import PropTypes from "prop-types";
const TicketInfo = () => {
  return (
    <div className="ticket-info">
      <div className="ticket-info-first">
        <Content title={}/>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default TicketInfo;

const Content = ({
  title,
  value,
  borderRight = "none",
  borderLeft = "none",
  borderTop = "none",
  borderBottom = "none",
}) => {
  return (
    <div
      style={{
        borderWidth: "1px",
        borderRight: borderRight,
        borderLeft: borderLeft,
        borderTop: borderTop,
        borderBottom: borderBottom,
      }}
      className="content"
    >
      <small>{title}</small>
      <p>{value}</p>
    </div>
  );
};
Content.PropTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

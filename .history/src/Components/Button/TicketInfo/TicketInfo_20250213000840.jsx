import { Title } from "@mui/icons-material";
import "./TicketInfo.css";
import PropTypes from "prop-types";
import { useTicketContext } from "../../../Context/TicketContext";
const TicketInfo = () => {
    const {formData} = useTicketContext()
  return (
    <div className="ticket-info">
      <div className="ticket-info-first">
        <Content title="Name" value={formData.name} borderRight="1px" borderBottom="1px"/>
        <Content title="Name" value={formData.email} borderRight="1px" borderBottom="1px"/>
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
        borderColor: "#12464e",
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

import { useLocation } from "react-router-dom";
import { useTicketContext } from "../../Context/TicketContext";
import "./Progress.css";

const Progress = ({ title }) => {
  const { activeTab, formData, formSubmitted } = useTicketContext();
  const location = useLocation();

  let progress = 0;

  if (activeTab && formData.number_of_tickets > 0) {
    progress = 33;
  }

  if (formData.name && formData.email && formData.profile_upload) {
    progress = 66;
  }

  if (formSubmitted) {
    progress = 100;
  }

  let progressTitle = title;

  if (!title) {
    progressTitle = location.pathname === "/my_tickets"
      ? "Ready"
      : formData.toProceed
      ? "Attendee Details"
      : "Ticket Selection";
  }

  return (
    <div className="progress">
      <div className="progress-container">
        <h2>{progressTitle}</h2>
        <small>
          Step {progress === 33 ? "1" : progress === 66 ? "2" : "3"} / 3
        </small>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default Progress;

import { useTicketContext } from "../../Context/TicketContext";
import "./Progress.css";

const Progress = () => {
  const { activeTab, formData, formSubmitted } = useTicketContext();

  let progress = 0;
  let step = 1;

  if (activeTab && formData.number_of_tickets > 0) {
    progress = 33;
    step = 2;
  }

  if (formData.name || formData.email || formData.profile_upload) {
    progress = 66;
    step = 3;
  }

  if (formSubmitted) {
    progress = 100;
    step = 3;
  }

  const progressTitles = {
    1: "Ticket Selection",
    2: "Attendee Details",
    3: "Ready",
  };

  return (
    <div className="progress">
      <div className="progress-container">
        <h2>{progressTitles[step]}</h2>
        <small>Step {step} / 3</small>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default Progress;

import { useTicketContext } from "../../Context/TicketContext";
import "./Progress.css";

const Progress = () => {
  const { activeTab, formData, formSubmitted } = useTicketContext();

  let progress = 0;
  let step = 1;

  if (activeTab && formData.number_of_tickets > 0) {
    progress = 33;
    step = 2; // Move to next step immediately after selecting tickets
  }

  if (formData.name || formData.email || formData.profile_upload) {
    progress = 66;
    step = 3; // As soon as any attendee detail is entered, move to this step
  }

  if (formSubmitted) {
    progress = 100;
    step = 4;
  }

  // Define progress step titles
  const progressTitles = {
    1: "Ticket Selection",
    2: "Attendee Details",
    3: "Review & Confirm",
    4: "Ready",
  };

  return (
    <div className="progress">
      <div className="progress-container">
        <h2>{progressTitles[step]}</h2> {/* Dynamic title updates immediately */}
        <small>Step {step} / 4</small>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default Progress;

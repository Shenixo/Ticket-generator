import {useTicketContext} from "../../Context/TicketContext"
import "./Progress.css";


const Progress = () => {
  const { activeTab, formData, formSubmitted } = useTicketContext();

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

  return (
    <div className="progress">
      <div className="progress-container">
        <h2>Ticket Progress</h2>
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

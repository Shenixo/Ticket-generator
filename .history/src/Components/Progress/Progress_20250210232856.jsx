import "./Progress.css";
const Progress = () => {
  return (
    <div className="progress">
      <div className="progress-container"><h2>Ticket Selection</h2> 
      <small> Step 1/3</small></div>
      <span style={{background: "#0E464F"}} />
    </div>
  );
};

export default Progress;

import Card from "../../Components/Card/Card";
import Progress from "../../Components/Progress/Progress";
import "./Events.css";

const Events = () => {
  return (
    <div className="events">
      <Card background="#041e23">
        <Progress />
        {/* Apply linear gradient correctly */}
        <Card background="linear-gradient(90deg, #082228 0%, #0d3942 100%)"></Card>
      </Card>
    </div> 
  );
};

export default Events;

import Card from "../../Components/Card/Card";
import Progress from "../../Components/Progress/Progress";
import "./Events.css";
const Events = () => {
  return (
    <div className="events">
      <Card>
        <Progress />
        <Card></Card>
      </Card>
    </div> 
  );
};

export default Events;

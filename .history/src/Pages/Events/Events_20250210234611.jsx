import Card from "../../Components/Card/Card";
import Progress from "../../Components/Progress/Progress";
import "./Events.css";
const Events = () => {
  return (
    <div className="events">
      <Card background="#041e23">
        <Progress />
        <Card background="#082228" background></Card>
      </Card>
    </div> 
  );
};
 
export default Events;

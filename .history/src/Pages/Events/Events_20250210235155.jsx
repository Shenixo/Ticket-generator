import Card from "../../Components/Card/Card";
import Progress from "../../Components/Progress/Progress";
import "./Events.css";

const Events = () => {
  return (
    <div className="events">
      <Card background="#041e23">
        <Progress />
              <Card background="linear-gradient(220deg, #082228 0%, #0d3942 100%)">
                  <h1>Techember Fest &apos;&apos; 25 </h1>
                  <p>Join Us for an unforgettable e</p>
        </Card>
      </Card>
    </div> 
  );
};

export default Events;

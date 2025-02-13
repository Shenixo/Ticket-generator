import Button from "../Button/Button";
import Card from "../Card/Card";
import Field from "../Field/Field";
import "./Form.css";
import { useTicketContext } from "../../Context/TicketContext";

const Form = () => {
  const { error, setError, formData, activeTab } = useTicketContext();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };
  const handleVerifyForm = () => {
    if 
    if (!formData.number_of_tickets) setError("Select a ticket")
     else if (!activeTab) setError("Select number of tickets")
      
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field label_content="Select Ticket Type:" field="card"  />
        <Field label_content="Number of Tickets:" field="select"   />
        <Card className="button-container">
          <Button
            border="1px solid #24A0B5"
            background="transparent"
            color="#24A0B5"
          >
            Cancel
          </Button>
          <Button type="submit" onclickBtn={handleVerifyForm}  background="#24A0B5" color="#fff">
            Next
          </Button>
        </Card>
      </form>
    </div>
  );
};

export default Form;

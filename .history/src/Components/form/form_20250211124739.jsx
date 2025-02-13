import Button from "../Button/Button";
import Card from "../Card/Card";
import Field from "../Field/Field";
import "./Form.css";
import { useTicketContext } from "../../Context/TicketContext";

const Form = () => {
  const { error, handleSubmit, handleVerifyForm } = useTicketContext();

 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field label_content="Select Ticket Type:" field="card" error={error} />
        <Field
          label_content="Number of Tickets:"
          field="select"
          error={error}
        />
        <Card className="button-container">
          <Button
            border="1px solid #24A0B5"
            background="transparent"
            color="#24A0B5"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onclickBtn={handleVerifyForm}
            background="#24A0B5"
            color="#fff"
          >
            Next
          </Button>
        </Card>
      </form>
    </div>
  );
};

export default Form;

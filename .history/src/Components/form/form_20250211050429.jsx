import Button from "../Button/Button";
import Card from "../Card/Card";
import Field from "../Field/Field";
import "./Form.css";
const Form = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field label_content="Select Ticket Type:" field="card" />
        <Field label_content="Number of Tickets:" field="select" />
        <Card  className="button-container">
          <Button border="1px solid #24A0B5" background="transparent">Cancel</Button>
          <Button>Button</Button>
        </Card>
      </form>
    </div>
  );
};

export default Form;

import Field from "../Field/Field";
import "./Form.css";
const Form = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field label_content="Select Ticket Type:" field="card" />
        <Field label_content="Number of Tickets:" field="select" />
      </form>
    </div>
  );
};

export default Form;

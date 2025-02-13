import Field from "../Field/Field";
import "./Form.css";
const Form = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field label_content="" field="select" />
      </form>
    </div>
  );
};

export default Form;

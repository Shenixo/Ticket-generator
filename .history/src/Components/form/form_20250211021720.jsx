import Field from "../Field/Field";
import "./Form.css";
const form = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field field="input" />
      </form>
    </div>
  );
};

export default form;

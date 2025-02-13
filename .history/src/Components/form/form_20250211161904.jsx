import Button from "../Button/Button";
import Card from "../Card/Card";
import Field from "../Field/Field";
import "./Form.css";
import { useTicketContext } from "../../Context/TicketContext";
const Form = () => {
  const { handleSubmit, handleVerifyForm, toProceed } = useTicketContext();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {!toProceed ? (
            <>
              <Field label_content="Select Ticket Type:" field="card" />
              <Field label_content="Number of Tickets:" field="select" />
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
            </>
          ) : (
            <div>
                <Field label_content="Enter your name:" field="input"  type="text"/>
                <Field label_content="Enter your email:" field="input"  type="email"/>
                <Field label_content="Special request?:" field="text_area" />
                <Card className="button-container">
                <Button
                  border="1px solid #24A0B5"
                  background="transparent"
                  color="#24A0B5"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  onclickBtn={handleVerifyForm}
                  background="#24A0B5"
                  color="#fff"
                >
                  Get My Free Ticket
                </Button>
              </Card>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;

import Button from "../Button/Button";
import Card from "../Card/Card";
import Field from "../Field/Field";
import "./Form.css";
import { ticketType } from "../Field/Field";
import { useTicketContext } from "../../Context/TicketContext";
const Form = () => {
  const {
    handleSubmit,
    handleVerifyForm,
    toProceed,
    setToProceed,
    handleCancelForm,
    activeTab,
    setOpenModal,
  } = useTicketContext();
  const Tabkeys = Object.entries(ticketType).map(([key]) => key);
  const ticket_type = Tabkeys.filter((tabkey) => tabkey === activeTab)[0];
  const handleSuModal = () => {
    setOpenModal(true);
    setTimeout(() => {
      setOpenModal(true);
    }, 3000);
    handleVerifyForm()
  };
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
                  onclickBtn={(e) => {
                    e.preventDefault();
                    handleCancelForm();
                  }}
                  border="1px solid #24A0B5"
                  background="transparent"
                  color="#24A0B5"
                >
                  Cancel
                </Button>
                <Button
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
              <Field
                label_content="Enter your name:"
                field="input"
                type="text"
              />
              <Field
                label_content="Enter your email:"
                field="input"
                type="email"
              />
              <Field label_content="Special request?:" field="text_area" />
              <Card className="button-container">
                <Button
                  border="1px solid #24A0B5"
                  background="transparent"
                  color="#24A0B5"
                  onclickBtn={() => setToProceed(false)}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  onclickBtn={handleModal}
                  background="#24A0B5"
                  color="#fff"
                >
                  {ticket_type !== "details"
                    ? "Purchase ticket"
                    : "Get Free Tickets"}
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

import FormComponent from "../Form/Form";
import { Slide } from "react-awesome-reveal";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-main">
          <Slide direction={"down"} delay={1e1} cascade damping={1e-1}>
            <h1 className="contact-main-text">Contact</h1>
          </Slide>
        </div>
      </div>
      <FormComponent />
    </>
  );
};

export default Contact;

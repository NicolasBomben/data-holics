import FormComponent from "../Form/Form";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-main">
          <h1 className="contact-main-text">Contact</h1>
        </div>
      </div>
      <FormComponent/>
    </>
  );
};

export default Contact;
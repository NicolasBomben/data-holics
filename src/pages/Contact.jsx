import React from "react";
import Form from "../components/Form";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={`${styles.contactContainer}`}>
        <div className={`${styles.contactMain}`}>
          <h1 className={`${styles.contactMainText}`}>Contact</h1>
        </div>
      </div>
      <Form />
    </>
  );
};

export default Contact;

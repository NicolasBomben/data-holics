import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ToastContainer, toastSucces} from "../../utils/toast"

import Input from "./Input";


import "./form.css";
import "./formQuerys.css";

const Form = () => {
  
  //emailjs
  const form = useRef();
  const serviceId = 'service_v8a3vuo';
  const templateId = 'template_42jndtj';
  const publicKey = 'VTFHGW1HwlxrzSLu4';

  //states
  const [valueName, setName] = useState('');
  const [valueEmail, setEmail] = useState('');
  const [valueEmpresa, setEmpresa] = useState('');
  const [valueIndustria, setIndustria] = useState('');
  const [valueCargo, setCargo] = useState('');
  const [valueTextarea, setTextarea] = useState('');

  const inputValues = [
    valueName, valueEmail, valueEmpresa, valueIndustria, valueCargo, valueTextarea
  ]

  const sendEmail = (e) => {
    e.preventDefault();
    let i = 0;

    inputValues.forEach(element => {
      if (element === '') {
        i++
      }

    });

    if (i) {
      console.log("Faltan completar campos")
    } else {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
          toastSucces();
        }, (error) => {
          console.log(error);
        });
    }
    setName('')
    setEmail('')
    setEmpresa('')
    setIndustria('')
    setCargo('')
    setTextarea('')
  };


  return (
    <section className="form-section">

      <form ref={form} onSubmit={sendEmail} className="form-container">

        <div className="form-box">
        <Input type="text" name="user_name" placeholder="Name" setState={setName} state={valueName} />
          <Input type="email" name="user_email" placeholder="Email" setState={setEmail} state={valueEmail} />
          <Input type="text" name="user_business" placeholder="Company" setState={setEmpresa} state={valueEmpresa} />
          <Input type="text" name="user_industry" placeholder="Industry" setState={setIndustria} state={valueIndustria} />
          <Input type="text" name="user_role" placeholder="Charge" setState={setCargo} state={valueCargo} />
        </div>
        <div className="form-box">
        <Input className="text-area" type="message" name="user_message" placeholder="Leave us your message" setState={setTextarea} state={valueTextarea}/>
          <button type="submit" className="btn-submit">
            Send
          </button>
        </div>
      </form>
      <ToastContainer/>
    </section>
  );
};

export default Form;

import React from 'react';
import style from "../styles/Form.module.css";

const Form = () => {

  //states de inputs.
  //emial js.
  //prevent default.

  return (
    <section className={style.formSection}>

    <h2 className={style.contactText}>Aca va un subtitulo </h2>

    <form className={style.formContainer}>
      <div className="form-box">
        <input type="text" name="user_name" placeholder="Nombre y apellido"  />
        <input type="email" name="user_email" placeholder="Email"  />
        <input type="text" name="user_business" placeholder="Empresa"  />
        <input type="text" name="user_industry" placeholder="Industria" />
        <input type="text" name="user_role" placeholder="Cargo" />
      </div>
      <div className="form-box">
        <input type="message" name="user_message" className={style.textArea} />
        <button type="submit" className={style.btnSubmit}>
          Enviar
        </button>
      </div>
    </form>


  </section>
    )
}

export default Form
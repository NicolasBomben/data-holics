import "./form.css";
import "./formQuerys.css";

const Form = () => {
  //states de inputs.
  //emial js.
  //prevent default.

  return (
    <section className="form-section">
      <form className="form-container">
        <div className="form-box">
          <input type="text" name="user_name" placeholder="Nombre y apellido" />
          <input type="email" name="user_email" placeholder="Email" />
          <input type="text" name="user_business" placeholder="Empresa" />
          <input type="text" name="user_industry" placeholder="Industria" />
          <input type="text" name="user_role" placeholder="Cargo" />
        </div>
        <div className="form-box">
          <textarea type="message" name="user_message" className="text-area">Leave us your message</textarea>
          <button type="submit" className="btn-submit">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

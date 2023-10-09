import { useState } from "react";
//components
import ModalBasics from "../Modals/ModalBasics";
import ModalAdvanced from "../Modals/ModalAdvanced";
import ModalFull from "../Modals/ModalFull";
//assets
import ServicesOne from "../../assets/services1.jpg";
import ServicesTwo from "../../assets/services5.jpg";
import ServicesThree from "../../assets/services4.jpg";
//style
import "./services.css";
import "./servicesQuerys.css";

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalAdvanced, setShowModalAdvanced] = useState(false);
  const [showModalFull, setShowModalFull] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const openModalAdvanced = () => {
    setShowModalAdvanced(true);
  };

  const openModalFull = () => {
    setShowModalFull(true);
  };

  return (
    <section className="services-container">
      <div className="services-title-container">
        <h1 className="services-title">Our services</h1>
      </div>

      <div className="title-container">
        <h2 className="services-title-secondary">
          Analytics & Artificial intelligence for your business.
          <br />
          Unsleash the power of your data whit Machine Learning and Analytics.
        </h2>
      </div>

      {/*Basics*/}
      <div className="services-card-container">
        <div className="card-content">
          <h3 className="card-title">Basics Analytics</h3>
          <div className="card-image">
            <img
              src={ServicesOne}
              alt="basics-analytics"
              className="img-services"
            />
          </div>
          <button onClick={openModal} className="card-button">
            Know More
          </button>
          {showModal && <ModalBasics setShowModal={setShowModal} />}
        </div>

        {/*Advanced*/}
        <div className="card-content">
          <h3 className="card-title">Advanced Analytics</h3>
          <div className="card-image">
            <img
              src={ServicesTwo}
              alt="advanced-analytics"
              className="img-services"
            />
          </div>
          <button onClick={openModalAdvanced} className="card-button">
            Know More
          </button>
          {showModalAdvanced && (
            <ModalAdvanced setShowModalAdvanced={setShowModalAdvanced} />
          )}
        </div>

        {/*Full*/}
        <div className="card-content">
          <h3 className="card-title">Full Analytics</h3>
          <div className="card-image">
            <img
              src={ServicesThree}
              alt="full-analytics"
              className="img-services"
            />
          </div>
          <button onClick={openModalFull} className="card-button">
            Know More
          </button>
          {showModalFull && <ModalFull setShowModalFull={setShowModalFull} />}
        </div>
      </div>
    </section>
  );
};

export default Services;

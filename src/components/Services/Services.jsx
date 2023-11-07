import { useState } from "react";
import { Slide } from "react-awesome-reveal";
//components
import ModalBasics from "../Modals/ModalBasics";
import ModalAdvanced from "../Modals/ModalAdvanced";
import ModalFull from "../Modals/ModalFull";
//assets
import BasicsAnalytics from "../../assets/basics.jpg";
import AdvancedAnalytics from "../../assets/advanced.jpg";
import FullAnalytics from "../../assets/full.jpg";
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
        <Slide direction={"down"} delay={1e1} cascade damping={1e-1}>
          <h1 className="services-title">Services</h1>
        </Slide>
      </div>

      <div className="title-container">
        <h2 className="services-title-secondary">
          Analytics & Artificial intelligence for your business.
          <br />
          Unleash the power of your data with Machine Learning and Analytics.
        </h2>
      </div>

      {/*Basics*/}
      <div className="services-card-container">
        <div className="card-content">
          <h3 className="card-title">Basics Analytics</h3>
          <div className="card-image">
            <img
              src={BasicsAnalytics}
              alt="basics-analytics"
              className="img-services"
            />
          </div>
          <button onClick={openModal} className="card-button">
            Learn More
          </button>
          {showModal && <ModalBasics setShowModal={setShowModal} />}
        </div>

        {/*Advanced*/}
        <div className="card-content">
          <h3 className="card-title">Advanced Analytics</h3>
          <div className="card-image">
            <img
              src={AdvancedAnalytics}
              alt="advanced-analytics"
              className="img-services"
            />
          </div>
          <button onClick={openModalAdvanced} className="card-button">
            Learn More
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
              src={FullAnalytics}
              alt="full-analytics"
              className="img-services"
            />
          </div>
          <button onClick={openModalFull} className="card-button">
            Learn More
          </button>
          {showModalFull && <ModalFull setShowModalFull={setShowModalFull} />}
        </div>
      </div>
    </section>
  );
};

export default Services;

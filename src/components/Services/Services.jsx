import { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import ModalBasics from "../Modals/ModalBasics";
import ModalAdvanced from "../Modals/ModalAdvanced";
import ModalFull from "../Modals/ModalFull";
import BasicsAnalytics from "../../assets/basics.jpg";
import AdvancedAnalytics from "../../assets/advanced.jpg";
import FullAnalytics from "../../assets/full.jpg";
import "./services.css";
import "./servicesQuerys.css";

const Services = () => {
  const [selectedModal, setSelectedModal] = useState(null);

  const openModal = (modal) => {
    setSelectedModal(modal);
  };

  const closeModals = () => {
    setSelectedModal(null);
  };

  // Agregar un manejador de eventos para la tecla Escape
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        closeModals();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

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

      <div className="services-card-container">

        {/*Basics*/}
      <div className="card-content">
        <h3 className="card-title">Basics Analytics</h3>
        <div className="card-image">
          <img src={BasicsAnalytics} alt="basics-analytics" className="img-services" />
        </div>
        <button onClick={() => openModal('basics')} className="card-button">
          Learn More
        </button>
        {selectedModal === 'basics' && <ModalBasics setShowModal={closeModals} />}
      </div>

      {/*Advanced*/}
      <div className="card-content">
        <h3 className="card-title">Advanced Analytics</h3>
        <div className="card-image">
          <img src={AdvancedAnalytics} alt="advanced-analytics" className="img-services" />
        </div>
        <button onClick={() => openModal('advanced')} className="card-button">
          Learn More
        </button>
        {selectedModal === 'advanced' && <ModalAdvanced setShowModalAdvanced={closeModals} />}
      </div>

      {/*Full*/}
      <div className="card-content">
        <h3 className="card-title">Full Analytics</h3>
        <div className="card-image">
          <img src={FullAnalytics} alt="full-analytics" className="img-services" />
        </div>
        <button onClick={() => openModal('full')} className="card-button">
          Learn More
        </button>
        {selectedModal === 'full' && <ModalFull setShowModalFull={closeModals} />}
      </div>

      </div>

      
    </section>
  );
};

export default Services;

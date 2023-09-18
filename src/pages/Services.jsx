import { useState } from "react";
//components
import ModalBasics from "../components/Modals/ModalBasics";
import ModalAdvanced from "../components/Modals/ModalAdvanced";
import ModalFull from "../components/Modals/ModalFull";
//style
import styles from "../styles/Services.module.css";

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalAdvanced, setShowModalAdvanced] = useState(false);
  const [ showModalFull, setShowModalFull] = useState(false);

  const openModal = () => {
    setShowModal(true)
  }

  const openModalAdvanced = () => {
    setShowModalAdvanced(true)
  }

  const openModalFull = () => {
    setShowModalFull(true)
  }

  return (
    <section className={styles.servicesContainer}>
      <div className={styles.servicesTitleContainer}>
        <h1 className={styles.servicesTitle}>Our services</h1>
      </div>

      <h2 className={styles.servicesTitleSecondary}>
        Analytics & Artificial intelligence for your business.
      </h2>
      <span className={styles.servicesTitleSpan}>
        Unsleash the power of your data whit Machine Learning and Analytics.
      </span>

      {/*Basics*/}
      <div className={styles.servicesCardContainer}>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>Basics Analytics</h3>
          <div className={styles.cardImage}>Falta imagen</div>
          <button onClick={openModal} className={styles.cardButton} >Know More</button>
          {showModal && <ModalBasics setShowModal={setShowModal}/>}
        </div>

         {/*Advanced*/}
         <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>Advanced Analytics</h3>
          <div className={styles.cardImage}>Falta imagen</div>
          <button onClick={openModalAdvanced} className={styles.cardButton} >Know More</button>
          {showModalAdvanced && <ModalAdvanced setShowModalAdvanced={setShowModalAdvanced}/>}
        </div>

        {/*Full*/}
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>Full Analytics</h3>
          <div className={styles.cardImage}>Falta imagen</div>
          <button onClick={openModalFull} className={styles.cardButton} >Know More</button>
          {showModalFull && <ModalFull setShowModalFull={setShowModalFull}/>}
        </div>
      </div>
    </section>
  );
};

export default Services;

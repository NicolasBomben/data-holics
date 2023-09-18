import styles from "../../styles/Modal.module.css";

const Modal = ( {setShowModal} ) => {

  const closeModal = () => {
    setShowModal(false)
  }

  return (
      <div className={`${styles.modal}`}>
        <div className={`${styles.modalContent}`}>
          <div className={`${styles.modalHeader}`}>
            <h4 className={`${styles.modalTitle}`}>Basics Analytics</h4>
          </div>
          <div className={`${styles.modalBody}`}>
            <ul className={styles.bodyList}>
              <li className={styles.listItems}>Reunion de diagnostico</li>
              <li className={styles.listItems}>Data Review</li>
              <li className={styles.listItems}>Deliver</li>
              <h3 className={styles.pricing}>Starting from: $599,99</h3>
            </ul>
          </div>
          <div className={`${styles.modalFooter}`}>
            <button onClick={closeModal} className={styles.button}>Cerrar</button>
            <button className={styles.button}>Contact Us</button>
          </div>
        </div>
      </div>
    
  );
};

export default Modal;

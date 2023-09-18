
import styles from "../../styles/Modal.module.css";

const ModalFull = ( {setShowModalFull} ) => {
 
  const closeModalFull = () => {
    setShowModalFull(false)
  }

  return (
    <div className={`${styles.modal}`}>
    <div className={`${styles.modalContent}`}>
      <div className={`${styles.modalHeader}`}>
        <h4 className={`${styles.modalTitle}`}>Full Analytics</h4>
      </div>
      <div className={`${styles.modalBody}`}>
        <ul className={styles.bodyList}>
          <li className={styles.listItems}>All included in Advanced Analytics package</li>
          <li className={styles.listItems}>Periodical meetings</li>
          <li className={styles.listItems}>Financial oportunities</li>
          <li className={styles.listItems}>Forecasting</li>
          <li className={styles.listItems}>Google Analytics</li>
          <li className={styles.listItems}>Tracking important metrics</li>
          <h3 className={styles.pricing}>Price: Contact Us</h3>
        </ul>
      </div>
      <div className={`${styles.modalFooter}`}>
        <button onClick={closeModalFull} className={styles.button}>Cerrar</button>
        <button className={styles.button}>Contact Us</button>
      </div>
    </div>
  </div>
  );
}

export default ModalFull
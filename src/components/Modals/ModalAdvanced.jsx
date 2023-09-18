
import styles from "../../styles/Modal.module.css";

const ModalAdvanced = ({setShowModalAdvanced}) => {

  const closeModalAdvanced = () => {
    setShowModalAdvanced(false)
  }

  return (
    <div className={`${styles.modal}`}>
    <div className={`${styles.modalContent}`}>
      <div className={`${styles.modalHeader}`}>
        <h4 className={`${styles.modalTitle}`}>Advanced Analytics</h4>
      </div>
      <div className={`${styles.modalBody}`}>
        <ul className={styles.bodyList}>
          <li className={styles.listItems}>All included in Basic Analytics package</li>
          <li className={styles.listItems}>Personalized insights for your business</li>
          <li className={styles.listItems}>Usin IA</li>
          <li className={styles.listItems}>Untapped opportunities</li>
          <h3 className={styles.pricing}>Starting from: $999,99</h3>
        </ul>
      </div>
      <div className={`${styles.modalFooter}`}>
        <button onClick={closeModalAdvanced} className={styles.button}>Cerrar</button>
        <button className={styles.button}>Contact Us</button>
      </div>
    </div>
  </div>
  );
}

export default ModalAdvanced
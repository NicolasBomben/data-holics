
import styles from "../styles/Services.module.css";

const Services = () => {
  return (
    <>
      <section className={`${styles.servicesContainer}`}>
        <div className={`${styles.homeBox1}`}>
          <h1 className={`${styles.servicesTitle}`}>Our Services</h1>
        </div>

        <div className={`${styles.servicesBox}`}>

          <div className={`${styles.card}`}>
            <h2 className={`${styles.cardTitle}`}>Basic Analytics</h2>
            <div className={`${styles.cardCuadrado}`}></div>
            <div className={`${styles.cardContent}`}>
              <p className={`${styles.cardText}`}>Reunion de diagnostico.</p>
              <p className={`${styles.cardText}`}>Data review.</p>
              <p className={`${styles.cardText}`}>Deliver.</p>
            </div>
          </div>

          <div className={`${styles.card}`}>
            <h2 className={`${styles.cardTitle}`}>Advanced Analytics</h2>
            <div className={`${styles.cardCuadrado}`}></div>
            <div className={`${styles.cardContent}`}>
              <p className={`${styles.cardText}`}>Reunion de diagnostico.</p>
              <p className={`${styles.cardText}`}>Data review.</p>
              <p className={`${styles.cardText}`}>Deliver.</p>
              <p className={`${styles.cardText}`}>Seguimiento continuo.</p>
              <p className={`${styles.cardText}`}>Actualizacion de tabas.</p>
            </div>
          </div>

          <div className={`${styles.card}`}>
            <h2 className={`${styles.cardTitle}`}>Basic Analytics</h2>
            <div className={`${styles.cardCuadrado}`}></div>
            <div className={`${styles.cardContent}`}>
              <p className={`${styles.cardText}`}>Todo lo anterior.</p>
              <p className={`${styles.cardText}`}>Reuniones periodicas.</p>
              <p className={`${styles.cardText}`}>Mayor cercania al cliente.</p>
              <p className={`${styles.cardText}`}>Posiblemente conseguirles un DS.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Services;

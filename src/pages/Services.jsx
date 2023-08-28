import { services } from "../data/data";
import styles from "../styles/Services.module.css";

const Services = () => {
  return (
    <>
      <section className={`${styles.servicesContainer}`}>
        <div className={`${styles.servicesTitleContainer}`}>
          <h1 className={`${styles.servicesTitle}`}>Our services</h1>
        </div>

        <div className={`${styles.servicesCardContainer}`}>
          {services.map((services, index) => {
            return (
              <>
                <div className={`${styles.cardContent}`} key={index}>
                  <h3 className={`${styles.cardTitle}`}>
                    {services.title}
                  </h3>
                  <div className={`${styles.cardImage}`}>Falta imagen</div>
                  <button className={`${styles.cardButton}`}>Know More</button>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;

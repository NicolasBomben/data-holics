import { services } from "../data/data";
import styles from "../styles/Services.module.css";

const Services = () => {
  return (
    <>
      <section className={`${styles.servicesContainer}`}>

        <div className={`${styles.mainContainer}`}>
          <h1 className={`${styles.servicesTitle}`}>
              Our services
          </h1>
        </div>

        <div className={`${styles.servicesCardContainer}`}>
          {services.map((services, index)=> {
            return(
              <>
                <div className={`${styles.cardContent}`}key={index}>
                    <span className={`${styles.cardTitle}`}>
                      {services.title}
                    </span>
                    <div className={`${styles.cardImage}`}>

                    </div>
                    <span className={`${styles.cardText}`}>
                      {services.text}
                    </span>
                  </div>

              </>
            )

          })

          }
        </div>

       
      </section>
    </>
  );
};

export default Services;

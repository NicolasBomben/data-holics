import { people } from "../data/data";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <section className={`${styles.aboutContainer}`}>
        <div className={`${styles.aboutMainContainer}`}>
          <h1 className={`${styles.aboutMainTitle}`}>About Us</h1>
        </div>

        <div className={`${styles.aboutUsContainer}`}>
          <div className={`${styles.cardAbout}`}>
            <h2 className={`${styles.aboutTitle}`}>Mission</h2>
            <p className={`${styles.aboutText}`}>
              Our mission is to help small businesses thrive by providing them
              with powerful data analytics tools and services that are
              affordable and easy to use. We believe that every small business
              should have access to the same level of data-driven insights that
              larger corporations enjoy. By leveraging our expertise in data
              analytics, we empower small businesses to make informed decisions
              that drive growth and increase profitability. We are committed to
              delivering exceptional value and unparalleled support to our
              clients, so they can achieve their business goals and compete in
              today data-driven economy.
            </p>
            <h2 className={`${styles.aboutTitle}`}>Vision</h2>
            <p className={`${styles.aboutText}`}>
              Our vision is to be the leading data analytics company for small
              businesses, known for our innovation, expertise, and commitment to
              helping our clients succeed. We see a future where every small
              business has access to the insights they need to make informed
              decisions and drive growth. We are dedicated to developing
              cutting-edge data analytics tools and services that are
              specifically designed for small businesses, making it easy and
              affordable for them to unlock the full potential of their data. We
              strive to build long-term relationships with our clients based on
              trust, transparency, and exceptional value. Through our efforts,
              we aim to be a catalyst for small business growth, driving
              positive economic impact in communities across the globe.
            </p>
          </div>
        </div>

        <div className={`${styles.peopleContainer}`}>
          {people.map((people, index) => {
            return (
              <>
                <div className={`${styles.peopleContent}`} key={index}>
                  <div className={`${styles.peopleImage}`}>
                    <img src="" alt="" />
                  </div>
                  <h3 className={`${styles.peopleTitle}`}>{people.title}</h3>
                  <p className={`${styles.peopleText}`}>{people.text}</p>
                  <p className={`${styles.peoplePhone}`}>{people.telefono}</p>
                  <p className={`${styles.peopleEmail}`}>{people.mail}</p>
                  <span className={`${styles.peopleLinkedIn}`}>LinkedInd</span>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;

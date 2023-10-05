//styles
import styles from "../styles/About.module.css";

const About = () => {

  const dataAbout = [
    {
      id: 1,
      title: "Rodrigo Senabre",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat nibh nisl, sodales elementum augue rutrum at. Vivamus laoreet urna ac quam porttitor, vel scelerisque sapien sagittis. Duis non pharetra nisi. Suspendisse fermentum nisi vitae ligula feugiat, sit amet volutpat odio venenatis. Nulla ultrices lectus risus, eget faucibus leo semper sed. Vivamus tincidunt vitae urna non pellentesque. Aenean odio sem, porttitor eu tortor ac, malesuada eleifend elit. Etiam laoreet finibus tellus id vulputate. Cras nibh tortor, lobortis quis mollis vel, tempor commodo risus. Etiam dignissim mauris ac tortor consequat semper rutrum ac magna. Donec ac leo ultrices, aliquet massa et, viverra mi. Vivamus finibus posuere ultricies. Cras lobortis pellentesque tortor nec egestas. Quisque blandit tempus lacus, eu fringilla sem sagittis sit amet. Nam eget euismod neque. Morbi vel eros condimentum, laoreet sem eget, volutpat arcu.",
      telefono: "11454524232",
      mail: "rodrigo@algo.com.ar",
    },
    {
      id: 2,
      title: "Martin Urtubey",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat nibh nisl, sodales elementum augue rutrum at. Vivamus laoreet urna ac quam porttitor, vel scelerisque sapien sagittis. Duis non pharetra nisi. Suspendisse fermentum nisi vitae ligula feugiat, sit amet volutpat odio venenatis. Nulla ultrices lectus risus, eget faucibus leo semper sed. Vivamus tincidunt vitae urna non pellentesque. Aenean odio sem, porttitor eu tortor ac, malesuada eleifend elit. Etiam laoreet finibus tellus id vulputate. Cras nibh tortor, lobortis quis mollis vel, tempor commodo risus. Etiam dignissim mauris ac tortor consequat semper rutrum ac magna. Donec ac leo ultrices, aliquet massa et, viverra mi. Vivamus finibus posuere ultricies. Cras lobortis pellentesque tortor nec egestas. Quisque blandit tempus lacus, eu fringilla sem sagittis sit amet. Nam eget euismod neque. Morbi vel eros condimentum, laoreet sem eget, volutpat arcu.",
      telefono: "11454524232",
      mail: "martin@algo.com.ar",
    },
  ];

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
          {dataAbout.map( dataAbout => {
            return (
              <>
                <div className={`${styles.peopleContent}`} key={dataAbout.id}>
                  <div className={`${styles.peopleImage}`}>
                    <img src="" alt="" />
                  </div>
                  <h3 className={`${styles.peopleTitle}`}>{dataAbout.title}</h3>
                  <p className={`${styles.peopleText}`}>{dataAbout.text}</p>
                  <p className={`${styles.peoplePhone}`}>{dataAbout.telefono}</p>
                  <p className={`${styles.peopleEmail}`}>{dataAbout.mail}</p>
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

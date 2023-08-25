import { home } from "../data/data.js";
import styles from "../styles/Home.module.css";
import { Slide } from "react-awesome-reveal";
import Animation from "../components/Animation.jsx";
import Development from "../assets/developement.jpg";
import Analytics from "../assets/analytics.jpg";
import Management from "../assets/management.jpg";

const Home = () => {
  return (
    <>
      <section className={`${styles.home}`}>

        <Animation/>

        <div className={`${styles.homeBox3}`}>
          <h2 className={`${styles.homeTitleSecondary}`}>
            Empowering you with data intelligence
          </h2>
          <p className={`${styles.homeText3}`}>
            As a small or medium-sized business owner, you know adapting quickly
            to changing market conditions is essential for success. That`s where
            we come in.
          </p>
          <p className={`${styles.homeText3}`}>
            At our company, we specialize in leveraging the latest in machine
            learning technology to help businesses like yours eliminate
            unnecessary manual tasks to improve productivity and develop data
            strategies to make your decision-making process more efficient and
            data-driven.
          </p>
          <p className={`${styles.homeText3}`}>
            We work together to design and implement custom tech solutions that
            have a real impact on your bottom line. With our expertise in
            machine learning, we can help you make smarter decisions and stay
            ahead of the competition. Contact us today to see how we can help
            your business grow.
          </p>
        </div>

        <div className={`${styles.homeBox4}`}>
          {home.map((home, index) => {
            return (
              <>
                <Slide delay={1e2} cascade damping={1e-1}>
                  <div className={`${styles.homeItem}`} key={index}>
                    <span className={`${styles.homeImg}`}></span>
                    <h3 className={`${styles.homeTitle}`}>{home.title}</h3>
                    <p className={`${styles.homeText}`}>{home.text}</p>
                  </div>
                </Slide>
              </>
            );
          })}
        </div>

        <div className={`${styles.homeBox5}`}>
          <h4 className={`${styles.understandTitle}`}>Understand</h4>
          <p className={`${styles.understandText}`}>
            We want to fully understand what are your business data needings,
            your challenges, and your goals.
          </p>
          <h3 className={`${styles.understandTitleSecondary}`}>
            We can support:
          </h3>
          <div className={`${styles.understandItems}`}>
            <div className={`${styles.understandItem}`}>
              <h3 className={`${styles.supportText}`}>Development</h3>
              <img src={Development} alt="developement-picture"/>
            </div>
            <div className={`${styles.understandItem}`}>
              <h3 className={`${styles.supportText}`}>Data and Analytics</h3>
              <img src={Analytics} alt="analytics-picture"/>
            </div>
            <div className={`${styles.understandItem}`}>
              <h3 className={`${styles.supportText}`}>Project Management</h3>
              <img src={Management} alt="analytics-picture"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

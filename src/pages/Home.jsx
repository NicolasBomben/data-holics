//data

//styles
import styles from "../styles/Home.module.css";
//animations
import { Slide } from "react-awesome-reveal";
import Animation from "../components/Animation.jsx";
import Development from "../assets/developement.jpg";
import Analytics from "../assets/analytics.jpg";
import Management from "../assets/management.jpg";


const Home = () => {
  //data
  const dataHome = [
    {
      id: 1,
      img: "../../public/challengeAzul.png",
      title: "DIAGNOSIS",
      text: "Your Challenges, Our Priority. We invest time to deeply understand your unique obstacles and aspirations, setting the stage for tailored solutions that work.",
    },
    {
      id: 2,
      img: "../../public/embededAzul.png",
      title: "ANALYSIS",
      text: "Unlocking Insights for Success. We dig deep into your data and operations, turning complex information into actionable strategies that align with your goals.",
    },
    {
      id: 3,
      img: "../../public/growtAzul.png",
      title: "SOLUTIONS",
      text: "Custom-Crafted for Your Success. Our expertly designed solutions tackle your specific challenges head-on, providing you with the tools you need to achieve your goals effortlessly.",
    },
    {
      id: 4,
      img: "../../public/solutionsAzul.png",
      title: "IMPLEMETATION",
      text: "Seamless Execution, Real Results. We don't just design solutions; we make them a reality in your business operations, ensuring a smooth transition and immediate impact on your goals.",
    },
  ];

  return (
    <>
      <section className={styles.home}>
        <Animation />

        <div className={styles.homeBox3}>
          <h2 className={styles.homeTitleSecondary}>
            Empowering you with AI.
          </h2>
          <p className={styles.homeText3}>
            As a small or medium-sized business owner, navigating rapidly
            changing market conditions can be challenging. That's where{" "}
            <b>Dataholics</b> comes in your partner in agile business
            transformation.
          </p>
          <p className={styles.homeText3}>
            At Dataholics, we're not just experts;{" "}
            <b>we're your productivity catalysts.</b> Utilizing advanced Machine
            Learning algorithms, we automate time-draining tasks like data entry
            and customer segmentation, so your team can focus on what really
            matters. But that's not all. Our data strategies fine-tune your
            decision-making process, ensuring it's both efficient and backed by
            data-driven insights.
          </p>
          <p className={styles.homeText3}>
            Why settle for keeping up with the competition when you can stay
            ahead? Collaborate with us to create custom technology solutions
            that not only drive your profits but also give you a competitive
            edge.{" "}
            <b>
              Contact us today and let's fuel your business growth together.
            </b>
          </p>
        </div>

        <div className={styles.homeBox4}>
          {dataHome.map( dataHome => {
            return (
              <>
                <Slide delay={1e2} cascade damping={1e-1}>
                  <div className={styles.homeItem} key={dataHome.id}>
                    <img className={styles.homeImg} src={dataHome.img} alt="home-imagenes"/>
                    <h3 className={styles.homeTitle}>{dataHome.title}</h3>
                    <p className={styles.homeText}>{dataHome.text}</p>
                  </div>
                </Slide>
              </>
            );
          })}
        </div>

        <div className={styles.homeBox5}>
          <h4 className={styles.understandTitle}>Understand</h4>
          <p className={styles.understandText}>
            We want to fully understand what are your business data needings,
            your challenges, and your goals.
          </p>
          <h3 className={styles.understandTitleSecondary}>
            We can support:
          </h3>
          <div className={styles.understandItems}>
            <div className={styles.understandItem}>
              <h3 className={styles.supportText}>Development</h3>
              <img src={Development} alt="developement-picture" />
            </div>
            <div className={styles.understandItem}>
              <h3 className={styles.supportText}>Data and Analytics</h3>
              <img src={Analytics} alt="analytics-picture" />
            </div>
            <div className={styles.understandItem}>
              <h3 className={styles.supportText}>Project Management</h3>
              <img src={Management} alt="analytics-picture" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

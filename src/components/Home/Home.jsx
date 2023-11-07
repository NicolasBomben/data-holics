//styles
import "./home.css";
import "./homeQuerys.css";

//animations
import { Slide } from "react-awesome-reveal";
import Animation from "./Animation.jsx";
//assets
import Development from "../../assets/development.jpg";
import Analytics from "../../assets/analytics.jpg";
import Management from "../../assets/management.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  //data
  const dataHome = [
    {
      id: 1,
      img: "/challengeAzul.png",
      title: "DIAGNOSIS",
      subTitle: "Your Challenges, Our Priority.",
      text: "We invest time to deeply understand your unique obstacles and aspirations, setting the stage for tailored solutions that work.",
    },
    {
      id: 2,
      img: "/embededAzul.png",
      title: "ANALYSIS",
      subTitle: "Unlocking Insights for Success.",
      text: "We dig deep into your data and operations, turning complex information into actionable strategies that align with your goals.",
    },
    {
      id: 3,
      img: "/growtAzul.png",
      title: "SOLUTIONS",
      subTitle: "Custom-Crafted for Your Success.",
      text: "Our expertly designed solutions tackle your specific challenges head-on, providing you with the tools you need to achieve your goals effortlessly.",
    },
    {
      id: 4,
      img: "/solutionsAzul.png",
      title: "IMPLEMENTATION",
      subTitle: "Seamless Execution, Real Results.",
      text: "We don't just design solutions; we make them a reality in your business operations, ensuring a smooth transition and immediate impact on your goals.",
    },
  ];

  return (
    <>
      <section className="home-section">
        <Animation />

        <div className="container-text">
          <h2 className="home-title">Empowering you with AI.</h2>
          <p className="home-text">
            As a small or medium-sized business owner, navigating rapidly
            changing market conditions can be challenging. That's where{" "}
            <b>Dataholics</b> comes in as your partner in agile business
            transformation.
          </p>
          <p className="home-text">
            At Dataholics, we're not just experts;{" "}
            <b>we're your productivity catalysts.</b> Utilizing advanced Machine
            Learning algorithms, we automate time-draining tasks like data entry
            and customer segmentation, so your team can focus on what really
            matters. But that's not all. Our data strategies fine-tune your
            decision-making process, ensuring it's both efficient and backed by
            data-driven insights.
          </p>
          <p className="home-text">
            Why settle for keeping up with the competition when you can stay
            ahead? Collaborate with us to create custom technology solutions
            that not only drive your profits but also give you a competitive
            edge.{" "}
            <b>
              Contact us today and let's fuel your business growth together.
            </b>
          </p>
        </div>

        <div className="card-tools-container">
          {dataHome.map((dataHome) => {
            return (
              <Slide delay={1e2} cascade damping={1e-1} key={dataHome.id}>
                <div className="card-tools-body">
                  <img
                    className="card-tools-img"
                    src={dataHome.img}
                    alt="home-imagenes"
                  />
                  <h3 className="card-tools-title">{dataHome.title}</h3>
                  <h2 className="card-tools-sub-title">{dataHome.subTitle}</h2>
                  <p className="card-tools-text">{dataHome.text}</p>
                </div>
              </Slide>
            );
          })}
        </div>

        <div className="container-supports">
          <div className="box-title-support">
            <h2 className="title-support">Understand</h2>
            <p className="text-support">
              We want to fully understand what are your business data needings,
              your challenges, and your goals.
            </p>
            <h2 className="title-support">We support</h2>
          </div>

          <div className="container-supports-imgs">
            <div className="box-supports">
              <h3 className="title-supports">Development</h3>
              <Link to="/services">
                {" "}
                <img className="img-supports" src={Development} alt="" />{" "}
              </Link>
            </div>

            <div className="box-supports">
              <h3 className="title-supports">Analytics</h3>
              <Link to="/services">
                {" "}
                <img className="img-supports" src={Analytics} alt="" />
              </Link>
            </div>

            <div className="box-supports">
              <h3 className="title-supports">Management</h3>
              <Link to="/services">
                {" "}
                <img className="img-supports" src={Management} alt="" />{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

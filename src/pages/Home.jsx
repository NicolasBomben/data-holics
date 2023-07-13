
import "./home.css";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home-box-1">
          <h1 className="home-title">
            Innovate technology
            <br />
            delivered.
          </h1>
        </div>

        <div className="home-box-2">
          <h2 className="home-title-secondary">
            Empowering you with data intelligence
          </h2>
        </div>

        <div className="home-box-3">
          <p className="home-text">
            As a small or medium-sized business owner, you know adapting quickly
            to changing market conditions is essential for success. That`s where
            we come in.
          </p>
          <p className="home-text">
            At our company, we specialize in leveraging the latest in machine
            learning technology to help businesses like yours eliminate
            unnecessary manual tasks to improve productivity and develop data
            strategies to make your decision-making process more efficient and
            data-driven.
          </p>
          <p className="home-text">
            We work together to design and implement custom tech solutions that
            have a real impact on your bottom line. With our expertise in
            machine learning, we can help you make smarter decisions and stay
            ahead of the competition. Contact us today to see how we can help
            your business grow.
          </p>
        </div>

        <div className="home-box-4">
          <div className="home-item">
            <span className="item-img"></span>
            <h3 className="item-title">CHALLENGE</h3>
            <p className="item-text">
              We take the time to really understand your challenges and your
              goals
            </p>
          </div>
          <div className="home-item">
            <span className="item-img"></span>
            <h3 className="item-title">SOLUTION</h3>
            <p className="item-text">
              We take the time to really understand your challenges and your
              goals
            </p>
          </div>
          <div className="home-item">
            <span className="item-img"></span>
            <h3 className="item-title">EMBED</h3>
            <p className="item-text">
              We work with you to embed everything into your organisations life
            </p>
          </div>
          <div className="home-item">
            <span className="item-img"></span>
            <h3 className="item-title">GROWTH</h3>
            <p className="item-text">
              We streamline your business to enable you to make better decisions
            </p>
          </div>
        </div>

        <div className="home-box-5">
            <h4 className="understand-title">Understand</h4>
              <p className="understand-text">
              We want to fully understand what are your business data needings,
              your challenges, and your goals.
              </p>
            <h3 className="understand-title-secondary">We can support:</h3>
            <div className="understand-items">
              <div className="understand-item"></div>
              <div className="understand-item"></div>
              <div className="understand-item"></div>
            </div>
        </div>

      </section>
    </>
  );
};

export default Home;

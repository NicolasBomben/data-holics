import React from "react";

import "./home.css";

const Home = () => {
  return (
    <>
      <section>

        <div className="home-main">
          <h1 className="home-title">Innovate technology
          <br/>
          delivered.
          </h1>
        </div>

        <h2 className="home-title-secondary">Empowering you with data intelligence</h2>

        <span className="arrow"></span>

        <div className="home-text-box">
        <p className="home-text">
          As a small or medium-sized
          business owner, you know adapting quickly to changing market
          conditions is essential for success. That`s where we come in.<br/>
          <br/> 
          At our
          company, we specialize in leveraging the latest in machine learning
          technology to help businesses like yours eliminate unnecessary manual
          tasks to improve productivity and develop data strategies to make your
          decision-making process more efficient and data-driven.<br/>
          <br/>
          We work
          together to design and implement custom tech solutions that have a
          real impact on your bottom line. With our expertise in machine
          learning, we can help you make smarter decisions and stay ahead of the
          competition. Contact us today to see how we can help your business
          grow.
        </p>
        </div>
        
        <div className="home-services">
          <div className="home-box">Algunos servicios con texto</div>
          <div className="home-box">Algunos servicios con texto</div>
          <div className="home-box">Algunos servicios con texto</div>
          <div className="home-box">Algunos servicios con texto</div>
      </div>

      </section>

      <section className="support-section">
      <div className="home-support">
        <h2 className="support-title">Understand</h2>
        <p className="support-text">We want to fully understand what are your business data needings, you challenges, and you goals</p>
        <h2 className="support-title-secondary">We can support</h2>
        <div className="support-box">
          <div className="box">Algunos servicios con texto</div>
          <div className="box">Algunos servicios con texto</div>
          <div className="box">Algunos servicios con texto</div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Home;

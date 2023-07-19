//style
import "./services.css";

const Services = () => {
  return (
    <>
      <section className="services-container">
        <div className="home-box-1">
          <h1 className="services-title">Our Services</h1>
        </div>

        <div className="services-box">

          <div className="card">
            <h2 className="card-title">Basic Analytics</h2>
            <div className="card-cuadrado"></div>
            <div className="card-content">
              <p className="card-text">Reunion de diagnostico.</p>
              <p className="card-text">Data review.</p>
              <p className="card-text">Deliver.</p>
            </div>
          </div>

          <div className="card">
            <h2 className="card-title">Advanced Analytics</h2>
            <div className="card-cuadrado"></div>
            <div className="card-content">
              <p className="card-text">Reunion de diagnostico.</p>
              <p className="card-text">Data review.</p>
              <p className="card-text">Deliver.</p>
              <p className="card-text">Seguimiento continuo.</p>
              <p className="card-text">Actualizacion de tabas.</p>
            </div>
          </div>

          <div className="card">
            <h2 className="card-title">Basic Analytics</h2>
            <div className="card-cuadrado"></div>
            <div className="card-content">
              <p className="card-text">Todo lo anterior.</p>
              <p className="card-text">Reuniones periodicas.</p>
              <p className="card-text">Mayor cercania al cliente.</p>
              <p className="card-text">Posiblemente conseguirles un DS.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Services;

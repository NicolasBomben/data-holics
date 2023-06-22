
//style
import "./services.css";

const Services = () => {
  return (
    <>
      <section className="main-services">
        <h1 className="main-services-title">Our Services</h1>
        <span className="main-arrow-services"></span>
      </section>

      <section className="analytics-services-container">
        <div className="analytics-services-box">
          <span className="analytics-services-title">Basic Analytics</span>
          <div className="analytics-services-img">Imagen</div>
        </div>

        <div className="analytics-services-box">
          <span className="analytics-services-title">Advanced Analytics</span>
          <div className="analytics-services-img">Imagen</div>
        </div>

        <div className="analytics-services-box">
          <span className="analytics-services-title">Full Analytics</span>
          <div className="analytics-services-img">Imagen</div>
        </div>
      </section>

      <section className="analytics-list-container">
        <div>
          <ul className="analytics-services-list">
            <li>Reunión de diagnóstico: charlamos necesidades.</li>
          </ul>
          <ul className="analytics-services-list">
            <li>
              Data review: revisamos que la data sea coherente y consistente.
            </li>
          </ul>
          <ul className="analytics-services-list">
            <li>
              Deliver: se explica como acceder a las tablas, como leer los
              KPI`s, etc.
            </li>
          </ul>
          <ul className="analytics-services-list">
            <li>
              Cada vez que se envie la data actualizada se actualizan las
              tablas.
            </li>
          </ul>
        </div>

        <div>
          <ul className="analytics-services-list">
            <li>Reunión de diagnóstico: charlamos necesidades.</li>
          </ul>
          <ul className="analytics-services-list">
            <li>
              Data review: revisamos que la data sea coherente y consistente.
            </li>
          </ul>
          <ul className="analytics-services-list">
            <li>Seguimiento continuo.</li>
          </ul>
          <ul className="analytics-services-list">
            <li>
              Cada vez que se envie la data actualizada se actualizan las
              tablas.
            </li>
          </ul>
        </div>

        <div>
          <ul className="analytics-services-list">
            <li>Todo lo anterior.</li>
          </ul>
          <ul className="analytics-services-list">
            <li>Reuniones periódicas.</li>
          </ul>
          <ul className="analytics-services-list">
            <li>Mayor cercanía al cliente.</li>
          </ul>
          <ul className="analytics-services-list">
            <li>Posiblemente conseguirles un DS.</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Services;


import "./modal.css";

const ModalFull = ( {setShowModalFull} ) => {
 
  const closeModalFull = () => {
    setShowModalFull(false)
  }

  return (
    <div className="modal">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">Full Analytics</h4>
      </div>
      <div className="modal-body">
        <ul className="body-list">
          <li className="list-items">All included in Advanced Analytics package</li>
          <li className="list-items">Periodical meetings</li>
          <li className="list-items">Financial oportunities</li>
          <li className="list-items">Forecasting</li>
          <li className="list-items">Google Analytics</li>
          <li className="list-items">Tracking important metrics</li>
          <h3 className="list-items">Price: Contact Us</h3>
        </ul>
      </div>
      <div className="modal-footer">
        <button onClick={closeModalFull} className="button">Cerrar</button>
        <button className="button">Contact Us</button>
      </div>
    </div>
  </div>
  );
}

export default ModalFull
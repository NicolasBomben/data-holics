import "./modal.css";
import React from "react";
const Modal = ( {setShowModal} ) => {

  const closeModal = () => {
    setShowModal(false)
  }

  return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Basics Analytics</h4>
          </div>
          <div className="modal-body">
            <ul className="body-list">
              <li className="list-items">Reunion de diagnostico</li>
              <li className="list-items">Data Review</li>
              <li className="list-items">Deliver</li>
              <h3 className="pricing">Starting from: $599,99</h3>
            </ul>
          </div>
          <div className="modal-footer">
            <button onClick={closeModal} className="button">Cerrar</button>
            <button className="button">Contact Us</button>
          </div>
        </div>
      </div>
    
  );
};

export default Modal;

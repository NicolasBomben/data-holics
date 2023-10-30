import "./modalBasics.css";
import IconModal from "../../assets/Success-modified.svg";
import React from "react";
const Modal = ({ setShowModal }) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="modal-basic">
      <div className="modal-content-basic">
        <div className="modal-header-basic">
          <h4 className="modal-title-basic">Basics</h4>
        </div>
        <div className="modal-body-basic">
          <span className="modal-list-basic">
            <img src={IconModal} alt="" className="icon-modal-basic" />
            <p className="modal-list-text-basic">Diagnosis session.</p>
          </span>
          <span className="modal-list-basic">
            <img src={IconModal} alt="" className="icon-modal-basic" />
            <p className="modal-list-text-basic">Data review.</p>
          </span>
          <span className="modal-list-basic">
            <img src={IconModal} alt="" className="icon-modal-basic" />
            <p className="modal-list-text-basic">Deliver.</p>
          </span>
          <h3 className="pricing-basic">Starting at: $599.99</h3>
        </div>
        <div className="modal-footer-basic">
          <button onClick={closeModal} className="button-basic">
            Close
          </button>
          <button className="button-basic">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

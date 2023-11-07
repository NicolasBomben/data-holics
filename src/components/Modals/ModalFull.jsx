import { Link } from "react-router-dom";
import IconModal from "../../assets/Success-modified.svg";
import "./modalFull.css";


const ModalFull = ({ setShowModalFull }) => {
  const closeModalFull = () => {
    setShowModalFull(false);
  };

  return (
    <div className="modal-full" >
      <div className="modal-content-full">
        <div className="modal-header-full">
          <h4 className="modal-title-full">Full</h4>
        </div>
        <div className="modal-body-full">
          <span className="modal-list-full">
            <img src={IconModal} alt="" className="icon-modal-full" />
            <p className="modal-list-text-full">
              Everything included in Advanced Analytics package.
            </p>
          </span>
          <span className="modal-list-full">
            <img src={IconModal} alt="" className="icon-modal-full" />
            <p className="modal-list-text-full">Weekly meetings.</p>
          </span>
          <span className="modal-list-full">
            <img src={IconModal} alt="" className="icon-modal-full" />
            <p className="modal-list-text-full">Financial oportunities.</p>
          </span>
          <span className="modal-list-full">
            <img src={IconModal} alt="" className="icon-modal-full" />
            <p className="modal-list-text-full">Forecasting.</p>
          </span>
          <span className="modal-list-full">
            <img src={IconModal} alt="" className="icon-modal-full" />
            <p className="modal-list-text-full">Google analytics.</p>
          </span>
          <span className="modal-list-full">
            <img src={IconModal} alt="" className="icon-modal-full" />
            <p className="modal-list-text-full">Tracking of important metrics.</p>
          </span>
          <h3 className="pricing-full">Starting at: $999.99</h3>
        </div>
        <div className="modal-footer-full">
          <button onClick={closeModalFull} className="button-full">
            Close
          </button>
          <Link to="/contact"> <button className="button-full">Contact Us</button> </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalFull;

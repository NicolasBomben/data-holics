import { Link } from "react-router-dom";
import IconModal from "../../assets/Success-modified.svg";
import "./modalAdvanced.css";

const ModalAdvanced = ({ setShowModalAdvanced }) => {
  const closeModalAdvanced = () => {
    setShowModalAdvanced(false);
  };

  return (
    <div className="modal-advanced">
      <div className="modal-content-advanced">
        <div className="modal-header-advanced">
          <h4 className="modal-title-advanced">Advanced</h4>
        </div>
        <div className="modal-body-advanced">
          <span className="modal-list-advanced">
            <img src={IconModal} alt="" className="icon-modal-advanced" />
            <p className="modal-list-text-advanced">
              Everything included in Basic Analytics package.
            </p>
          </span>
          <span className="modal-list-advanced">
            <img src={IconModal} alt="" className="icon-modal-advanced" />
            <p className="modal-list-text-advanced">Using IA.</p>
          </span>
          <span className="modal-list-advanced">
            <img src={IconModal} alt="" className="icon-modal-advanced" />
            <p className="modal-list-text-advanced">Untapped opportunities</p>
          </span>
          <h3 className="pricing-advanced">Starting at: $999.99</h3>
        </div>
        <div className="modal-footer-advanced">
          <button onClick={closeModalAdvanced} className="button-advanced">
            Close
          </button>
          <Link to="/contact"> <button className="button-advanced">Contact Us</button> </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalAdvanced;

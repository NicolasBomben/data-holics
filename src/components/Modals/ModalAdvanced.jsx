
import "./modal.css";

const ModalAdvanced = ({setShowModalAdvanced}) => {

  const closeModalAdvanced = () => {
    setShowModalAdvanced(false)
  }

  return (
    <div className="modal">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">Advanced Analytics</h4>
      </div>
      <div className="modal-body">
        <ul className="body-list">
          <li className="list-items">All included in Basic Analytics package</li>
          <li className="list-items">Personalized insights for your business</li>
          <li className="list-items">Usin IA</li>
          <li className="list-items">Untapped opportunities</li>
          <h3 className="pricing">Starting from: $999,99</h3>
        </ul>
      </div>
      <div className="modal-footer">
        <button onClick={closeModalAdvanced} className="button">Cerrar</button>
        <button className="button">Contact Us</button>
      </div>
    </div>
  </div>
  );
}

export default ModalAdvanced
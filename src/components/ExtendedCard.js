
import '../styles/Modal.css';

const ExtendedCard = ({ item, closeModal }) => {
    const handleTryOn = function () {
    window.location.href = item.appUrl
}

  return (
    <div className="modal">
      <div className="modalContent">
        <span className="closeButton" onClick={closeModal}>
          &times;
        </span>
        <div className="modalBody">
          <h2>{item.title}</h2>
          <p>{item.learnMore}</p>
        </div>
        <div className="hoverItemReadMore modal-edition" onClick={handleTryOn} >
          <span>TRY ON</span>
          <span className='animatedArrow'> {">>"} </span>
        </div>
      </div>
    </div>
  );
};

export default ExtendedCard;

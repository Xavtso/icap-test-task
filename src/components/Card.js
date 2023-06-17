import { useState } from "react";
import ExtendedCard from "./ExtendedCard";

const Card = function ({ item }) {
  const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = function () {
        setModalOpen(!modalOpen)
    }
        

  return (
    <div className={`hoverItemContainer`}>
      <div className="hoverItemContentWrapper">
        <div className="image__container">
          <img
            className="hoverItemContentImage"
            src={item.imgSrc}
            alt="card_photo"
          />
        </div>
        <div className="hoverItemContentInfo">
          <span className="hoverItemContentTags">{item.title}</span>
        </div>
        <div className="hoverItemContentTitle">
          <p className="hoverItemContentTitleText">{item.description}</p>
        </div>
      </div>
      <div className="hoverItemReadMore" onClick={toggleModal}>
        <span>READ MORE</span>
        <span> {">>"} </span>
      </div>
      {modalOpen && <ExtendedCard item={item} closeModal={toggleModal} />}
    </div>
  );
};

export default Card;

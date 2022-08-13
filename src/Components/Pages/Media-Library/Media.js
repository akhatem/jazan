import React, { useState } from "react";

export default function Media({ item }) {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="media_item">
        <img src={item} alt="image" className="img-fluid" onClick={openModal} />
      </div>
      {modal ? (
        <div className="media_modal">
          <div className="icon-close" onClick={closeModal}>
            <i className="fas fa-x"></i>
          </div>
          <div className="modal_overlay" onClick={closeModal}></div>
          <img src={item} alt="image" className="img-fluid" />
        </div>
      ) : null}
    </>
  );
}

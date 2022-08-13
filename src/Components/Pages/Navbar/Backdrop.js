import React from 'react';

const Backdrop = ({ isOpen, toggle }) => {
  return (
    <div
      className={`${isOpen ? 'backDorp backDorp--open' : 'backDorp'}`}
      onClick={toggle}
    ></div>
  );
};

export default Backdrop;

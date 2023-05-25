import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './ArrowDownIcon.css';

const ArrowDownIcon = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="arrow-container" onClick={handleScrollDown}>
    <div className="arrow-circle">
      <FontAwesomeIcon icon={faArrowDown} className="arrow-icon" />
    </div>
  </div>
  );
};

export default ArrowDownIcon;
import React, { useEffect } from 'react';

import '../../styles/Auth/Modal.scss';

const Modal = ({ open, onClose, ...props }) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <div className={`modal ${open ? 'open' : ''}`} onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__body">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;

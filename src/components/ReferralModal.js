import React from 'react';
import ReferralForm from './ReferralForm';

const ReferralModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Refer a Friend</h2>
        <ReferralForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default ReferralModal;
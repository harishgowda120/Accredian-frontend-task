import React, { useState } from 'react';
import ReferralModal from './components/ReferralModal';
import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReferralSubmit = async (formData) => {
    try {
      const response = await fetch('/api/refer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Referral submitted successfully!');
        setIsModalOpen(false); // Close the modal on success
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="App">
      <header className="hero-section">
        <h1>Refer & Earn</h1>
        <button className="refer-now-button" onClick={() => setIsModalOpen(true)}>
          Refer Now
        </button>
      </header>
      <ReferralModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleReferralSubmit}
      />
    </div>
  );
};

export default App;
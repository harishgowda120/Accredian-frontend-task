import React, { useState } from 'react';
import axios from 'axios';

const ReferralForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    courseName: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request using Axios
      const response = await axios.post('http://localhost:5000/api/refer', formData);

      // Handle success
      if (response.status === 201) {
        alert('Referral submitted successfully!');
        onSubmit(formData); // Call the onSubmit prop (if needed)
      }
    } catch (error) {
      // Handle error
      console.error('Error submitting referral:', error);
      alert('Failed to submit referral. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Your Name</label>
        <input
          type="text"
          name="referrerName"
          value={formData.referrerName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Your Email</label>
        <input
          type="email"
          name="referrerEmail"
          value={formData.referrerEmail}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Friend's Name</label>
        <input
          type="text"
          name="refereeName"
          value={formData.refereeName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Friend's Email</label>
        <input
          type="email"
          name="refereeEmail"
          value={formData.refereeEmail}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Course Name</label>
        <input
          type="text"
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ReferralForm;
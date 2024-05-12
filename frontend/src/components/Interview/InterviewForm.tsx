import React, { useState } from 'react';
import axios from 'axios';

const InterviewForm: React.FC = () => {
  const [candidateName, setCandidateName] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/interviews', { candidateName, rating }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Interview added successfully!');
      // Clear form fields
    } catch (error) {
      console.error('Interview submission error:', error);
      alert('Interview submission failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add Interview</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Candidate Name:</label>
          <input type="text" value={candidateName} onChange={(e) => setCandidateName(e.target.value)} required />
        </div>
        <div>
          <label>Rating:</label>
          <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} required />
        </div>
        <button type="submit">Submit Interview</button>
      </form>
    </div>
  );
};

export default InterviewForm;

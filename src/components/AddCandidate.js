import React, { useState } from 'react';
import './AddCandidate.css'; // Import CSS file for styling

const AddCandidate = () => {
  const [candidateInfo, setCandidateInfo] = useState({
    name: '',
    city: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandidateInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any actions with the candidateInfo here, like submitting it to a backend or displaying it.
    console.log(candidateInfo);
    // Show alert
    alert("Candidate added successfully");
    // Reset form after submission
    setCandidateInfo({
      name: '',
      city: '',
      contact: ''
    });
  };

  return (
    <div className="add-candidate-container">
      <h2>Add Candidate</h2>
      <form onSubmit={handleSubmit} className="candidate-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={candidateInfo.name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={candidateInfo.city}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={candidateInfo.contact}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AddCandidate;

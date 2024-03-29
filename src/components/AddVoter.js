import React, { useState } from 'react';
import './AddVoter.css'; 

const AddVoter = () => {
  const [voterInfo, setVoterInfo] = useState({
    name: '',
    city: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVoterInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(voterInfo);
    alert("Voter added successfully");
    setVoterInfo({
      name: '',
      city: '',
      contact: ''
    });
  };

  return (
    <div className="add-voter-body" > 
    <div className="add-candidate-container">
      <h2>Add Voter</h2>
      <form onSubmit={handleSubmit} className="candidate-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={voterInfo.name}
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
            value={voterInfo.city}
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
            value={voterInfo.contact}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default AddVoter;

import React, { useState } from 'react';
import './VotingSection.css';

const VotingSection = () => {
  const [votingInfo, setVotingInfo] = useState({
    voterId: '',
    candidateId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVotingInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(votingInfo);
    alert("Vote submitted successfully");
    setVotingInfo({
      voterId: '',
      candidateId: ''
    });
  };

  return (
    <div className="add-candidate-container">
      <h2>Vote Now</h2>
      <form onSubmit={handleSubmit} className="candidate-form">
        <div className="form-group">
          <label htmlFor="voterId">Voter ID:</label>
          <input
            type="text"
            id="voterId"
            name="voterId"
            value={votingInfo.voterId}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="candidateId">Candidate ID:</label>
          <input
            type="text"
            id="candidateId"
            name="candidateId"
            value={votingInfo.candidateId}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-button">Vote Now</button>
      </form>
    </div>
  );
};

export default VotingSection;

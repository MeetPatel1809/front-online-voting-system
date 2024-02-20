import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addcandidate">Add Candidate</Link>
        </li>
        <li>
          <Link to="/addvoter">Add Voter</Link>
        </li>
        <li>
          <Link to="/votingsection">Voting Section</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

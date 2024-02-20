import React from 'react';
import './ErrorComponent.css'; // Import CSS file for styling

const ErrorComponent = ({ message }) => {
  return (
    <div className="error-container">
      <h2>Error</h2>
      <p className="error-message">{message}</p>
    </div>
  );
};

export default ErrorComponent;

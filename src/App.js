import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AddCandidate from './components/AddCandidate';
import AddVoter from './components/AddVoter';
import VotingSection from './components/VotingSection';
import AboutUs from './components/AboutUs';
import ErrorComponent from './components/ErrorComponent';


const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route index   element={<HomePage />} />
        <Route path="/addcandidate" element={<AddCandidate />} />
        <Route path="/addvoter" element={<AddVoter />} />
        <Route path="/votingsection" element={<VotingSection />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/*" element={<ErrorComponent message="Page not found" />} />
      </Routes>
    </div>
  );
};

export default App;

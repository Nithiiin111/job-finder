// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JobDetailsPage from './pages/JobDetailsPage';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Job Finder</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<JobDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CombinedDashboard from './components/CombinedDashboard';
import InstagramCreatorDashboard from './components/InstagramCreatorDashboard';
import YouTubeCreatorDashboard from './components/YouTubeCreatorDashboard';
import XCreatorDashboard from './components/XCreatorDashboard';
import LinkedInCreatorDashboard from './components/LinkedInCreatorDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<CombinedDashboard />} />
        <Route path="/instagram" element={<InstagramCreatorDashboard />} />
        <Route path="/youtube" element={<YouTubeCreatorDashboard />} />
        <Route path="/x" element={<XCreatorDashboard />} />
        <Route path="/linkedin" element={<LinkedInCreatorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

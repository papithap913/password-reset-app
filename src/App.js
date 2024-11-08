import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PasswordResetRequest from './components/PasswordResetRequest';
import PasswordResetForm from './components/PasswordResetForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PasswordResetRequest />} />
        <Route path="/reset-password/:token" element={<PasswordResetForm />} />
      </Routes>
    </Router>
  );
}

export default App;

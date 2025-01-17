import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import BookingPage from './pages/BookingPage';
import BecomeFreelancerPage from './pages/BecomeFreelancerPage';
import FreelancerCreateAccount from './pages/FreelancerCreateAccount';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Service/:subcategory" element={<ServicePage />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/Login/*" element={<LoginPage />} />
          <Route path="/Login/SignUp" element={<SignUpPage />} />
          <Route path="/Booking" element={<BookingPage />} />
          <Route path="/BecomeFreelancer" element={<BecomeFreelancerPage />} />
          <Route path="/freelancer-create-account" element={<FreelancerCreateAccount />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
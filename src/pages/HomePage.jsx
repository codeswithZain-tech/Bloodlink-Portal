import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaHandHoldingMedical, FaHospital, FaUserCheck } from 'react-icons/fa';

const features = [
  {
    icon: FaHeartbeat,
    title: 'Save Lives',
    description: 'Every donation can save up to 3 lives. Your contribution matters every second!'
  },
  {
    icon: FaHandHoldingMedical,
    title: 'Easy Process',
    description: 'Quick donor search and hospital connection with our digital platform.'
  },
  {
    icon: FaHospital,
    title: 'Verified Hospitals',
    description: 'Connect with verified hospitals and secure blood collection centers.'
  },
  {
    icon: FaUserCheck,
    title: 'Verified Donors',
    description: 'All donors are verified with health checks for safe blood donation.'
  }
];

const steps = [
  { number: '01', title: 'Register', description: 'Sign up as a donor on BloodLink' },
  { number: '02', title: 'Verify', description: 'Verify your information and health status' },
  { number: '03', title: 'Donate', description: 'Donate blood at nearby hospital' },
  { number: '04', title: 'Save Lives', description: 'Your blood saves lives!' }
];

const HomePage = () => {
  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="hero-section mb-5">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <motion.h1 
              className="display-4 fw-bold mb-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to BloodLink
            </motion.h1>
            <motion.p 
              className="lead mb-4 opacity-75"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              A digital platform connecting blood donors with hospitals and patients in need.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button className="btn-gradient btn-lg me-3">Become a Donor</button>
              <button className="btn-outline-custom btn-lg">Learn More</button>
            </motion.div>
          </div>
          <div className="col-lg-4 text-center mt-4 mt-lg-0">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <img src="/blood-drop.svg" alt="BloodLink" style={{ width: 150, opacity: 0.3 }} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Why Choose BloodLink?</h2>
        <div className="row g-4">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="col-md-6 col-lg-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="custom-card p-4 text-center h-100">
                <div className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 70, height: 70 }}>
                  <feature.icon size={30} />
                </div>
                <h4 className="mb-2">{feature.title}</h4>
                <p className="text-muted mb-0">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Steps Section */}
      <div className="mb-5">
        <h2 className="text-center mb-4">How It Works</h2>
        <div className="row g-4">
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              className="col-md-6 col-lg-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 * index }}
            >
              <div className="custom-card p-4 text-center h-100 position-relative">
                <div className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 50, height: 50 }}>
                  <span className="fw-bold">{step.number}</span>
                </div>
                <h4 className="mb-2">{step.title}</h4>
                <p className="text-muted mb-0">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <motion.div 
        className="custom-card p-5 mb-4 bg-gradient"
        style={{ background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)', color: 'white' }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-center">
          <FaHeartbeat size={50} className="mb-3 opacity-75" />
          <h2 className="mb-3">Our Mission</h2>
          <p className="lead mb-0 opacity-75">
            To create a bridge between hospitals and donors, ensuring that no patient dies due to lack of blood.
            We aim to make blood donation quick, transparent, and accessible to everyone.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;

import React from 'react';
import { motion } from 'framer-motion';
import { FaTint, FaUsers, FaHospital, FaHeart, FaArrowUp } from 'react-icons/fa';

const stats = [
  { title: 'Total Donors', value: '1,234', icon: FaUsers, change: '+12%', color: 'primary' },
  { title: 'Blood Units', value: '856', icon: FaTint, change: '+8%', color: 'danger' },
  { title: 'Hospitals', value: '48', icon: FaHospital, change: '+5%', color: 'success' },
  { title: 'Lives Saved', value: '3,420', icon: FaHeart, change: '+15%', color: 'warning' },
];

const recentDonors = [
  { name: 'Ahmed Khan', bloodGroup: 'O+', date: '2025-01-15', city: 'Lahore', status: 'Active' },
  { name: 'Fatima Ali', bloodGroup: 'A+', date: '2025-01-14', city: 'Karachi', status: 'Active' },
  { name: 'Usman Raza', bloodGroup: 'B+', date: '2025-01-13', city: 'Islamabad', status: 'Pending' },
  { name: 'Sana Hussain', bloodGroup: 'AB-', date: '2025-01-12', city: 'Lahore', status: 'Active' },
  { name: 'Zain Malik', bloodGroup: 'O-', date: '2025-01-11', city: 'Faisalabad', status: 'Active' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Dashboard = () => {
  return (
    <motion.div className="page-container" variants={containerVariants} initial="hidden" animate="visible">
      <motion.div className="hero-section mb-4" variants={itemVariants}>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold mb-2">Welcome back, Admin!</h1>
            <p className="lead mb-0 opacity-75">Here is what is happening with your blood donation network today.</p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <button className="btn btn-light btn-lg rounded-pill">
              <FaTint className="me-2" /> New Donation
            </button>
          </div>
        </div>
      </motion.div>

      <div className="row g-4 mb-4">
        {stats.map((stat) => (
          <motion.div key={stat.title} className="col-md-6 col-xl-3" variants={itemVariants}>
            <div className="stat-card">
              <div className={`stat-icon bg-${stat.color} bg-opacity-10 text-${stat.color}`}>
                <stat.icon />
              </div>
              <div className="stat-number">{stat.value}</div>
              <div className="d-flex align-items-center justify-content-center gap-2">
                <span className="text-success">
                  <FaArrowUp size={12} /> {stat.change}
                </span>
                <span className="stat-label">vs last month</span>
              </div>
              <h5 className="mt-2 text-muted" style={{ fontSize: '0.9rem' }}>{stat.title}</h5>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants}>
        <div className="custom-card p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="mb-0">Recent Donors</h4>
            <button className="btn-outline-custom">View All</button>
          </div>
          <div className="table-responsive">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Donor Name</th>
                  <th>Blood Group</th>
                  <th>City</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentDonors.map((donor, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
                          {donor.name.charAt(0)}
                        </div>
                        <span className="fw-medium">{donor.name}</span>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-danger">{donor.bloodGroup}</span>
                    </td>
                    <td>{donor.city}</td>
                    <td>{donor.date}</td>
                    <td>
                      <span className={`badge-custom ${donor.status === 'Active' ? 'badge-donor' : 'badge-pending'}`}>
                        {donor.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;

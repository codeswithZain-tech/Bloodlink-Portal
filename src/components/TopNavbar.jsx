import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaBell, FaSearch, FaUser, FaSignOutAlt } from 'react-icons/fa';

const TopNavbar = ({ toggleSidebar, onLogout }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    { id: 1, text: 'New donor registered', time: '2 min ago', type: 'success' },
    { id: 2, text: 'Blood donation camp tomorrow', time: '1 hour ago', type: 'info' },
    { id: 3, text: 'Urgent: O- blood needed', time: '3 hours ago', type: 'urgent' },
  ];

  return (
    <motion.header 
      className="top-navbar"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="d-flex align-items-center gap-3">
        <button 
          className="btn btn-light rounded-circle p-2"
          onClick={toggleSidebar}
          style={{ width: 40, height: 40 }}
        >
          <FaBars />
        </button>
        <span className="navbar-brand d-none d-md-block">PlasmaBridge Gateway</span>
      </div>

      <div className="d-flex align-items-center gap-3">
        <div className="position-relative">
          <input 
            type="text" 
            placeholder="Search donors, hospitals..." 
            className="search-bar d-none d-md-block"
          />
          <FaSearch className="position-absolute text-muted" style={{ right: 15, top: '50%', transform: 'translateY(-50%)' }} />
        </div>

        <div className="position-relative">
          <button 
            className="btn btn-light rounded-circle p-2 position-relative"
            onClick={() => setShowNotifications(!showNotifications)}
            style={{ width: 40, height: 40 }}
          >
            <FaBell />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
            </span>
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                className="position-absolute end-0 mt-2 bg-white rounded-3 shadow-lg"
                style={{ width: 320, zIndex: 1000 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="p-3 border-bottom">
                  <h6 className="mb-0">Notifications</h6>
                </div>
                {notifications.map((notif) => (
                  <div key={notif.id} className="p-3 border-bottom hover-bg-light">
                    <div className="d-flex align-items-start gap-2">
                      <div className={`rounded-circle p-1 ${notif.type === 'urgent' ? 'bg-danger' : notif.type === 'success' ? 'bg-success' : 'bg-info'}`} style={{ width: 8, height: 8, marginTop: 6 }}></div>
                      <div>
                        <p className="mb-0 small">{notif.text}</p>
                        <small className="text-muted">{notif.time}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="position-relative">
          <button 
            className="btn btn-light rounded-circle p-1"
            onClick={() => setShowProfile(!showProfile)}
          >
            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 36, height: 36 }}>
              <FaUser size={14} />
            </div>
          </button>

          <AnimatePresence>
            {showProfile && (
              <motion.div
                className="position-absolute end-0 mt-2 bg-white rounded-3 shadow-lg"
                style={{ width: 200, zIndex: 1000 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="p-3 text-center border-bottom">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: 50, height: 50 }}>
                    <FaUser size={20} />
                  </div>
                  <h6 className="mb-0">Admin User</h6>
                  <small className="text-muted">admin@plasmabridge.com</small>
                </div>
                <button className="btn w-100 text-start p-3 d-flex align-items-center gap-2 text-danger" onClick={onLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default TopNavbar;

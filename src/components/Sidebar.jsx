import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaInfoCircle, 
  FaUserPlus, 
  FaEnvelope, 
  FaUsers, 
  FaMagic, 
  FaSignOutAlt,
  FaTachometerAlt
} from 'react-icons/fa';

const Sidebar = ({ collapsed, onLogout }) => {
  const location = useLocation();

  const navItems = [
    { path: '/home', icon: FaTachometerAlt, label: 'Dashboard' },
    { path: '/home', icon: FaHome, label: 'Home' },
    { path: '/about', icon: FaInfoCircle, label: 'About Us' },
    { path: '/register', icon: FaUserPlus, label: 'Register' },
    { path: '/donors', icon: FaUsers, label: 'Donors' },
    { path: '/contact', icon: FaEnvelope, label: 'Contact' },
    { path: '/ai-image', icon: FaMagic, label: 'AI Images' },
  ];

  return (
    <motion.aside 
      className="sidebar"
      style={{ width: collapsed ? 80 : 280 }}
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="sidebar-header">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img 
            src="/blood-drop.svg" 
            alt="BloodLink" 
            className="sidebar-logo"
            style={{ width: collapsed ? 40 : 60 }}
          />
        </motion.div>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h4 className="sidebar-brand">BloodLink</h4>
            <small className="text-white-50">Donate Blood, Save Lives</small>
          </motion.div>
        )}
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <NavLink 
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <item.icon size={20} />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          </motion.div>
        ))}
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: navItems.length * 0.1 }}
        >
          <div className="nav-item" onClick={onLogout} style={{ cursor: 'pointer' }}>
            <FaSignOutAlt size={20} />
            {!collapsed && <span>Logout</span>}
          </div>
        </motion.div>
      </nav>

      {!collapsed && (
        <div className="sidebar-footer text-center p-3 mt-auto">
          <small className="text-white-50">© 2025 BloodLink</small>
        </div>
      )}
    </motion.aside>
  );
};

export default Sidebar;

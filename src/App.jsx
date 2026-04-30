import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/TopNavbar';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RegistrationPage from './pages/RegistrationPage';
import ContactPage from './pages/ContactPage';
import DonorsPage from './pages/DonorsPage';
import AIImagePage from './pages/AIImagePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="app-container">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        toggleSidebar={toggleSidebar}
        onLogout={handleLogout}
      />
      <div className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`}>
        <TopNavbar 
          toggleSidebar={toggleSidebar} 
          collapsed={sidebarCollapsed}
          onLogout={handleLogout}
        />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donors" element={<DonorsPage />} />
            <Route path="/ai-image" element={<AIImagePage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;

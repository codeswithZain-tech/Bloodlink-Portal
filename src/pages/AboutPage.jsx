import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaShieldAlt, FaClock } from 'react-icons/fa';

const values = [
{ icon: FaBullseye, title: 'Mission', text: 'Create a bridge between hospitals and donors, ensuring no patient dies due to lack of blood.' },
{ icon: FaEye, title: 'Vision', text: 'To become the leading digital blood donation network with stable supply and regular donors.' },
{ icon: FaShieldAlt, title: 'Safety', text: 'Verified donors, secure records, and quality testing at every step.' },
{ icon: FaClock, title: '24/7 Available', text: 'Round the clock service for emergency blood needs.' }
];

const team = [
{ name: 'Dr. Sarah Ahmed', role: 'Medical Director', image: 'S' },
{ name: 'Ali Hassan', role: 'Operations Manager', image: 'A' },
{ name: 'Fatima Khan', role: 'Community Lead', image: 'F' },
{ name: 'Usman Raza', role: 'Tech Lead', image: 'U' }
];

const AboutPage = () => {
return (
<motion.div className="page-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
<div className="hero-section mb-5 text-center">
<motion.h1 className="display-4 fw-bold mb-3" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>About PlasmaBridge Gateway</motion.h1>
<motion.p className="lead opacity-75" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>Connecting Donors with Life</motion.p>
</div>

<div className="row g-4 mb-5">
{values.map((item, index) => (
<motion.div key={item.title} className="col-md-6 col-lg-3" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index }}>
<div className="custom-card p-4 text-center h-100">
<div className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 70, height: 70 }}>
<item.icon size={30} />
</div>
<h4 className="mb-2">{item.title}</h4>
<p className="text-muted mb-0">{item.text}</p>
</div>
</motion.div>
))}
</div>

<div className="custom-card p-5 mb-5">
<div className="row align-items-center">
<div className="col-lg-6 mb-4 mb-lg-0">
<h2 className="mb-3">Who We Are</h2>
<p className="text-muted">We are a dedicated team of students and volunteers who designed PlasmaBridge Gateway to make the process of donating and receiving plasma easier, safer, and faster.</p>
<p className="text-muted">Every feature in our system focuses on saving valuable time during emergencies.</p>
<div className="mt-4">
<div className="d-flex align-items-center gap-3 mb-3">
<div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>{'\u2713'}</div>
<span>Quick donor search and hospital connection</span>
</div>
<div className="d-flex align-items-center gap-3 mb-3">
<div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>{'\u2713'}</div>
<span>Verified donors and secure records</span>
</div>
<div className="d-flex align-items-center gap-3 mb-3">
<div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>{'\u2713'}</div>
<span>Free service for hospitals and donors</span>
</div>
<div className="d-flex align-items-center gap-3">
<div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>{'\u2713'}</div>
<span>Available 24/7 for emergency needs</span>
</div>
</div>
</div>
<div className="col-lg-6 text-center">
<div className="bg-danger bg-opacity-10 rounded-3 p-5">
<img src="/blood-drop.svg" alt="PlasmaBridge Gateway" style={{ width: 120, opacity: 0.5 }} />
</div>
</div>
</div>
</div>

<div className="mb-5">
<h2 className="text-center mb-4">Our Team</h2>
<div className="row g-4">
{team.map((member, index) => (
<motion.div key={member.name} className="col-md-6 col-lg-3" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 * index }}>
<div className="custom-card p-4 text-center">
<div className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 80, height: 80, fontSize: '2rem' }}>{member.image}</div>
<h5 className="mb-1">{member.name}</h5>
<p className="text-muted mb-0">{member.role}</p>
</div>
</motion.div>
))}
</div>
</div>

<motion.div className="custom-card p-5 text-center" style={{ background: 'linear-gradient(135deg, #1e272e 0%, #2d3436 100%)', color: 'white' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
<h3 className="mb-3">Join Our Mission</h3>
<p className="opacity-75 mb-4">Together, we can make a difference in the lives of those in need.</p>
<button className="btn btn-danger btn-lg rounded-pill px-5">Get Started Today</button>
</motion.div>
</motion.div>
);
};

export default AboutPage;

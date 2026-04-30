import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const branches = [
{ city: 'Lahore', address: 'Liberty Market, Gulberg', phone: '0321-1112233', email: 'lahore@bloodlink.com' },
{ city: 'Karachi', address: 'Clifton Block 5', phone: '0333-4445566', email: 'karachi@bloodlink.com' },
{ city: 'Islamabad', address: 'Blue Area Center', phone: '0312-5556677', email: 'islamabad@bloodlink.com' }
];

const ContactPage = () => {
const [formData, setFormData] = useState({ fullname: '', email: '', city: 'Lahore', message: '' });
const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
e.preventDefault();
setSubmitted(true);
setTimeout(() => setSubmitted(false), 3000);
};

return (
<motion.div className="page-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
<div className="hero-section mb-5 text-center">
<motion.h1 className="display-4 fw-bold mb-3" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>Contact BloodLink</motion.h1>
<motion.p className="lead opacity-75" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>We are Here to Help You 24/7</motion.p>
</div>

<div className="row g-4 mb-5">
{branches.map((branch, index) => (
<motion.div key={branch.city} className="col-md-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index }}>
<div className="custom-card p-4 h-100">
<div className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
<FaMapMarkerAlt size={24} />
</div>
<h4 className="mb-3">{branch.city}</h4>
<p className="text-muted mb-2">{branch.address}</p>
<p className="text-muted mb-2"><FaPhone className="me-2 text-danger" />{branch.phone}</p>
<p className="text-muted mb-0"><FaEnvelope className="me-2 text-danger" />{branch.email}</p>
</div>
</motion.div>
))}
</div>

<div className="row g-4">
<div className="col-lg-8">
<motion.div className="custom-card p-4" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
<h3 className="mb-4">Send Us a Message</h3>
{submitted && <div className="alert alert-success mb-4">Message sent successfully! We will reply within 24 hours.</div>}
<form onSubmit={handleSubmit}>
<div className="row g-3">
<div className="col-md-6">
<label className="form-label-custom d-block">Full Name</label>
<input type="text" className="form-control-custom" placeholder="Enter your name" value={formData.fullname} onChange={(e) => setFormData({...formData, fullname: e.target.value})} required />
</div>
<div className="col-md-6">
<label className="form-label-custom d-block">Email</label>
<input type="email" className="form-control-custom" placeholder="example@gmail.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
</div>
<div className="col-12">
<label className="form-label-custom d-block">City</label>
<select className="form-control-custom" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})}>
<option>Lahore</option>
<option>Karachi</option>
<option>Islamabad</option>
<option>Faisalabad</option>
</select>
</div>
<div className="col-12">
<label className="form-label-custom d-block">Message</label>
<textarea className="form-control-custom" rows="5" placeholder="Type your message here..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
</div>
</div>
<div className="mt-4 d-flex gap-3">
<motion.button type="submit" className="btn-gradient" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}><FaPaperPlane className="me-2" />Send Message</motion.button>
<button type="reset" className="btn-outline-custom" onClick={() => setFormData({ fullname: '', email: '', city: 'Lahore', message: '' })}>Clear</button>
</div>
</form>
</motion.div>
</div>

<div className="col-lg-4">
<motion.div className="custom-card p-4" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
<h4 className="mb-4">Connect With Us</h4>
<p className="text-muted mb-4">Follow us on our social media platforms for updates and donation drives:</p>
<div className="d-flex flex-column gap-3">
<a href="#" className="btn btn-outline-primary d-flex align-items-center gap-3"><FaFacebook /> Facebook</a>
<a href="#" className="btn btn-outline-danger d-flex align-items-center gap-3"><FaInstagram /> Instagram</a>
<a href="#" className="btn btn-outline-info d-flex align-items-center gap-3"><FaTwitter /> Twitter</a>
<a href="#" className="btn btn-outline-primary d-flex align-items-center gap-3"><FaLinkedin /> LinkedIn</a>
</div>
</motion.div>

<motion.div className="custom-card p-4 mt-4 text-center" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
<div className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 80, height: 80 }}>
<FaPhone size={32} />
</div>
<h5>Emergency Hotline</h5>
<p className="text-muted mb-0">0800-BLOODLINK</p>
<small className="text-muted">Available 24/7</small>
</motion.div>
</div>
</div>
</motion.div>
);
};

export default ContactPage;

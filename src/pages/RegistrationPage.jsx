import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaTint, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
const cities = ['Lahore', 'Karachi', 'Islamabad', 'Faisalabad', 'Rawalpindi', 'Multan'];

const RegistrationPage = () => {
const [formData, setFormData] = useState({
name: '', age: '', gender: '', bloodGroup: '', city: '', contact: '', email: '', date: ''
});
const [submitted, setSubmitted] = useState(false);

const handleChange = (e) => {
setFormData({...formData, [e.target.name]: e.target.value});
};

const handleSubmit = (e) => {
e.preventDefault();
setSubmitted(true);
setTimeout(() => setSubmitted(false), 3000);
};

return (
<motion.div className="page-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
<div className="hero-section mb-5 text-center">
<motion.h1 className="display-4 fw-bold mb-3" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>Donor Registration</motion.h1>
<motion.p className="lead opacity-75" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>Become a Lifesaver Today</motion.p>
</div>

<div className="row g-4">
<div className="col-lg-8">
<motion.div className="custom-card p-4" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
<h3 className="mb-4">Donor Information Form</h3>
{submitted && (
<div className="alert alert-success mb-4">Registration successful! Thank you for becoming a donor.</div>
)}
<form onSubmit={handleSubmit}>
<div className="row g-3">
<div className="col-md-6">
<label className="form-label-custom d-block">Full Name</label>
<div className="position-relative">
<FaUserPlus className="position-absolute text-muted" style={{ left: 16, top: '50%', transform: 'translateY(-50%)' }} />
<input type="text" name="name" className="form-control-custom ps-5" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
</div>
</div>
<div className="col-md-6">
<label className="form-label-custom d-block">Age</label>
<input type="number" name="age" className="form-control-custom" placeholder="18-60" min="18" max="60" value={formData.age} onChange={handleChange} required />
</div>
<div className="col-md-6">
<label className="form-label-custom d-block">Gender</label>
<div className="d-flex gap-3">
<div className="form-check">
<input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} className="form-check-input" />
<label className="form-check-label">Male</label>
</div>
<div className="form-check">
<input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} className="form-check-input" />
<label className="form-check-label">Female</label>
</div>
</div>
</div>
<div className="col-md-6">
<label className="form-label-custom d-block">Blood Group</label>
<div className="position-relative">
<FaTint className="position-absolute text-muted" style={{ left: 16, top: '50%', transform: 'translateY(-50%)' }} />
<select name="bloodGroup" className="form-control-custom ps-5" value={formData.bloodGroup} onChange={handleChange} required>
<option value="">Select Blood Group</option>
{bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
</select>
</div>
</div>
<div className="col-md-6">
<label className="form-label-custom d-block">City</label>
<div className="position-relative">
<FaMapMarkerAlt className="position-absolute text-muted" style={{ left: 16, top: '50%', transform: 'translateY(-50%)' }} />
<select name="city" className="form-control-custom ps-5" value={formData.city} onChange={handleChange}>
<option value="">Select City</option>
{cities.map(city => <option key={city} value={city}>{city}</option>)}
</select>
</div>
</div>
<div className="col-md-6">
<label className="form-label-custom d-block">Contact Number</label>
<div className="position-relative">
<FaPhone className="position-absolute text-muted" style={{ left: 16, top: '50%', transform: 'translateY(-50%)' }} />
<input type="tel" name="contact" className="form-control-custom ps-5" placeholder="03XXXXXXXXX" value={formData.contact} onChange={handleChange} required />
</div>
</div>
<div className="col-md-6">
<label className="form-label-custom d-block">Email Address</label>
<div className="position-relative">
<FaEnvelope className="position-absolute text-muted" style={{ left: 16, top: '50%', transform: 'translateY(-50%)' }} />
<input type="email" name="email" className="form-control-custom ps-5" placeholder="example@gmail.com" value={formData.email} onChange={handleChange} required />
</div>
</div>
<div className="col-md-6">
<label className="form-label-custom d-block">Preferred Donation Date</label>
<div className="position-relative">
<FaCalendarAlt className="position-absolute text-muted" style={{ left: 16, top: '50%', transform: 'translateY(-50%)' }} />
<input type="date" name="date" className="form-control-custom ps-5" value={formData.date} onChange={handleChange} />
</div>
</div>
</div>
<div className="mt-4 d-flex gap-3">
<motion.button type="submit" className="btn-gradient" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>Register</motion.button>
<button type="reset" className="btn-outline-custom" onClick={() => setFormData({name: '', age: '', gender: '', bloodGroup: '', city: '', contact: '', email: '', date: ''})}>Clear</button>
</div>
</form>
</motion.div>
</div>

<div className="col-lg-4">
<motion.div className="custom-card p-4 mb-4" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
<h4 className="mb-3">Blood Compatibility</h4>
<div className="table-responsive">
<table className="table table-sm">
<thead>
<tr><th>Group</th><th>Donate To</th><th>Receive From</th></tr>
</thead>
<tbody>
<tr><td><span className="badge bg-danger">A+</span></td><td>A+, AB+</td><td>A+, A-, O+, O-</td></tr>
<tr><td><span className="badge bg-danger">O+</span></td><td>O+, A+, B+, AB+</td><td>O+, O-</td></tr>
<tr><td><span className="badge bg-danger">B+</span></td><td>B+, AB+</td><td>B+, B-, O+, O-</td></tr>
<tr><td><span className="badge bg-danger">AB+</span></td><td>AB+</td><td>Everyone</td></tr>
<tr><td><span className="badge bg-danger">A-</span></td><td>A+, A-, AB+, AB-</td><td>A-, O-</td></tr>
<tr><td><span className="badge bg-danger">O-</span></td><td>Everyone</td><td>O-</td></tr>
<tr><td><span className="badge bg-danger">B-</span></td><td>B+, B-, AB+, AB-</td><td>B-, O-</td></tr>
<tr><td><span className="badge bg-danger">AB-</span></td><td>AB+, AB-</td><td>A-, B-, AB-, O-</td></tr>
</tbody>
</table>
</div>
</motion.div>

<motion.div className="custom-card p-4" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
<h4 className="mb-3">Requirements</h4>
<ul className="list-unstyled mb-0">
<li className="mb-2 d-flex align-items-center gap-2"><span className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: 24, height: 24, fontSize: '0.8rem' }}>{'\u2713'}</span> Age 18-60 years</li>
<li className="mb-2 d-flex align-items-center gap-2"><span className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: 24, height: 24, fontSize: '0.8rem' }}>{'\u2713'}</span> Weight above 50kg</li>
<li className="mb-2 d-flex align-items-center gap-2"><span className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: 24, height: 24, fontSize: '0.8rem' }}>{'\u2713'}</span> Good health condition</li>
<li className="d-flex align-items-center gap-2"><span className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: 24, height: 24, fontSize: '0.8rem' }}>{'\u2713'}</span> No recent infections</li>
</ul>
</motion.div>
</div>
</div>
</motion.div>
);
};

export default RegistrationPage;

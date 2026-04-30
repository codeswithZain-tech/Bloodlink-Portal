import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaTint, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFilter } from 'react-icons/fa';

const donors = [
{ id: 1, name: 'Ahmed Khan', bloodGroup: 'O+', age: 28, city: 'Lahore', phone: '0321-1234567', email: 'ahmed@email.com', lastDonation: '2025-01-10', status: 'Active' },
{ id: 2, name: 'Fatima Ali', bloodGroup: 'A+', age: 32, city: 'Karachi', phone: '0333-2345678', email: 'fatima@email.com', lastDonation: '2025-01-08', status: 'Active' },
{ id: 3, name: 'Usman Raza', bloodGroup: 'B+', age: 25, city: 'Islamabad', phone: '0312-3456789', email: 'usman@email.com', lastDonation: '2024-12-20', status: 'Pending' },
{ id: 4, name: 'Sana Hussain', bloodGroup: 'AB-', age: 30, city: 'Lahore', phone: '0321-4567890', email: 'sana@email.com', lastDonation: '2025-01-12', status: 'Active' },
{ id: 5, name: 'Zain Malik', bloodGroup: 'O-', age: 35, city: 'Faisalabad', phone: '0300-5678901', email: 'zain@email.com', lastDonation: '2025-01-05', status: 'Active' },
{ id: 6, name: 'Ayesha Siddiqui', bloodGroup: 'A-', age: 27, city: 'Karachi', phone: '0333-6789012', email: 'ayesha@email.com', lastDonation: '2024-12-15', status: 'Inactive' },
{ id: 7, name: 'Bilal Ahmed', bloodGroup: 'B-', age: 29, city: 'Islamabad', phone: '0312-7890123', email: 'bilal@email.com', lastDonation: '2025-01-14', status: 'Active' },
{ id: 8, name: 'Maria Khan', bloodGroup: 'AB+', age: 31, city: 'Lahore', phone: '0321-8901234', email: 'maria@email.com', lastDonation: '2025-01-11', status: 'Active' }
];

const DonorsPage = () => {
const [searchTerm, setSearchTerm] = useState('');
const [bloodFilter, setBloodFilter] = useState('All');
const [cityFilter, setCityFilter] = useState('All');

const filteredDonors = donors.filter(donor => {
const matchSearch = donor.name.toLowerCase().includes(searchTerm.toLowerCase()) || donor.bloodGroup.toLowerCase().includes(searchTerm.toLowerCase());
const matchBlood = bloodFilter === 'All' || donor.bloodGroup === bloodFilter;
const matchCity = cityFilter === 'All' || donor.city === cityFilter;
return matchSearch && matchBlood && matchCity;
});

return (
<motion.div className="page-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
<div className="hero-section mb-4">
<div className="row align-items-center">
<div className="col-lg-8">
<motion.h1 className="display-5 fw-bold mb-2" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>Donor Directory</motion.h1>
<p className="lead mb-0 opacity-75">Search and connect with blood donors in your area</p>
</div>
<div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
<motion.div className="d-flex align-items-center gap-2 justify-content-lg-end" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
<div className="bg-white rounded-pill px-3 py-2 d-flex align-items-center">
<span className="bg-success rounded-circle me-2" style={{ width: 8, height: 8 }}></span>
<small className="text-dark">{donors.filter(d => d.status === 'Active').length} Active</small>
</div>
<div className="bg-white rounded-pill px-3 py-2 d-flex align-items-center">
<span className="bg-warning rounded-circle me-2" style={{ width: 8, height: 8 }}></span>
<small className="text-dark">{donors.filter(d => d.status === 'Pending').length} Pending</small>
</div>
</motion.div>
</div>
</div>
</div>

<motion.div className="custom-card p-4 mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
<div className="row g-3">
<div className="col-lg-6">
<div className="position-relative">
<FaSearch className="position-absolute text-muted" style={{ left: 16, top: '50%', transform: 'translateY(-50%)' }} />
<input type="text" className="form-control-custom ps-5" placeholder="Search donors by name or blood group..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
</div>
</div>
<div className="col-lg-3">
<div className="position-relative">
<FaFilter className="position-absolute text-muted" style={{ left: 16, top: '50%', transform: 'translateY(-50%)' }} />
<select className="form-control-custom ps-5" value={bloodFilter} onChange={(e) => setBloodFilter(e.target.value)}>
<option value="All">All Blood Groups</option>
<option>A+</option>
<option>A-</option>
<option>B+</option>
<option>B-</option>
<option>O+</option>
<option>O-</option>
<option>AB+</option>
<option>AB-</option>
</select>
</div>
</div>
<div className="col-lg-3">
<div className="position-relative">
<FaMapMarkerAlt className="position-absolute text-muted" style={{ left: 16, top: '50%', transform: 'translateY(-50%)' }} />
<select className="form-control-custom ps-5" value={cityFilter} onChange={(e) => setCityFilter(e.target.value)}>
<option value="All">All Cities</option>
<option>Lahore</option>
<option>Karachi</option>
<option>Islamabad</option>
<option>Faisalabad</option>
</select>
</div>
</div>
</div>
</motion.div>

<div className="row g-4">
{filteredDonors.map((donor, index) => (
<motion.div key={donor.id} className="col-md-6 col-lg-4 col-xl-3" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.05 * index }}>
<motion.div className="custom-card p-4 h-100" whileHover={{ y: -5 }}>
<div className="d-flex align-items-center gap-3 mb-3">
<div className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 50, height: 50, fontSize: '1.2rem', fontWeight: 'bold' }}>
{donor.bloodGroup}
</div>
<div>
<h5 className="mb-0">{donor.name}</h5>
<small className="text-muted">Age: {donor.age}</small>
</div>
</div>
<div className="mb-3">
<span className={`badge-custom ${donor.status === 'Active' ? 'badge-donor' : donor.status === 'Pending' ? 'badge-pending' : 'bg-secondary'}`}>{donor.status}</span>
</div>
<p className="text-muted mb-2"><FaMapMarkerAlt className="me-2 text-danger" />{donor.city}</p>
<p className="text-muted mb-2"><FaPhone className="me-2 text-danger" />{donor.phone}</p>
<p className="text-muted mb-2"><FaEnvelope className="me-2 text-danger" />{donor.email}</p>
<p className="text-muted mb-0"><FaTint className="me-2 text-danger" />Last: {donor.lastDonation}</p>
</motion.div>
</motion.div>
))}
</div>

{filteredDonors.length === 0 && (
<div className="text-center py-5">
<div className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 80, height: 80 }}>
<FaSearch size={32} />
</div>
<h4>No donors found</h4>
<p className="text-muted">Try adjusting your search or filters</p>
</div>
)}
</motion.div>
);
};

export default DonorsPage;

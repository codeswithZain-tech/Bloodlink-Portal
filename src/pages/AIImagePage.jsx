import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMagic, FaDownload, FaImage, FaStar, FaUndo, FaRedo } from 'react-icons/fa';

const sampleImages = [
{ id: 1, prompt: 'Blood donation awareness poster', url: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=400&h=300&fit=crop', style: 'Realistic' },
{ id: 2, prompt: 'Blood donor helping patient', url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop', style: 'Cinematic' },
{ id: 3, prompt: 'Hospital blood bank', url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0?w=400&h=300&fit=crop', style: 'Professional' },
{ id: 4, prompt: 'Blood donation camp', url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop', style: 'Documentary' },
{ id: 5, prompt: 'Blood bag close up', url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop', style: 'Medical' },
{ id: 6, prompt: 'Donor giving blood', url: 'https://images.unsplash.com/photo-1584515933487-779824d29609?w=400&h=300&fit=crop', style: 'Realistic' }
];

const styleOptions = ['Realistic', 'Cinematic', 'Anime', '3D Render', 'Watercolor', 'Sketch'];

const AIImagePage = () => {
const [prompt, setPrompt] = useState('');
const [selectedStyle, setSelectedStyle] = useState('Realistic');
const [generating, setGenerating] = useState(false);
const [generatedImages, setGeneratedImages] = useState([]);
const [activeTab, setActiveTab] = useState('generate');

const generateImage = () => {
if (!prompt.trim()) return;
setGenerating(true);
setTimeout(() => {
const randomImage = sampleImages[Math.floor(Math.random() * sampleImages.length)];
setGeneratedImages([{ ...randomImage, prompt, style: selectedStyle, generatedAt: new Date().toLocaleString() }, ...generatedImages]);
setGenerating(false);
}, 2000);
};

// Placeholder image for generated results
const getPlaceholderImage = (index) => {
const placeholders = [
'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=400&h=300&fit=crop',
'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop',
'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0?w=400&h=300&fit=crop',
'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop',
];
return placeholders[index % placeholders.length];
};

return (
<motion.div className="page-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
<div className="hero-section mb-4">
<div className="row align-items-center">
<div className="col-lg-8">
<motion.h1 className="display-5 fw-bold mb-2" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>AI Image Generator</motion.h1>
<p className="lead mb-0 opacity-75">Create powerful blood donation awareness visuals with AI</p>
</div>
<div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
<div className="d-inline-flex align-items-center gap-2 bg-white bg-opacity-20 rounded-pill px-4 py-2">
<FaStar className="text-warning" />
<span className="fw-medium">Powered by AI</span>
</div>
</motion.div>
</div>
</div>
</div>

<div className="row g-4 mb-4">
<div className="col-12">
<motion.div className="custom-card p-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
<div className="row g-3">
<div className="col-lg-8">
<label className="form-label-custom d-block">Describe your image</label>
<div className="position-relative">
<FaMagic className="position-absolute text-muted" style={{ left: 16, top: '50%', transform: 'translateY(-50%)' }} />
<input type="text" className="form-control-custom ps-5" placeholder="e.g., Blood donation awareness poster with heart..." value={prompt} onChange={(e) => setPrompt(e.target.value)} />
</div>
</div>
<div className="col-lg-4">
<label className="form-label-custom d-block">Style</label>
<select className="form-control-custom" value={selectedStyle} onChange={(e) => setSelectedStyle(e.target.value)}>
{styleOptions.map(style => <option key={style} value={style}>{style}</option>)}
</select>
</div>
<div className="col-12">
<motion.button className="btn-gradient" onClick={generateImage} disabled={generating || !prompt.trim()} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
{generating ? (
<><span className="spinner-border spinner-border-sm me-2" />Generating...</>
) : (
<><FaMagic className="me-2" />Generate Image</>
)}
</motion.button>
</div>
</div>
</motion.div>
</div>
</div>

<div className="custom-card p-4 mb-4">
<div className="d-flex gap-4 mb-4 border-bottom pb-3">
<button className={`btn ${activeTab === 'generate' ? 'btn-danger' : 'btn-outline-secondary'}`} onClick={() => setActiveTab('generate')}>
<FaMagic className="me-2" />Generated Images
</button>
<button className={`btn ${activeTab === 'gallery' ? 'btn-danger' : 'btn-outline-secondary'}`} onClick={() => setActiveTab('gallery')}>
<FaImage className="me-2" />Sample Gallery
</button>
</div>

{activeTab === 'generate' && (
<>
{generatedImages.length === 0 ? (
<div className="text-center py-5">
<div className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 80, height: 80 }}>
<FaMagic size={32} />
</div>
<h4>No images generated yet</h4>
<p className="text-muted">Enter a prompt above to generate your first AI image</p>
</div>
) : (
<div className="row g-4">
{generatedImages.map((image, index) => (
<motion.div key={index} className="col-md-6 col-lg-4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.05 * index }}>
<motion.div className="card border-0 shadow-sm overflow-hidden" whileHover={{ y: -5 }}>
<img src={getPlaceholderImage(index)} alt={image.prompt} className="card-img-top" style={{ height: 200, objectFit: 'cover' }} />
<div className="card-body">
<p className="card-text text-muted small mb-2"><strong>Prompt:</strong> {image.prompt}</p>
<div className="d-flex justify-content-between align-items-center">
<span className="badge bg-secondary">{image.style}</span>
<div className="d-flex gap-2">
<button className="btn btn-sm btn-outline-danger" title="Regenerate"><FaUndo /></button>
<button className="btn btn-sm btn-outline-primary" title="Download"><FaDownload /></button>
</div>
</div>
</div>
</motion.div>
</motion.div>
))}
</div>
)}
</>
)}

{activeTab === 'gallery' && (
<div className="row g-4">
{sampleImages.map((image, index) => (
<motion.div key={image.id} className="col-md-6 col-lg-4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.05 * index }}>
<motion.div className="card border-0 shadow-sm overflow-hidden" whileHover={{ y: -5 }}>
<img src={image.url} alt={image.prompt} className="card-img-top" style={{ height: 200, objectFit: 'cover' }} />
<div className="card-body">
<p className="card-text text-muted small mb-2">{image.prompt}</p>
<span className="badge bg-secondary">{image.style}</span>
</div>
</motion.div>
</motion.div>
))}
</div>
)}
</div>
</motion.div>
);
};

export default AIImagePage;

# PlasmaBridge Gateway

A digital platform connecting plasma donors with hospitals and patients in need.

## Features

- **User Authentication** - Secure login system for admin access
- **Dashboard** - Overview of donors, blood units, hospitals, and lives saved
- **Donor Management** - Search and filter registered donors by blood group and city
- **Donor Registration** - Register new blood donors with complete information
- **AI Image Generator** - Create blood donation awareness visuals
- **Contact System** - Branch locations and message form
- **About Page** - Mission, vision, and team information

## Tech Stack

- **React** - Frontend framework
- **Vite** - Build tool
- **React Router** - Navigation
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **Bootstrap** - CSS framework

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

## Login Credentials

- **Email**: admin@plasmabridge.com
- **Password**: admin123

## Project Structure

```
plasma-bridge-gateway/
├── public/
│   └── blood-drop.svg
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   └── TopNavbar.jsx
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── AIImagePage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── Dashboard.jsx
│   │   ├── DonorsPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   └── RegistrationPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## License

MIT

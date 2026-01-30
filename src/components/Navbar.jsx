import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="14" stroke="#3182CE" strokeWidth="2.5"/>
            <path d="M10 16L14 20L22 12" stroke="#3182CE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="navbar-brand">Zenland</span>
        </div>

        <div className="navbar-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#agents" className="nav-link">Agents</a>
        </div>

        <div className="navbar-actions">
          <button className="btn btn-primary">Launch App</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

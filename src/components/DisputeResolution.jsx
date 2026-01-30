import './DisputeResolution.css'

function DisputeResolution() {
  return (
    <section className="dispute-section section" id="agents">
      <div className="dispute-bg"></div>
      <div className="container">
        <div className="dispute-header">
          <span className="section-label">Dispute Resolution</span>
          <h2 className="section-title">Fair & Transparent</h2>
          <p className="section-subtitle">
            When disputes arise, neutral Zenland Agents step in to review evidence
            and deliver fair resolutions — all secured by smart contracts.
          </p>
        </div>

        <div className="agent-cards">
          <div className="agent-card primary-card">
            <div className="card-glow"></div>
            <div className="card-icon">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <rect x="8" y="8" width="40" height="48" rx="4" stroke="white" strokeWidth="2.5"/>
                <path d="M18 22H38M18 32H38M18 42H32" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="44" cy="44" r="10" fill="white"/>
                <path d="M44 39V49M39 44H49" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="card-title">Become an Agent</h3>
            <p className="card-description">
              Register on-chain with your own fee structure and terms.
              The process is fully automated and permissionless — no application needed.
            </p>
            <ul className="card-perks">
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Set your own commission rates
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Direct on-chain payments
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Build on-chain reputation
              </li>
            </ul>
            <button className="btn btn-light">
              Register as Agent
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="agent-card secondary-card">
            <div className="card-icon-wrapper">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth="2.5"/>
                <path d="M10 42C10 33.1634 17.1634 26 24 26C30.8366 26 38 33.1634 38 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="36" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                <path d="M36 9V15M33 12H39" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="card-title">Who Are Agents?</h3>
            <p className="card-description">
              Agents are trusted community members who serve as neutral arbitrators
              when disputes arise. They independently review cases and make fair judgments.
            </p>
            <div className="agent-stats">
              <div className="agent-stat">
                <span className="stat-number">50+</span>
                <span className="stat-text">Active Agents</span>
              </div>
              <div className="stat-divider"></div>
              <div className="agent-stat">
                <span className="stat-number">98%</span>
                <span className="stat-text">Resolution Rate</span>
              </div>
            </div>
            <button className="btn btn-secondary">
              View All Agents
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DisputeResolution

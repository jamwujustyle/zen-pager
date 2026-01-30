import './PerspectiveTabs.css'

const perspectives = [
  {
    key: 'buyer',
    title: 'For Buyers',
    subtitle: 'Shop with confidence',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 10L10 22H22L24 10H8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 10V8C12 5.79086 13.7909 4 16 4C18.2091 4 20 5.79086 20 8V10" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="26" r="2" fill="currentColor"/>
        <circle cx="20" cy="26" r="2" fill="currentColor"/>
      </svg>
    ),
    color: '#2563EB',
    steps: [
      { icon: '📝', title: 'Create Contract', description: 'Enter seller address, amount, and set your protection period' },
      { icon: '💰', title: 'Fund Escrow', description: 'Deposit stablecoins into the secure smart contract' },
      { icon: '📦', title: 'Receive Delivery', description: 'Get your goods or services from the seller' },
      { icon: '✅', title: 'Confirm & Release', description: 'Approve delivery to release funds, or dispute if needed' }
    ]
  },
  {
    key: 'seller',
    title: 'For Sellers',
    subtitle: 'Get paid securely',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 14H26" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 20H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 20H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: '#14B8A6',
    steps: [
      { icon: '🔔', title: 'Accept Contract', description: 'Buyer creates a funded contract with your wallet' },
      { icon: '🚀', title: 'Deliver Value', description: 'Provide the agreed goods, services, or deliverables' },
      { icon: '⏳', title: 'Await Confirmation', description: 'Buyer confirms receipt within the protection period' },
      { icon: '💸', title: 'Receive Payment', description: 'Funds release directly to your wallet instantly' }
    ]
  },
  {
    key: 'agent',
    title: 'For Agents',
    subtitle: 'Earn by resolving disputes',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 28C8 23.5817 11.5817 20 16 20C20.4183 20 24 23.5817 24 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 8L26 4M26 4L30 8M26 4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#8B5CF6',
    steps: [
      { icon: '🎯', title: 'Register On-Chain', description: 'Set up your profile with fees and terms — fully automated' },
      { icon: '🤝', title: 'Get Selected', description: 'Users choose you as their dispute resolver' },
      { icon: '⚖️', title: 'Review Cases', description: 'Examine evidence and make fair judgments' },
      { icon: '💎', title: 'Earn Commission', description: 'Receive payment automatically on resolution' }
    ]
  }
]

function PerspectiveTabs() {
  return (
    <section className="perspective-section section" id="how-it-works">
      <div className="perspective-bg"></div>
      <div className="container">
        <span className="section-label">How It Works</span>
        <h2 className="section-title">One Platform, Three Roles</h2>
        <p className="section-subtitle">
          Whether you're buying, selling, or resolving disputes — Zenland has you covered.
        </p>

        {/* All 3 perspectives displayed at once */}
        <div className="perspectives-grid">
          {perspectives.map((perspective) => (
            <div key={perspective.key} className="perspective-column" style={{ '--accent-color': perspective.color }}>
              <div className="perspective-header">
                <div className="perspective-icon-wrapper">
                  {perspective.icon}
                </div>
                <div className="perspective-text">
                  <span className="perspective-title">{perspective.title}</span>
                  <span className="perspective-subtitle">{perspective.subtitle}</span>
                </div>
              </div>

              <div className="steps-list">
                {perspective.steps.map((step, index) => (
                  <div key={index} className="step-item">
                    <div className="step-number">{index + 1}</div>
                    <div className="step-content">
                      <span className="step-emoji">{step.icon}</span>
                      <div className="step-text">
                        <span className="step-title">{step.title}</span>
                        <span className="step-description">{step.description}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PerspectiveTabs

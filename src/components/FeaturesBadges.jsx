import './FeaturesBadges.css'

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="22" height="22" rx="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="14" cy="14" r="3" fill="currentColor"/>
        <path d="M14 6V8M14 20V22M6 14H8M20 14H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Blockchain-Verified',
    description: 'Every transaction is recorded on-chain'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="11" width="18" height="13" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 11V8C8 5.23858 10.2386 3 13 3H15C17.7614 3 20 5.23858 20 8V11" stroke="currentColor" strokeWidth="2"/>
        <circle cx="14" cy="18" r="2" fill="currentColor"/>
      </svg>
    ),
    title: 'Non-Custodial',
    description: 'You control your funds at all times'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 14L13 17L18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Community Tested',
    description: 'Verified by BitcoinTalk community'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L24 9V19L14 25L4 19V9L14 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 13V17M14 9H14.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Trustless Process',
    description: 'Smart contracts eliminate middlemen'
  }
]

function FeaturesBadges() {
  return (
    <section className="features-badges">
      <div className="container">
        <div className="badges-grid">
          {features.map((feature, index) => (
            <div key={index} className="badge-item">
              <div className="badge-icon-wrapper">
                <div className="badge-icon">{feature.icon}</div>
              </div>
              <div className="badge-content">
                <span className="badge-title">{feature.title}</span>
                <span className="badge-description">{feature.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesBadges

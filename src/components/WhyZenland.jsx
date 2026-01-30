import './WhyZenland.css'

const comparisonData = [
  {
    feature: 'Access',
    zenland: 'Web3 wallet (MetaMask, etc.)',
    centralized: 'Email & password registration',
    zenlandIcon: '🔓',
    centralizedIcon: '📧'
  },
  {
    feature: 'Transaction',
    zenland: 'Stablecoins (USDT, USDC)',
    centralized: 'Credit card / PayPal',
    zenlandIcon: '💎',
    centralizedIcon: '💳'
  },
  {
    feature: 'Pricing',
    zenland: 'One-time fee per contract',
    centralized: 'Withdrawal fees + upgrades + ∞',
    zenlandIcon: '✨',
    centralizedIcon: '📊'
  },
  {
    feature: 'Commission-Free',
    zenland: 'Up to $2,000 at $0.00 fee',
    centralized: 'Not available',
    zenlandIcon: '🎁',
    centralizedIcon: '❌',
    zenlandHighlight: true
  },
  {
    feature: 'Security',
    zenland: 'Blockchain-based, audited',
    centralized: 'Single server / database',
    zenlandIcon: '🛡️',
    centralizedIcon: '🖥️'
  },
  {
    feature: 'Payout',
    zenland: 'Direct to your wallet',
    centralized: 'Platform → PayPal → Bank',
    zenlandIcon: '⚡',
    centralizedIcon: '🔄'
  }
]

function WhyZenland() {
  return (
    <section className="why-zenland section">
      <div className="container">
        <span className="section-label">The Difference</span>
        <h2 className="section-title">Why Zenland?</h2>
        <p className="section-subtitle">
          Zenland is a fully functional escrow platform with unique features for P2P trades.
          See how we compare to traditional marketplaces.
        </p>

        <div className="comparison-wrapper">
          <div className="comparison-header">
            <div className="header-feature"></div>
            <div className="header-zenland">
              <span className="header-badge zenland-badge">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Zenland
              </span>
            </div>
            <div className="header-centralized">
              <span className="header-badge centralized-badge">Traditional Marketplace</span>
            </div>
          </div>

          <div className="comparison-body">
            {comparisonData.map((row, index) => (
              <div key={index} className="comparison-row">
                <div className="row-feature">{row.feature}</div>
                <div className={`row-zenland ${row.zenlandHighlight ? 'highlight' : ''}`}>
                  <span className="row-icon">{row.zenlandIcon}</span>
                  <span>{row.zenland}</span>
                </div>
                <div className="row-centralized">
                  <span className="row-icon">{row.centralizedIcon}</span>
                  <span>{row.centralized}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyZenland

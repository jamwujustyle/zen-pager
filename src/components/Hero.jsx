import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      {/* Animated background elements */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge-wrapper">
            <span className="hero-badge">
              <span className="badge-dot"></span>
              Web3 Escrow Platform
            </span>
          </div>
          <h1 className="hero-title">
            Your Gateway to<br />
            <span className="text-gradient">Smart Contracts</span>
          </h1>
          <p className="hero-description">
            Zenland connects buyers and sellers through non-custodial smart contracts.
            The first Ethereum dApp for direct P2P exchange of any value — fully on-chain,
            trustless, and secure.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-large">
              Launch App
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn btn-secondary btn-large">
              Read Docs
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">6</span>
              <span className="stat-label">EVM Networks</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">$2K+</span>
              <span className="stat-label">Commission-Free</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Non-Custodial</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-glow"></div>
            <div className="hero-card-inner">
              <div className="hero-card-header">
                <div className="card-header-left">
                  <span className="step-indicator">01</span>
                  <span className="card-title">Create Contract</span>
                </div>
                <div className="network-badge">
                  <span className="network-dot"></span>
                  BNB Chain
                </div>
              </div>

              <div className="hero-card-content">
                <div className="form-preview">
                  <div className="form-field">
                    <label>Seller Wallet</label>
                    <div className="form-input">
                      <span className="wallet-icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <rect x="2" y="5" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M4 5V4C4 2.89543 4.89543 2 6 2H10C11.1046 2 12 2.89543 12 4V5" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </span>
                      <span className="wallet-address">0x3263f2b...74a66</span>
                      <span className="copy-icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                          <path d="M2 10V3C2 2.44772 2.44772 2 3 2H10" stroke="currentColor" strokeWidth="1.2"/>
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Amount</label>
                    <div className="form-input-amount">
                      <span className="amount-value">5,000</span>
                      <div className="token-selector">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%232775CA'/%3E%3Cpath d='M16 6v2.4m0 15.2V26m8-10h-2.4M10.4 16H8m13.66-5.66l-1.7 1.7m-7.92 7.92l-1.7 1.7m0-11.32l1.7 1.7m7.92 7.92l1.7 1.7' stroke='white' stroke-width='2'/%3E%3C/svg%3E" alt="USDC" className="token-icon" />
                        <span>USDC</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Buyer Protection</label>
                    <div className="protection-chips">
                      <button className="chip">7 Days</button>
                      <button className="chip active">14 Days</button>
                      <button className="chip">30 Days</button>
                    </div>
                  </div>

                  <div className="form-footer">
                    <div className="fee-row">
                      <span className="fee-label">Network Fee</span>
                      <span className="fee-value">~$2.00</span>
                    </div>
                    <div className="fee-row">
                      <span className="fee-label">Service Fee</span>
                      <span className="fee-value highlight">$0.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn btn-primary card-cta">
                Create Escrow Contract
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import './EscrowSection.css'

function EscrowSection() {
  return (
    <section className="escrow-section section" id="features">
      <div className="container escrow-container">
        <div className="escrow-content">
          <span className="section-badge">Buy & Sell P2P Without Trust</span>
          <h2 className="escrow-title">Escrow Smart Contracts</h2>
          <p className="escrow-description">
            Want to buy, or sell, online but don't trust the person? Use Zenland
            escrow smart contracts!
          </p>
          <p className="escrow-description">
            No control over the contract - we provide only the source code. Fill out
            the contract, send it to blockchain (deploy), and transfer the money.
          </p>

          <div className="trust-badges">
            <div className="trust-badge">
              <div className="trust-badge-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="trust-badge-content">
                <span className="trust-badge-label">Audited by</span>
                <span className="trust-badge-name">Quillhash</span>
              </div>
            </div>
            <div className="trust-badge">
              <div className="trust-badge-icon metamask">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 7L12 3L3.5 7M20.5 7V17L12 21M20.5 7L12 11M3.5 7V17L12 21M3.5 7L12 11M12 21V11" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="trust-badge-content">
                <span className="trust-badge-label">Login with web3 wallet</span>
                <span className="trust-badge-name">METAMASK</span>
              </div>
            </div>
          </div>

          <div className="network-costs">
            <p className="network-costs-title">
              Deploy on Ethereum mainnet with major stablecoins (USDT, USDC).
              Pay only the network gas fee — no hidden costs.
            </p>
            <div className="network-single">
              <div className="network-item featured">
                <div className="network-icon eth">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#627EEA"/><path d="M12 4V10.5L17 12.25L12 4Z" fill="white" fillOpacity="0.6"/><path d="M12 4L7 12.25L12 10.5V4Z" fill="white"/><path d="M12 16V20L17 13L12 16Z" fill="white" fillOpacity="0.6"/><path d="M12 20V16L7 13L12 20Z" fill="white"/></svg>
                </div>
                <div className="network-info">
                  <span className="network-name">Ethereum Mainnet</span>
                  <span className="network-desc">Deploy contracts on the most secure and decentralized network</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="escrow-visual">
          <div className="contract-form-card">
            <div className="contract-form-header">
              <h3>New Contract</h3>
            </div>
            <div className="contract-form-body">
              <div className="form-group">
                <label>Contractee (buyer)</label>
                <div className="form-input-display">0xe967be748f7bd760da3647017c8a6632631b102</div>
              </div>
              <div className="form-group">
                <label>Contractor (seller)</label>
                <div className="form-input-display">0xe3263f2b1028f7bd760da3647017c8967be74a66</div>
              </div>
              <div className="form-group">
                <label>Contract name <span className="optional">(optional)</span></label>
                <div className="form-input-display placeholder">Example.com</div>
              </div>
              <div className="form-group">
                <label>Contract details <span className="optional">(optional)</span></label>
                <div className="form-textarea-display">
                  Age: 6 years<br/>
                  Type: branded<br/>
                  Domain rating: 40<br/>
                  Domain authority: 45<br/>
                  Total backlinks: 2384<br/>
                  Referring domains: 709<br/>
                  Spam score: 1%
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Due date</label>
                  <div className="form-input-display">03/15/2023 16:00</div>
                </div>
              </div>
              <div className="form-group">
                <label>Buyer protection time</label>
                <div className="form-input-with-unit">
                  <span>2</span>
                  <span className="unit">Days</span>
                </div>
              </div>
              <div className="form-group">
                <label>Agreed amount</label>
                <div className="form-input-with-unit">
                  <span>5000</span>
                  <span className="unit">USDT(ERC20)</span>
                </div>
              </div>
              <div className="form-footer">
                <div className="fee-info">
                  <span>Zenland fee: <strong>$50.00</strong></span>
                  <span className="fee-split">1% · max $50</span>
                </div>
                <div className="form-actions">
                  <button className="btn-clear">Clear</button>
                  <button className="btn btn-primary">Create</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EscrowSection

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
              Choice between 4 blockchain networks and major stablecoins.
              Average price per contract deployment is less than 1 cup of coffee (except Ethereum)!
            </p>
            <div className="network-grid">
              <div className="network-item">
                <div className="network-icon bnb">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#F0B90B"/><path d="M10 4L12.5 6.5L10 9L7.5 6.5L10 4Z" fill="white"/><path d="M14 8L16.5 10.5L14 13L11.5 10.5L14 8Z" fill="white"/><path d="M6 8L8.5 10.5L6 13L3.5 10.5L6 8Z" fill="white"/><path d="M10 12L12.5 14.5L10 17L7.5 14.5L10 12Z" fill="white"/></svg>
                </div>
                <span className="network-name">BNB</span>
                <span className="network-price">~$2</span>
              </div>
              <div className="network-item">
                <div className="network-icon arb">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#28A0F0"/><path d="M6 14L10 6L14 14H11L10 12L9 14H6Z" fill="white"/></svg>
                </div>
                <span className="network-name">ARB</span>
                <span className="network-price">~$0.005</span>
              </div>
              <div className="network-item">
                <div className="network-icon eth">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#627EEA"/><path d="M10 3V8.5L14 10.25L10 3Z" fill="white" fillOpacity="0.6"/><path d="M10 3L6 10.25L10 8.5V3Z" fill="white"/><path d="M10 13.5V17L14 11L10 13.5Z" fill="white" fillOpacity="0.6"/><path d="M10 17V13.5L6 11L10 17Z" fill="white"/></svg>
                </div>
                <span className="network-name">ETH</span>
                <span className="network-price">~$40</span>
              </div>
              <div className="network-item">
                <div className="network-icon matic">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#8247E5"/><path d="M13 8L10.5 6.5L8 8V11L10.5 12.5L13 11V8Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                </div>
                <span className="network-name">MATIC</span>
                <span className="network-price">~$0.2</span>
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
                  <span className="unit">USDT(BEP20)</span>
                </div>
              </div>
              <div className="form-footer">
                <div className="fee-info">
                  <span>Zenland fee: <strong>$43.75</strong></span>
                  <span className="fee-split">Zenland fee payer: 50/50</span>
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

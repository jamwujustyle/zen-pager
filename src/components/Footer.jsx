import './Footer.css'

const links = {
  product: [
    { name: 'Main Website', url: 'https://zen.land' },
    { name: 'Escrow & Marketplace dApp', url: 'https://app.zen.land' },
    { name: 'Documentation', url: 'https://docs.zen.land' },
    { name: 'Whitepaper', url: 'https://zen.land/whitepaper.pdf' }
  ],
  token: [
    { name: '$ZENF Token', url: 'https://token.zen.land' },
    { name: '$ZENF on Uniswap', url: 'https://app.uniswap.org/#/swap?outputCurrency=0xE9b7B5D5e8d2BCC78884F9F9099bfA42A9e5c1A5' },
    { name: '$ZENF on PancakeSwap', url: 'https://pancakeswap.finance/swap?outputCurrency=0x382ec3f9f2e79b03abf0127f3aa985b148cef6d7&chain=bsc' }
  ],
  social: [
    { name: 'Twitter', url: 'https://twitter.com/Zenland_app' },
    { name: 'Telegram', url: 'https://t.me/zenlandofficial' }
  ]
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="#3182CE" strokeWidth="2.5"/>
                <path d="M12 20L17.5 25.5L28 15" stroke="#3182CE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Zenland</span>
            </div>
            <p className="footer-tagline">
              Smart contract escrow solution for peer-to-peer trade.
              Live on 6 EVM networks. Powered by the native utility token - $ZENF.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                {links.product.map((link, i) => (
                  <li key={i}><a href={link.url}>{link.name}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Token</h4>
              <ul>
                {links.token.map((link, i) => (
                  <li key={i}><a href={link.url}>{link.name}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Community</h4>
              <ul>
                {links.social.map((link, i) => (
                  <li key={i}><a href={link.url}>{link.name}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Zenland. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

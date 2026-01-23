import React from 'react';

function Hero() {
    return ( 
    <>
      <section className="container my-5">
  <h4 className="mb-4">To create a ticket, select a relevant topic</h4>

  <div className="row">
    {/* Column 1 */}
    <div className="col-md-4 mb-4">
      <h6 className="mb-3">Account Opening</h6>
      <ul className="list-unstyled">
        <li className="mb-2"><a href="#" className="text-decoration-none">Online Account Opening</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Offline Account Opening</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Company, Partnership and HUF Account Opening</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">NRI Account Opening</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Charges at Zerodha</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Zerodha IDFC FIRST Bank 3-in-1 Account</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Getting Started</a></li>
      </ul>
    </div>

    {/* Column 2 */}
    <div className="col-md-4 mb-4">
      <h6 className="mb-3">Your Zerodha Account</h6>
      <ul className="list-unstyled">
        <li className="mb-2"><a href="#" className="text-decoration-none">Login Credentials</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Account Modification and Segment Addition</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">DP ID and Bank Details</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Your Profile</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Transfer and Conversion of Shares</a></li>
      </ul>
    </div>

    {/* Column 3 */}
    <div className="col-md-4 mb-4">
      <h6 className="mb-3">Trading and Markets</h6>
      <ul className="list-unstyled">
        <li className="mb-2"><a href="#" className="text-decoration-none">Margin / Leverage, Product and Order Types</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Kite Web and Mobile</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Trading FAQs</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Corporate Actions</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Sentinel</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Kite API</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Pi and Other Platforms</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Stockreports+</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">GTT</a></li>
      </ul>
    </div>
  </div>

  {/* Second Row */}
  <div className="row mt-4">
    <div className="col-md-4 mb-4">
      <h6 className="mb-3">Funds</h6>
      <ul className="list-unstyled">
        <li className="mb-2"><a href="#" className="text-decoration-none">Adding Funds</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Fund Withdrawal</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">eMandates</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Adding Bank Accounts</a></li>
      </ul>
    </div>

    <div className="col-md-4 mb-4">
      <h6 className="mb-3">Console</h6>
      <ul className="list-unstyled">
        <li className="mb-2"><a href="#" className="text-decoration-none">Reports</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Ledger</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Portfolio</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">60 Day Challenge</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">IPO</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Referral Program</a></li>
      </ul>
    </div>

    <div className="col-md-4 mb-4">
      <h6 className="mb-3">Coin</h6>
      <ul className="list-unstyled">
        <li className="mb-2"><a href="#" className="text-decoration-none">Understanding Mutual Funds</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">About Coin</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Buying and Selling through Coin</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Starting an SIP</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Managing your Portfolio</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Coin App</a></li>
        <li className="mb-2"><a href="#" className="text-decoration-none">Moving to Coin</a></li>
      </ul>
    </div>
  </div>
</section>

    </> 
    );
}

export default Hero;
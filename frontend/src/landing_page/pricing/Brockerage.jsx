import React from 'react';

function Brockerage() {
    return ( 
    <>
      <section className="container my-5 border-top pb-5">
        {/* Header Row */}
        <div className="row mb-4 pt-5">
        <div className="row align-items-center">
            <div className="col-md-6 text-center text-md">
              <a href="#" className="text-decoration-none fw-medium">
                Brokerage calculator
              </a>
            </div>

            <div className="col-md-6 text-center text-md">
              <a href="#" className="text-decoration-none fw-medium">
                List of charges
              </a>
            </div>
          </div>

        </div>

        {/* Bullet Points */}
        <div className="row">
          <div className="col-md-8">
            <ul className="text-muted small ps-3">
              <li className="mb-2">
                Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
              </li>
              <li className="mb-2">
                Digital contract notes will be sent via e-mail.
              </li>
              <li className="mb-2">
                Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
              </li>
              <li className="mb-2">
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
              </li>
              <li className="mb-2">
                For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
              </li>
              <li className="mb-2">
                If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
              </li>
            </ul>
          </div>
        </div>
      </section>

    </> 
    );
}

export default Brockerage;
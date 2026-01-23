import React from 'react';

function Hero() {
    return ( 
    <>
      <section className="container my-5  pt-5">
        <div className="row text-center g-4 mt-5 mb-5">

          {/* Card 1 */}
          <div className="col-md-4">
            <img src='photos/pricing0.svg'/>
            <h5 className="mt-3">Free equity delivery</h5>
            <p className="text-muted small">
              All equity delivery investments (NSE, BSE),<br />
              are absolutely free — ₹0 brokerage.
            </p>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <img src='photos/intradayTrades.svg'/>
            <h5 className="mt-3">Intraday and F&amp;O trades</h5>
            <p className="text-muted small">
              Flat ₹20 or 0.03% (whichever is lower)<br />
              per executed order on intraday trades across<br />
              equity, currency, and commodity.
            </p>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
           <img src='photos/pricing0.svg'/>
            <h5 className="mt-3">Free direct MF</h5>
            <p className="text-muted small">
              All direct mutual fund investments are<br />
              absolutely free.
            </p>
          </div>

        </div>
      </section>

    </>
     );
}

export default Hero;
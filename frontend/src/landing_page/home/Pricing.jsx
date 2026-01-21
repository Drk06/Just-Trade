import React from 'react';

function Pricing() {
    return ( 
    <>
     <div className="container my-5 pb-5">
  <div className="row align-items-center ">
    {/* Left section */}
    <div className="col-4 ms-5">
      <h2 className="mb-3">Unbeatable pricing</h2>
      <p className="text-muted">
        We pioneered the concept of discount broking and price transparency
        in India. Flat fees and no hidden charges.
      </p>
      <a href="#" className="text-primary text-decoration-none">
        See pricing →
      </a>
    </div>

    <div className="col-2"></div>

    {/* Right section */}
    <div className="col-md-5">
      <div className="row border rounded overflow-hidden text-center">
        <div className="col-6 p-4 border-end">
          <h2 className="fw-bold">₹0</h2>
          <p className="text-muted mb-0">
            Free equity delivery and direct mutual funds
          </p>
        </div>

        <div className="col-6 p-4">
          <h2 className="fw-bold">₹20</h2>
          <p className="text-muted mb-0">
            Intraday and F&amp;O
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


    </> 
    );
}

export default Pricing;
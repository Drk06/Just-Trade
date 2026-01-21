import React from 'react';

function Education() {
    return ( 
    <>
      <div className="container my-5 pt-5 pb-5">
  <div className="row align-items-center gx-5">
    {/* Left: Image */}
    <div className="col-md-6 text-center">
      <img
        src="photos/education.svg" 
        alt="Varsity illustration"
        className="img-fluid"
      />
    </div>

    {/* Right: Text content */}
    <div className="col-md-6">
      <h2 className="mb-3">Free and open market education</h2>

      <p className="text-muted">
        Varsity, the largest online stock market education book in the world,
        covering everything from the basics to advanced trading.
      </p>

      <a href="#" className="text-primary text-decoration-none d-inline-block mb-4">
        Varsity →
      </a>

      <p className="text-muted">
        TradingQ&amp;A, the most active trading and investment community in
        India for all your market related queries.
      </p>

      <a href="#" className="text-primary text-decoration-none">
        TradingQ&amp;A →
      </a>
    </div>
  </div>
</div>

    </> 
    );
}

export default Education;
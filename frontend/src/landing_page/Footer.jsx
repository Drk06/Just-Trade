import React from 'react';

function Footer() {
    return ( 
    <>
      <footer className="bg-light py-5">
  <div className="container">
    <div className="row gy-4">
      {/* Left: Logo & copyright */}
      <div className="col-md-3">
        <h5 className="fw-bold"><img src="photos/logo.svg" style={{width:"50%"}}/></h5>
        <p className="text-muted small mb-2">
          © 2010 - 2024, Not Zerodha Broking Ltd.<br />
          All rights reserved.
        </p>

        {/* Social icons */}
        <div className="d-flex gap-3">
          <i className="bi bi-twitter"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-telegram"></i>
        </div>
      </div>

      {/* Company */}
      <div className="col-md-3">
        <h6 className="fw-semibold mb-3">Company</h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-muted text-decoration-none">About</a></li>
          <li><a href="#" className="text-muted text-decoration-none">Products</a></li>
          <li><a href="#" className="text-muted text-decoration-none">Pricing</a></li>
          <li><a href="#" className="text-muted text-decoration-none">Referral programme</a></li>
          <li><a href="#" className="text-muted text-decoration-none">Careers</a></li>
          <li><a href="#" className="text-muted text-decoration-none">Zerodha.tech</a></li>
          <li><a href="#" className="text-muted text-decoration-none">Press &amp; media</a></li>
          <li><a href="#" className="text-muted text-decoration-none">Zerodha cares (CSR)</a></li>
        </ul>
      </div>

      {/* Support */}
      <div className="col-md-3">
        <h6 className="fw-semibold mb-3">Support</h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
          <li><a href="#" className="text-muted text-decoration-none">Support portal</a></li>
          <li><a href="#" className="text-muted text-decoration-none">Z-Connect blog</a></li>
          <li><a href="#" className="text-muted text-decoration-none">List of charges</a></li>
          <li><a href="#" className="text-muted text-decoration-none">Downloads &amp; resources</a></li>
        </ul>
      </div>

      {/* Account */}
      <div className="col-md-3">
        <h6 className="fw-semibold mb-3">Account</h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-muted text-decoration-none">Open an account</a></li>
          <li><a href="#" className="text-muted text-decoration-none">Fund transfer</a></li>
          <li><a href="#" className="text-muted text-decoration-none">60 day challenge</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    </>
     );
}

export default Footer;
import React from 'react';

function Stats() {
    return ( 
    <>
       <div className="container my-5 mt-5">
    <div className="row align-items-center p-5">
    
    <div className="col-md-6 pt-5">
      <h2 className="mb-4">Trust with confidence</h2>

      <div className="mb-4">
        <h5>Customer-first always</h5>
        <p>
          That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
          worth of equity investments.
        </p>
      </div>

      <div className="mb-4">
        <h5>No spam or gimmicks</h5>
        <p>
          No gimmicks, spam, &quot;gamification&quot;, or annoying push
          notifications. High quality apps that you use at your pace, the way
          you like.
        </p>
      </div>

      <div className="mb-4">
        <h5>The Zerodha universe</h5>
        <p>
          Not just an app, but a whole ecosystem. Our investments in 30+ fintech
          startups offer you tailored services specific to your needs.
        </p>
      </div>

      <div className="mb-4">
        <h5>Do better with money</h5>
        <p>
          With initiatives like Nudge and Kill Switch, we don't just facilitate
          transactions, but actively help you do better with your money.
        </p>
      </div>
    </div>

    <div className="col-md-6 text-center ">
      <img
        src="photos/ecosystem.png"  
        alt="Trust illustration"
        className="img-fluid rounded"
        style={{width:"80%" , height:"80%"}}
      />
      <div>
        <a href="#" style={{textDecoration:"none"}} className='m-2'> Explore our products</a>
        <i className="fa-solid fa-arrow-right-long"></i>
        <a href="#" style={{textDecoration:"none"}} className='m-2'> Try Kite Demo</a>
      </div>
    </div>
  </div>
</div>

    </> 
    );
}

export default Stats;
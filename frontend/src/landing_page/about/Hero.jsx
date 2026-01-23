
function Hero() {
    return ( 
    <>
     <div className="container my-5">
      {/* Heading */}
      <h2 className="text-center fw-normal fs-3 mb-5 p-5  mt-5 mb-5" style={{widty:"30%"}}>
        We pioneered the discount broking model in India.
        <br />
        Now, we are breaking ground with our technology.
      </h2>

      {/* Content */}
      <div className="row gx-5 mt-5 border-top p-5">
        {/* Left column */}
        <div className="col-md-6 text-muted">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal of
            breaking all barriers that traders and investors face in India in terms
            of cost, support, and technology. We named the company Zerodha, a
            combination of Zero and &quot;Rodha&quot;, the Sanskrit word for barrier.
          </p>

          <p>
            Today, our disruptive pricing models and in-house technology have made
            us the biggest stock broker in India.
          </p>

          <p>
            Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
          </p>
        </div>

        {/* Right column */}
        <div className="col-md-6 text-muted">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p>
            <span className="text-primary">Rainmatter</span>, our fintech fund and
            incubator, has invested in several fintech startups with the goal of
            growing the Indian capital markets.
          </p>

          <p>
            And yet, we are always up to something new. Catch up on the latest
            updates on our blog or see what the media is saying about us.
          </p>
        </div>
      </div>
    </div>

    </> 
  );
}

export default Hero;
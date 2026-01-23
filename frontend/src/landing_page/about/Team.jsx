
function Team() {
    return ( 
    <>
      <section className="container my-5 mb-5">
      <h2 className="text-center mb-5">People</h2>

      <div className="row align-items-center">
        {/* Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0 ">
          <img
            src="photos/nithinKamath.jpg" 
            alt="Nithin Kamath"
            className="rounded-circle img-fluid"
            style={{ maxWidth: "220px" }}
          />
          <h5 className="mt-3 mb-0">Nithin Kamath</h5>
          <p className="text-muted">Founder, CEO</p>
        </div>

        {/* Content */}
        <div className="col-md-6 pe-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="#" className="text-decoration-none">Homepage</a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none">TradingQnA</a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none">Twitter</a>
          </p>
        </div>
      </div>
    </section>
    </> 
    );
}

export default Team;
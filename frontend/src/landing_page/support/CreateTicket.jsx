import React from 'react';

function CreateTicket() {
    return ( 
    <>
         <section className="py-5 mt-5 pb-5" style={{ backgroundColor: "#3b7ecb" }}>
            <div className="container text-white">
              
              {/* Top Row */}
              <div className="d-flex justify-content-between align-items-center mb-5 ps-5 pe-5">
                <h6 className="fw-medium mb-0 ">Support Portal</h6>
                 <div>
                   <a href="#" className="text-white text-decoration-underline me-5">
                   Track Tickets
                  </a>
                 </div>
              </div>

              {/* Main Content */}
              <div className="row">
                
                {/* Left Section */}
                <div className="col-md-6 ps-5">
                  <h3 className="fw-normal mb-4">
                    Search for an answer or browse help topics<br />
                    to create a ticket
                  </h3>

                  <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="Eg: how do i activate F&O, why is my order getting rejected..."
                  />

                  <div className="d-flex flex-wrap gap-3 small">
                    <a href="#" className="text-white text-decoration-underline">
                      Track account opening
                    </a>
                    <a href="#" className="text-white text-decoration-underline">
                      Track segment activation
                    </a>
                    <a href="#" className="text-white text-decoration-underline">
                      Intraday margins
                    </a>
                    <a href="#" className="text-white text-decoration-underline">
                      Kite user manual
                    </a>
                  </div>
                </div>

                <div className="col-md-1"></div>

                {/* Right Section */}
                <div className="col-md-5 mt-5 mt-md-0">
                  <h5 className="fw-medium mb-3">Featured</h5>
                  <ol className="ps-3">
                    <li className="mb-2">
                      <a href="#" className="text-white text-decoration-underline">
                        Current Takeovers and Delisting – January 2024
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white text-decoration-underline">
                        Latest Intraday leverages – MIS & CO
                      </a>
                    </li>
                  </ol>
                </div>

              </div>
            </div>
          </section>
    </>
     );
}

export default CreateTicket;
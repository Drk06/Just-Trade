import React from 'react';

function Awards() {
    return ( 
    <>
      <div className="container mt-5">
        <div className="row mb-5">
          <div className="col-6">
            <img src='photos/largestBroker.svg'/>
          </div>

           <div className="col-6 mb-5">
             <h1 className='mt-5'>Largest stock broker in India</h1>
             <p>42+ million Zerodha clients contribute to over 15% of all retail order
                 volumes in India daily by trading and investing in:</p>
                 <div className="container">
                    <div className="row">
                     
                      <div className="col-md-6 p-4">
                        <ul>
                          <li>Futures and Options</li>
                          <li>Commodity derivatives</li>
                          <li>Currency derivatives</li>
                        </ul>
                      </div>

                    
                      <div className="col-md-6 p-4">
                        <ul>
                          <li>Stocks &amp; IPOs</li>
                          <li>Direct mutual funds</li>
                          <li>Bonds and Government securities</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                   <img src='photos/pressLogos.png' style={{width:"80%"}}/>
            </div>
            
        </div>
      </div>
    </>
     );
}

export default Awards;
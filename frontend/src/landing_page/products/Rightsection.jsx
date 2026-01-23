import React from 'react';

function RightSection( {
    imageUrl,
    title,
    description,
    demoLink,
    learnMoreLink,
  }) {
  return (
    <section className="container my-5">
      <div className="row align-items-center">

        {/* Left Content */}
        <div className="col-md-5 ps-5">
          <h2 className="mb-3">{title}</h2>

          <p className="text-muted mb-3">
            {description}
          </p>

          <div className="mb-3">
            <a href={learnMoreLink} className="text-decoration-none">
              Learn more →
            </a>
          </div>
        </div>

        <div className="col-md-1"></div>

        {/* Right Image */}
        <div className="col-md-6 mb-4 mb-md-0 ps-5">
          <img
            src={imageUrl}
            alt={title}
            style={{ width: "80%" }}
          
          />
        </div>

      </div>
    </section>

    );
}

export default RightSection;
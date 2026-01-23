import React from 'react';

function LeftSection({
     imageUrl,
    title,
    description,
    demoLink,
    learnMoreLink,
    playStoreLink,
    appStoreLink
  }) {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        
        {/* Left Image */}
        <div className="col-md-7 mb-4 mb-md-0 ps-5">
          <img
            src={imageUrl}
            alt={title}
            style={{width:"70%" }}
           
            
          />
        </div>

        {/* Right Content */}
        <div className="col-md-5">
          <h2 className="mb-3">{title}</h2>

          <p className="text-muted mb-3">
            {description}
          </p>

          <div className="mb-3">
            <a href={demoLink} className="me-4 text-decoration-none">
              Try demo →
            </a>
            <a href={learnMoreLink} className="text-decoration-none">
              Learn more →
            </a>
          </div>

          <div className="d-flex gap-3">
            <a href={playStoreLink}>
              <img
                src="photos/googlePlayBadge.svg"
                alt="Google Play"
                height="40"
              />
            </a>

            <a href={appStoreLink}>
              <img
                src="photos/appstoreBadge.svg"
                alt="App Store"
                height="40"
              />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default LeftSection;
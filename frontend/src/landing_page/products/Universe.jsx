import React from 'react';

function Universe() {
    
      const items = [
    {
      name: "smallcase",
      subtitle: "Thematic investment platform",
      logo: "photos/smallcaseLogo.png",
    },
    {
      name: "Streak",
      subtitle: "Algo & strategy platform",
      logo: "photos/streakLogo.png",
    },
    {
      name: "Sensibull",
      subtitle: "Options trading platform",
      logo: "photos/sensibullLogo.svg",
    },
    {
      name: "Zerodha Fund House",
      subtitle: "Asset management",
      logo: "photos/zerodhaFundhouse.png",
    },
    {
      name: "GoldenPi",
      subtitle: "Bonds trading platform",
      logo: "photos/goldenpiLogo.png",
    },
    {
      name: "Ditto",
      subtitle: "Insurance advisory",
      logo: "photos/dittoLogo.png",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 text-center pt-5">
        <h2 className="text-3xl font-semibold text-gray-900">
          The Zerodha Universe
        </h2>

        <p className="mt-3 text-gray-500 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="mt-16 row mt-5 ">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex col-4 items-center "
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-12 object-contain"
                style={{width:"30%"}}
              />
              <p className="mt-2 text-sm text-muted mb-5">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

       <button className="btn btn-primary px-4 py-2 mb-5 fw-semibold">
  Sign up now
</button>

      </div>
    </section>
   );
}

export default Universe;
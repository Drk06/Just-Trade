
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './Rightsection'
import Universe from './Universe';

function ProductPage() {
    return ( 
    <>
      <Hero/>
      <LeftSection imageUrl ="photos/kite.png"
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        demoLink=""
        learnMoreLink=""
        playStoreLink=""
        appStoreLink=""/>

      <RightSection imageUrl ="photos/console.png"
        title="Console"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        demoLink=""
        learnMoreLink=""
        />

       <LeftSection imageUrl ="photos/kiteconnect.png"
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        demoLink=""
        learnMoreLink=""
        playStoreLink=""
        appStoreLink=""/>

        <RightSection imageUrl ="photos/console.png"
        title="Kite Connect Api"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        demoLink=""
        learnMoreLink=""
        />

         <LeftSection imageUrl ="photos/varsity.png"
        title="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        demoLink=""
        learnMoreLink=""
        playStoreLink=""
        appStoreLink=""/>
       <div className="d-flex justify-content-center align-items-center">
        <p className="text-center mb-5">
          Want to know more about our technology stack? Check out the Zerodha.tech blog.
        </p>
      </div>

        
      <Universe/>
    </>
     );
}

export default ProductPage;
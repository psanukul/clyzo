import Banner from "./component/Banner.jsx";
import Category from "./component/Category.jsx";
import Categories from "./component/Categories/Categories.jsx";
import GlobalPrinciple from "./component/GlobalPrinciple/GlobalPrinciple.jsx";
import Testimonials from './component/Testimonials.jsx'
import Footer from "./component/Footer.jsx";
import ContactUs from "./component/ContactUs.jsx";
import "@fontsource/oswald"; // Regular font
import "@fontsource/questrial"; // Questrial font


import PopularExcipients from "./component/PopularExcipients/PopularExcipients.jsx";
import OtherServices from "./component/OtherServices/OtherServices.jsx";
import ResourcesDowonloads from "./component/ResourcesDowonloads/ResourcesDowonloads.jsx";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="max-w-full overflow-hidden">
      <Banner />
      <Category />
      <Categories />
      <GlobalPrinciple />
      <Testimonials/>
      <PopularExcipients/>
      <OtherServices/>
       <ResourcesDowonloads/>
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default App;

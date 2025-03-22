import Banner from "./component/Banner.jsx";
import Category from "./component/Category.jsx";
import Categories from "./component/Categories/Categories.jsx";
import GlobalPrinciple from "./component/GlobalPrinciple/GlobalPrinciple.jsx";
import Testimonials from './component/Testimonials.jsx'
import Footer from "./component/Footer.jsx";
import ContactUs from "./component/ContactUs.jsx";
import "@fontsource/oswald"; // Regular font
import "@fontsource/questrial"; // Questrial font


function App() {
  return (
    <div className="max-w-full overflow-hidden">
      <Banner />
      <Category />
      <Categories />
      <GlobalPrinciple />
      <Testimonials/>
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default App;

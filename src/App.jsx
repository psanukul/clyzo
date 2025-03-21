import Banner from "./component/Banner.jsx";
import Category from "./component/Category.jsx";
import Categories from "./component/Categories/Categories.jsx";
import GlobalPrinciple from "./component/GlobalPrinciple/GlobalPrinciple.jsx";
function App() {
  return (
    <div className="max-w-full overflow-hidden">
      <Banner />
      <Category />
      <Categories />
      <GlobalPrinciple />
    </div>
  );
}

export default App;

import "./App.css";
import Banner from "./component/banner";
import Category from "./component/Category";
import Categories from "./Component/Categories/Categories.jsx";
import GlobalPrinciple from "./Component/GlobalPrinciple/GlobalPrinciple.jsx";

function App() {
  return (
    <div>
      <Banner />
      <Category />
      <Categories />
      <GlobalPrinciple />
    </div>
  );
}

export default App;

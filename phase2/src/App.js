import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ProductList from "./components/Products/ProductList.jsx";
import products from "./components/Products/productsData.js";

function App() {
  const [filteredProd, setFilteredProd] = useState(products);
  const [title, setTitle] = useState("OUR WARCHS LISTS");
  const handleFilterChange = (category) => {
    if (category === "all") {
      setFilteredProd(products);
      setTitle("OUR WARCHS LISTS");
    } else {
      setFilteredProd(
        products.filter((product) => product.category === category)
      );
      setTitle(`${category} LIST`);
    }
  };

  return (
    <>
      <Navbar onFilterChange={handleFilterChange} title={title} />
      <ProductList products={filteredProd} />
      <Footer />
    </>
  );
}

export default App;

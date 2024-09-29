import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ProductList from "./components/Products/ProductList.jsx";

const products = [
  {
    name: "CLASSIC LEATHER",
    category: "Rolex",
    price: 199.99,
    image: "../imgs/watch1.jpg",
    info: "stylish leather watch with a minimalist dial design.",
  },
  {
    name: "ELEGANT GOLD",
    category: "Rolex",
    price: 499.99,
    image: "../imgs/watch2.jpg",
    info: "luxurious gold watch perfect for special occasions.",
  },
  {
    name: "MODERN CHRONO",
    category: "Rolex",
    price: 349.99,
    image: "../imgs/watch3.jpg",
    info: "modern watch with chronograph function and stainless steel strap.",
  },
  {
    name: "SPORTY VIBE",
    category: "Casio",
    price: 299.49,
    image: "../imgs/watch4.jpg",
    info: "sports watch with durable rubber strap and water resistance.",
  },
  {
    name: "SILVER SHINE",
    category: "Casio",
    price: 399.99,
    image: "../imgs/watch5.jpg",
    info: "sleek silver watch with a brushed finish and elegant design.",
  },
  {
    name: "DIGITAL PRO",
    category: "Citizen",
    price: 249.99,
    image: "../imgs/watch6.jpg",
    info: "multifunctional digital watch with timer, alarm, and light features.",
  },
  {
    name: "CLASSIC AUTOMATIC",
    category: "Citizen",
    price: 599.99,
    image: "../imgs/watch7.jpg",
    info: "automatic mechanical watch with a classic design.",
  },
  {
    name: "AUTOMATIC PRO",
    category: "Citizen",
    price: 599.99,
    image: "../imgs/watch8.jpg",
    info: "sleek silver watch with a brushed finish and elegant design.",
  },
];

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

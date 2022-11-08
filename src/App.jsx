import Basket from "./components/Basket";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Basket products={products}></Basket>
      <ProductList products={products}></ProductList>
    </div>
  );
}

export default App;

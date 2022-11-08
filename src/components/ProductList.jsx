import React from "react";
import Product from "./Product";

function ProductList(props) {
  return (
    <main className="ProductList">
      {props.products.map((product) => (
        <Product key={product.id} {...product}></Product>
      ))}
    </main>
  );
}

export default ProductList;

import React from "react";
import { ProductList } from "./ProductList";

const Home = () => {
  return (
    <div className="py-5 bg-cool">
      <h1 className="text-center font-light text-4xl">Product</h1>
      <ProductList />
    </div>
  );
};

export default Home;

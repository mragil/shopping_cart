import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const products = await axios(
        `https://intense-retreat-74340.herokuapp.com/products`
      );
      setProducts(products.data);
      setIsLoading(false);
    };
    fetchData();
    return () => {
      setProducts([]);
    };
  }, []);
  return (
    <div className="mt-5 flex flex-wrap justify-evenly flex-row overflow-hidden md:w-full">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <h1>Loading...</h1>
        </div>
      ) : (
        products.map((item) => <ProductCard product={item} key={item.id} />)
      )}
    </div>
  );
};

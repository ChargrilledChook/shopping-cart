import React from "react";
import Product from "./Product";

const Shop = (props) => {
  const products = (num) => {
    const result = [];

    for (let i = 0; i <= num; i++) {
      result.push(<Product id={i} />);
    }
    return result;
  };
  return <main className="shop">{products(20)}</main>;
};

export default Shop;

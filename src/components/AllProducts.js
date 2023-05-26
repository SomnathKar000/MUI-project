import React from "react";
import SingleProducts from "./SingleProducts";
import { useSelector } from "react-redux";

const AllProducts = () => {
  const cattItems = useSelector((state) => state.cart.cartItems);
  return (
    <div>
      {cattItems.map((item, index) => {
        return <SingleProducts product={item} key={index} />;
      })}
    </div>
  );
};

export default AllProducts;

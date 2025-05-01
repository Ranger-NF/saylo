"use client";

import React, { useEffect } from "react";
import { Navbar } from "../blocks/navigation/navBar";
import { ProductList } from "../blocks/products/components/productList";
import {
  resetAddressStatus,
  selectAddressStatus,
} from "../blocks/address/addressSlice";
import { useDispatch, useSelector } from "react-redux";
// import { Footer } from "../blocks/footer/footer";

export const HomePage = () => {
  const dispatch = useDispatch();
  const addressStatus = useSelector(selectAddressStatus);

  useEffect(() => {
    if (addressStatus === "fulfilled") {
      dispatch(resetAddressStatus());
    }
  }, [addressStatus]);

  return (
    <>
      <Navbar isProductList={true} />
      <ProductList />
      {/* <Footer /> */}
    </>
  );
};

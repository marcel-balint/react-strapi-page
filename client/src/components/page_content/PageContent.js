import React, { useEffect, useState } from "react";
import FeaturedProducts from "./FeaturedProducts";

import "./PageContent.css";

const PageContent = () => {
  const [featuredProducts, setFeaturedProducts] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(
        "http://localhost:1337/api/featured-products?populate=image"
      );
      const { data } = await response.json();
      const products = data?.map((product) => {
        return {
          title: product?.attributes?.title,
          image: product?.attributes?.image?.data[0]?.attributes?.url,
        };
      });
      setFeaturedProducts(products);
      console.log(featuredProducts);
    } catch (error) {
      console.log("Something went wrong.", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main">
      <FeaturedProducts featuredProducts={featuredProducts} />
    </div>
  );
};

export default PageContent;

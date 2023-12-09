import React, { useEffect, useState } from "react";
import FeaturedProducts from "./FeaturedProducts";
import jeansBanner from "../../media/large_5jeans.jpg";
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
      <article>
        <div className="article-content">
          <div className="article-image__box">
            <img src={jeansBanner} alt="Jeans" />
            <div className="article-text">
              <h2>Levi's Jeans</h2>
              <p className="article-para">
                Browse more than one thousand authentic Vintage Levi's Jeans.
                Pick your favourite model below.
              </p>
              <div className="article-buttons">
                <p>
                  <span>501</span>
                </p>
                <p>
                  <span>502</span>
                </p>
                <p>
                  <span>504</span>
                </p>
                <p>
                  <span>505</span>
                </p>
                <p>
                  <span>511</span>
                </p>
                <p>
                  <span>512</span>
                </p>
                <p>
                  <span>550</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PageContent;

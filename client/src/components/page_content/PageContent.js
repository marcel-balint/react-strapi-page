import React, { useEffect, useState } from "react";
import FeaturedProducts from "./FeaturedProducts";
import jeansBanner from "../../media/large_5jeans.jpg";
import "./PageContent.css";
import FitProducts from "./FitProducts";
import DownloadBanner from "./DownloadBanner";
import BrandProducts from "./BrandProducts";

// Api call
const fetchData = async (apiEndpoint) => {
  try {
    const response = await fetch(apiEndpoint);
    const { data } = await response.json();
    return data?.map((product) => ({
      title: product?.attributes?.title,
      image: product?.attributes?.image?.data[0]?.attributes?.url,
    }));
  } catch (error) {
    console.log("Something went wrong.", error);
    return null;
  }
};

const PageContent = () => {
  const [featuredProducts, setFeaturedProducts] = useState(null);
  const [fitProducts, setFitProducts] = useState(null);
  const [brandProducts, setBrandProduncts] = useState(null);

  useEffect(() => {
    // Get data from different api endpoints
    const fetchDataProducts = async () => {
      setFeaturedProducts(
        await fetchData(
          "http://localhost:1337/api/featured-products?populate=image"
        )
      );
      setFitProducts(
        await fetchData("http://localhost:1337/api/shop-by-fits?populate=image")
      );
      setBrandProduncts(
        await fetchData(
          "http://localhost:1337/api/brand-products?populate=image"
        )
      );
    };
    fetchDataProducts();
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
      <FitProducts fitProducts={fitProducts} />
      <DownloadBanner />
      <BrandProducts brandProducts={brandProducts} />
    </div>
  );
};

export default PageContent;

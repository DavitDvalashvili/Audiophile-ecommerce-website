import ProductStyle from "../../styleComponents/pages/ProductStyle";
import useWindowWidth from "../../../Hooks/useWindowWidth";
import data from "../../../../data.json";
import { useState } from "react";
import ExploreSection from "../ExploreSection";
import { useNavigate } from "react-router-dom";
import { ProductContainer } from "../ProductContainer";
import { StoryWrapper } from "../ProductContainer";

const Pages = () => {
  const slugArr = [
    "yx1-earphones",
    "xx59-headphones",
    "xx99-mark-one-headphones",
    "xx99-mark-two-headphones",
    "zx7-speaker",
    "zx9-speaker",
  ];

  //get the index based on the page url
  const baseUrl = window.location.origin;
  const index: number = slugArr.indexOf(location.pathname.split("/")[2]);
  const productData = data[index];

  //custom hook
  const width = useWindowWidth();

  const [amount, setAmount] = useState<number>(0);

  // get back tho the top page
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <ProductStyle>
        <span
          onClick={() => {
            navigate(`/${location.pathname.split("/").splice(0, 2).join("")}`);
          }}
          className="getBack"
        >
          Go Back
        </span>
        <section className="product">
          <img
            src={
              width < 768
                ? `${baseUrl}/${productData.image.mobile}`
                : width < 1440
                ? `${baseUrl}/${productData.image.tablet}`
                : `${baseUrl}/${productData.image.desktop}`
            }
            alt="product Image"
          />
          <div className="textWrapper">
            {productData.new && <span className="new">NEW PRODUCT</span>}
            <h1>{productData.name}</h1>
            <p>{productData.description}</p>
            <span className="price">{`$${productData.price.toLocaleString()}`}</span>
            <div className="addAmount">
              <div className="amount">
                <span
                  className="minus"
                  onClick={() => {
                    amount > 0 && setAmount(amount - 1);
                  }}
                >
                  -
                </span>
                <span
                  className="number"
                  onClick={() => {
                    setAmount(amount + 1);
                  }}
                >
                  {amount}
                </span>
                <span className="plus">+</span>
              </div>
              <button>ADD TO CART</button>
            </div>
          </div>
        </section>
        <section className="feature">
          <div className="textBox">
            <h2>feature</h2>
            <p>{productData.features}</p>
          </div>
          <div className="Box">
            <h4>in the box</h4>
            <div className="itemBox">
              {productData.includes.map((item) => (
                <div className="items" key={item.item}>
                  <span className="itemAmount">{`${item.quantity}X`}</span>
                  <span className="itemName">{item.item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="gallery"></section>
        <ExploreSection />
      </ProductStyle>
      <ProductContainer handleClick={handleClick} />
      <StoryWrapper />
    </>
  );
};

export default Pages;

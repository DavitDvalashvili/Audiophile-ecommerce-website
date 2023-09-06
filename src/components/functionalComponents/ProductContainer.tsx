import { ProductBox, StoryBox } from "../styleComponents/ProductBox";
import { Link } from "react-router-dom";
import earPhones from "../../assets/home/desktop/earphones-removebg-preview.png";
import headphones from "../../assets/home/desktop/headphones-removebg-preview.png";
import speakers from "../../assets/home/desktop/speaker-removebg-preview.png";
import arrow from "../../assets/icons/icon-arrow-right.svg";
import { navType } from "../../Types";

export const ProductContainer = ({ handleClick }: navType) => {
  return (
    <ProductBox>
      <div className="headphones">
        <img src={headphones} alt="headphones" id="headphone" />
        <h1>headphones</h1>
        <Link to="headphones" onClick={handleClick}>
          <span>Shop</span>
          <img src={arrow} alt="" />
        </Link>
      </div>
      <div className="speakers">
        <img src={speakers} alt="speakers" id="speaker" />
        <h1>speakers</h1>
        <Link to="speakers" onClick={handleClick}>
          <span>Shop</span>
          <img src={arrow} alt="speakers" />
        </Link>
      </div>
      <div className="earPhones">
        <img src={earPhones} alt="earPhones" id="earPhone" />
        <h1>earPhones</h1>
        <Link to="earphones" onClick={handleClick}>
          <span>Shop</span>
          <img src={arrow} alt="earPhones" />
        </Link>
      </div>
    </ProductBox>
  );
};

export const StoryWrapper = () => {
  return (
    <StoryBox>
      <div className="imageBox"></div>
      <div className="textWrapper">
        <h1>
          Bringing you the <span>best</span> audio gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </StoryBox>
  );
};

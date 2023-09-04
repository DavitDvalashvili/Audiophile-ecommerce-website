import { HeaderStyle } from "../styleComponents/HeaderStyle";
import hamburger from "../../assets/icons/icon-hamburger.svg";
import logo from "../../assets/icons/logo.svg";
import cart from "../../assets/icons/icon-cart.svg";
import useWindowWidth from "../../Hooks/useWindowWidth";
import { Link } from "react-router-dom";
import { NavigationStyle } from "../styleComponents/HeaderStyle";
import earPhones from "../../assets/home/desktop/earphones-removebg-preview.png";
import headphones from "../../assets/home/desktop/headphones-removebg-preview.png";
import speakers from "../../assets/home/desktop/speaker-removebg-preview.png";
import arrow from "../../assets/icons/icon-arrow-right.svg";
import { useState } from "react";
import { navType } from "../../Types";

const Header = () => {
  const width = useWindowWidth();

  const [hideNav, setHideNAv] = useState(true);
  const handleClick = () => {
    setHideNAv(!hideNav);
  };

  return (
    <HeaderStyle>
      {width < 1440 && (
        <img
          src={hamburger}
          className="burger"
          alt="hamburger"
          onClick={handleClick}
        />
      )}
      <img src={logo} alt="logo" />
      <nav>
        {width >= 1440 && (
          <ul>
            <Link to="">
              <li>HOME</li>
            </Link>
            <Link to="headphones">
              <li>HEADPHONES</li>
            </Link>
            <Link to="speakers">
              <li>SPEAKERS</li>
            </Link>
            <Link to="earphones">
              <li>EARPHONES</li>
            </Link>
          </ul>
        )}
      </nav>
      <img className="cart" src={cart} alt="cart" />
      {!hideNav && width < 1440 && (
        <div className="bg">
          <Navigation handleClick={handleClick} />
        </div>
      )}
    </HeaderStyle>
  );
};

export default Header;

const Navigation = ({ handleClick }: navType) => {
  return (
    <NavigationStyle>
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
    </NavigationStyle>
  );
};

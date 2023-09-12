import { HeaderStyle } from "../styleComponents/HeaderStyle";
import hamburger from "../../assets/icons/icon-hamburger.svg";
import logo from "../../assets/icons/logo.svg";
import cart from "../../assets/icons/icon-cart.svg";
import useWindowWidth from "../../Hooks/useWindowWidth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ProductContainer } from "./ProductContainer";
import Cart from "./Cart";

const Header = () => {
  const width = useWindowWidth();

  const [hideNav, setHideNAv] = useState(true);
  const handleClick = () => {
    setHideNAv(!hideNav);
  };

  const [hideCart, setHideCart] = useState<boolean>(true);

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
      <Link to="">
        <img src={logo} alt="logo" className="logo" />
      </Link>
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
      <img
        className="cart"
        src={cart}
        alt="cart"
        onClick={() => {
          setHideCart(!hideCart);
        }}
      />
      {!hideNav && width < 1440 && (
        <div className="bg">
          <ProductContainer handleClick={handleClick} />
        </div>
      )}
      {!hideCart && <Cart />}
    </HeaderStyle>
  );
};

export default Header;

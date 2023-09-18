import { HeaderStyle } from "../styleComponents/HeaderStyle";
import hamburger from "../../assets/icons/icon-hamburger.svg";
import logo from "../../assets/icons/logo.svg";
import useWindowWidth from "../../Hooks/useWindowWidth";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContainer } from "./ProductContainer";
import Cart from "./Cart";
import dataCart from "../../../dataCart.json";
import { BadgeContext } from "../../App";

const Header = () => {
  const width = useWindowWidth();

  const [hideNav, setHideNAv] = useState(true);
  const handleClick = () => {
    setHideNAv(!hideNav);
  };

  const [hideCart, setHideCart] = useState<boolean>(true);

  const activeCount = dataCart.filter((item) => item.quantity > 0).length;

  //crete context to use value
  const badgeContext = useContext(BadgeContext);
  const [updateBagde, setUpdateBadghe] = useState<boolean>(false);
  useEffect(() => {
    setUpdateBadghe(!updateBagde);
  }, [badgeContext?.updateBadge]);
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
      <svg
        width="23"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          setHideCart(!hideCart);
        }}
        className="cart"
      >
        <path
          d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
          fill="#FFF"
        />
      </svg>
      {hideCart && activeCount > 0 && badgeContext && (
        <div
          className="badge"
          onClick={() => {
            setHideCart(!hideCart);
          }}
        >
          {activeCount}
        </div>
      )}
      {!hideNav && width < 1440 && (
        <div className="bg">
          <ProductContainer handleClick={handleClick} />
        </div>
      )}
      {!hideCart && <Cart setHideCart={setHideCart} />}
    </HeaderStyle>
  );
};

export default Header;

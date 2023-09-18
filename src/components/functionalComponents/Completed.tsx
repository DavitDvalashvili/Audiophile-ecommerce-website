import { CompletedStyle } from "../styleComponents/CompletedStyle";
import confirmationImg from "../../assets/icons/icon-order-confirmation.svg";
import dataCart from "../../../dataCart.json";
import { totalPriceType } from "../../Types";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BadgeContext } from "../../App";

CompletedStyle;

export const Completed = ({ totalPrice, setHideCompleted }: totalPriceType) => {
  const activeCount = dataCart.filter((item) => item.quantity > 0).length;

  const badgeContext = useContext(BadgeContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    dataCart.map((product) => {
      product.quantity = 0;
      setHideCompleted(true);
    });
    badgeContext?.setShowBadge(false);
  };

  const firstProduct = dataCart.find((product) => product.quantity > 0);

  return (
    <CompletedStyle>
      <div className="completedBox">
        <img src={confirmationImg} alt="confirmationImg" />
        <h1>THANK YOU FOR YOUR ORDER</h1>
        <p>You will receive an email confirmation shortly.</p>
        <div className="main">
          <div className="productBox">
            {firstProduct && (
              <div className="product">
                <img src={firstProduct.image} alt="productImage" />
                <div className="namePrice">
                  <span>{firstProduct.name}</span>
                  <span className="price">{`$ ${(
                    firstProduct.price * firstProduct.quantity
                  ).toLocaleString()}`}</span>
                </div>
                <span className="quantity">{`x${firstProduct.quantity}`}</span>
              </div>
            )}
            {activeCount - 1 > 0 && <hr className="divider" />}
            {activeCount - 1 > 0 && <p>and {activeCount - 1} other item(s)</p>}
          </div>
          <div className="grand">
            <span>grand total</span>
            <span>{`$ ${totalPrice.toLocaleString()}`}</span>
          </div>
        </div>
        <button onClick={handleClick}>back to home</button>
      </div>
    </CompletedStyle>
  );
};

import CartStyle from "../styleComponents/CartStyle";
import dataCart from "../../../dataCart.json";
import { useState, useContext } from "react";
import { BadgeContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { cartType } from "../../Types";

const Cart = ({ setHideCart }: cartType) => {
  const activeCount = dataCart.filter((item) => item.quantity > 0).length;
  const totalPrice = dataCart.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );
  const [quantity, setQuantity] = useState<number>(0);

  const [removeAll, setRemoveAll] = useState<boolean>(false);

  const badgeContext = useContext(BadgeContext);

  const removeAllFun = () => {
    dataCart.map((product) => {
      product.quantity = 0;
    });
    setRemoveAll(true);
    badgeContext?.setShowBadge(false);
  };

  const baseUrl = window.location.origin;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Checkout");
    setHideCart(true);
  };

  return (
    <CartStyle>
      <div className="cart">
        <div className="header">
          <span className="activeCart">{`Cart ${activeCount}`}</span>
          <span className="removeAll" onClick={removeAllFun}>
            Remove all
          </span>
        </div>
        <div className="activeProducts">
          {dataCart.map((product) => (
            <div className="product" key={product.id}>
              {product.quantity > 0 && (
                <div className="productWrapper">
                  <img src={`${baseUrl}/${product.image}`} alt="productImage" />
                  <div className="namePrice">
                    <span>{product.name}</span>
                    <span>{`$ ${product.price.toLocaleString()}`}</span>
                  </div>
                  <div className="quantityBox">
                    <span
                      className="minus"
                      onClick={() => {
                        if (product.quantity > 0) {
                          product.quantity = product.quantity - 1;
                          setQuantity(quantity - 1);
                          if (product.quantity == 0) {
                            badgeContext?.setShowBadge(false);
                          }
                        }
                      }}
                    >
                      -
                    </span>
                    <span className="quantity">{product.quantity}</span>
                    <span
                      className="plus"
                      onClick={() => {
                        product.quantity = product.quantity + 1;
                        setQuantity(quantity + 1);
                      }}
                    >
                      +
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="totalWrapper">
          <span className="totalText">Total</span>
          <span className="totalNumber">{`$${totalPrice.toLocaleString()}`}</span>
        </div>
        <button onClick={handleClick}>checkout</button>
      </div>
    </CartStyle>
  );
};

export default Cart;

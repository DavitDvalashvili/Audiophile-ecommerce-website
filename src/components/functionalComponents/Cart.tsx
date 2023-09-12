import CartStyle from "../styleComponents/CartStyle";
import dataCart from "../../../dataCart.json";
import { useState } from "react";

const Cart = () => {
  const activeCount = dataCart.filter((item) => item.quality > 0).length;
  const totalPrice = dataCart.reduce(
    (accumulator, product) => accumulator + product.price * product.quality,
    0
  );
  const [quantity, setQuantity] = useState<number>(0);

  const [removeAll, setRemoveAll] = useState<boolean>(false);
  console.log(removeAll);

  const removeAllFun = () => {
    dataCart.map((product) => {
      product.quality = 0;
    });
    setRemoveAll(true);
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
              {product.quality > 0 && (
                <div className="productWrapper">
                  <img src={product.image} alt="productImage" />
                  <div className="namePrice">
                    <span>{product.name}</span>
                    <span>{`$ ${product.price.toLocaleString()}`}</span>
                  </div>
                  <div className="quantityBox">
                    <span
                      className="minus"
                      onClick={() => {
                        if (product.quality > 0) {
                          product.quality = product.quality - 1;
                          setQuantity(quantity - 1);
                        }
                      }}
                    >
                      -
                    </span>
                    <span className="quantity">{product.quality}</span>
                    <span
                      className="plus"
                      onClick={() => {
                        product.quality = product.quality + 1;
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
        <button>checkout</button>
      </div>
    </CartStyle>
  );
};

export default Cart;

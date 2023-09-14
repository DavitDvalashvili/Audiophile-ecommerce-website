import CheckoutStyle from "../../styleComponents/CheckoutStyle";
import dataCart from "./../../../../dataCart.json";

const Checkout = () => {
  const totalPrice = dataCart.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  return (
    <CheckoutStyle>
      <div className="goBack">go back</div>
      <form>
        <h3>Checkout</h3>
        <div className="billingInfo infoBox">
          <p>Billing Details</p>
          <div>
            <div className="name inputWrapper">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Alexei Ward" />
            </div>
            <div className="email inputWrapper">
              <label htmlFor="email">Email Address</label>
              <input type="text" id="email" placeholder="alexei@mail.com" />
            </div>
            <div className="phone inputWrapper">
              <label htmlFor="phone">Phone Number</label>
              <input type="number" id="phone" placeholder="+1 202-555-0136" />
            </div>
          </div>
        </div>
        <div className="shippingInfo infoBox">
          <p>shipping info</p>
          <div>
            <div className="address inputWrapper">
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                id="Address"
                placeholder="1137 Williams Avenue"
              />
            </div>
            <div className="zipCode inputWrapper">
              <label htmlFor="zipCode">ZIP Code</label>
              <input type="number" id="zipCode" placeholder="10001" />
            </div>
            <div className="city inputWrapper">
              <label htmlFor="zipCode">City</label>
              <input type="text" id="city" placeholder="New York" />
            </div>
            <div className="Country inputWrapper">
              <label htmlFor="Country">Country</label>
              <input type="text" id="Country" placeholder="United States" />
            </div>
          </div>
        </div>
        <div className="payment">
          <p>payment details</p>
          <div className="ratioBox">
            <p>Payment Method</p>
            <div className="eMoney">
              <input name="payType" type="radio" id="eMoney" />
              <label htmlFor="eMoney">e-Money</label>
            </div>
            <div className="cash">
              <input name="payType" type="radio" id="cash" />
              <label htmlFor="cash">Cash on Delivery</label>
            </div>
          </div>
          <div className="eMoneyBox">
            <div>
              <label htmlFor="eMoneyNumber">e-Money Number</label>
              <input type="number" id="eMoneyNumber" placeholder="238521993" />
            </div>
            <div>
              <label htmlFor="eMoneyPin">e-Money PIN</label>
              <input type="number" id="eMoneyPin" placeholder="6891" />
            </div>
          </div>
        </div>
      </form>

      <div className="summery">
        <h3>summary</h3>

        {dataCart.map((product) => (
          <div className="productBox" key={product.id}>
            {product.quantity > 0 && (
              <div className="productWrapper">
                <img src={product.image} alt="productImage" />
                <div className="textWrapper">
                  <span className="name">{product.name}</span>
                  <span className="price">{`$ ${product.price.toLocaleString()}`}</span>
                </div>
                <span className="quantity">{`x${product.quantity}`}</span>
              </div>
            )}
          </div>
        ))}

        <div className="total">
          <span className="text">Total</span>
          <span className="number">{`$${totalPrice.toLocaleString()}`}</span>
        </div>

        <div className="shipping">
          <span className="text">shipping</span>
          <span className="number">{`$${50}`}</span>
        </div>

        <div className="vat">
          <span className="text">VAT (INCLUDED)</span>
          <span className="number">{`$${Math.floor(
            (totalPrice * 20) / 100
          ).toLocaleString()}`}</span>
        </div>

        <div className="grand">
          <span className="text">grand total</span>
          <span className="number">
            {`$${Math.floor(
              (totalPrice + totalPrice * 20) / 100
            ).toLocaleString()}`}
          </span>
        </div>

        <button>CONTINUE & PAY</button>
      </div>
    </CheckoutStyle>
  );
};

export default Checkout;

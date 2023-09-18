import CheckoutStyle from "../../styleComponents/pages/CheckoutStyle";
import dataCart from "./../../../../dataCart.json";
import cashIcon from "./../../../assets/icons/icon-cash-on-delivery.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { formType } from "../../../Types";
import { useRef, useState } from "react";
import { Completed } from "../Completed";

const Checkout = () => {
  const totalPrice = dataCart.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formType>();

  const onSubmit: SubmitHandler<formType> = (data) => {
    console.log(data);
    setHideCompleted(false);
  };

  const submitRef = useRef<HTMLButtonElement | null>(null);

  const [hideCompleted, setHideCompleted] = useState<boolean>(true);

  return (
    <CheckoutStyle>
      <div className="goBack">
        <span>go back</span>
      </div>
      <div className="main">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Checkout</h3>
          <div className="billingInfo infoBox">
            <p>Billing Details</p>
            <div>
              <div
                className={errors.name ? "inputWrapper errors" : "inputWrapper"}
              >
                <div className="labelError">
                  <label htmlFor="name">Name</label>
                  <span>{errors.name?.message}</span>
                </div>
                <input
                  placeholder="Alexei Ward"
                  {...register("name", {
                    required: "Name is required",
                    maxLength: 20,
                    minLength: 3,
                  })}
                />
              </div>

              <div
                className={
                  errors.email ? "inputWrapper errors" : "inputWrapper"
                }
              >
                <div className="labelError">
                  <label htmlFor="email">Email Address</label>
                  <span>{errors.email?.message}</span>
                </div>
                <input
                  placeholder="alexei@mail.com"
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter valid email address",
                    },
                  })}
                />
              </div>

              <div
                className={
                  errors.phoneNumber ? "inputWrapper errors" : "inputWrapper"
                }
              >
                <div className="labelError">
                  <label htmlFor="phone">Phone Number</label>
                  <span>{errors.phoneNumber?.message}</span>
                </div>
                <input
                  placeholder="+1 202-555-0136"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\d{9}$/,
                      message: "Please enter valid phone number",
                    },
                  })}
                />
              </div>
            </div>
          </div>
          <div className="shippingInfo infoBox">
            <p>shipping info</p>
            <div>
              <div
                className={
                  errors.address ? "inputWrapper errors" : "inputWrapper"
                }
              >
                <div className="labelError">
                  <label htmlFor="Address">Address</label>
                  <span>{errors.address?.message}</span>
                </div>

                <input
                  placeholder="1137 Williams Avenue"
                  {...register("address", {
                    required: "Address is required",
                    maxLength: 40,
                  })}
                />
              </div>

              <div
                className={
                  errors.zipCode ? "inputWrapper errors" : "inputWrapper"
                }
              >
                <div className="labelError">
                  <label htmlFor="zipCode">ZIP Code</label>
                  <span>{errors.zipCode?.message}</span>
                </div>
                <input
                  placeholder="10001"
                  maxLength={5}
                  {...register("zipCode", {
                    required: "Zip code is required",
                    minLength: 5,
                    maxLength: 5,
                    pattern: {
                      value: /^\d{5}$/,
                      message: "Please enter valid zip code",
                    },
                  })}
                />
              </div>

              <div
                className={errors.city ? "inputWrapper errors" : "inputWrapper"}
              >
                <div className="labelError">
                  <label htmlFor="city">City</label>
                  <span>{errors.city?.message}</span>
                </div>
                <input
                  placeholder="New York"
                  {...register("city", {
                    required: "City is required",
                    maxLength: 20,
                  })}
                />
              </div>

              <div
                className={
                  errors.country ? "inputWrapper errors" : "inputWrapper"
                }
              >
                <div className="labelError">
                  <label htmlFor="Country">Country</label>
                  <span>{errors.country?.message}</span>
                </div>

                <input
                  placeholder="United States"
                  {...register("country", {
                    required: "Country is required",
                    maxLength: 20,
                  })}
                />
              </div>
            </div>
          </div>
          <div className="payment">
            <p>payment details</p>
            <div className={errors.payType ? "radioBox errors" : "radioBox"}>
              <div className="labelError">
                <p>Payment Method</p>
                <span>{errors.payType?.message}</span>
              </div>

              <div>
                <div className="eMoney">
                  <input
                    type="radio"
                    value="eMoney"
                    {...register("payType", {
                      required: "Payment method is required",
                    })}
                  />
                  <label htmlFor="eMoney">e-Money</label>
                </div>

                <div className="cash">
                  <input
                    type="radio"
                    value="cash"
                    {...register("payType", {
                      required: "Payment method is required",
                    })}
                  />
                  <label htmlFor="cash">Cash on Delivery</label>
                </div>
              </div>
            </div>
            <div className="eMoneyBox">
              <div className={errors.eMoneyNumber ? "errors" : ""}>
                <div className="labelError">
                  <label htmlFor="eMoneyNumber">e-Money Number</label>
                  <span>{errors.eMoneyNumber?.message}</span>
                </div>
                <input
                  placeholder="238521993"
                  maxLength={9}
                  {...register("eMoneyNumber", {
                    required: "EMoney number is required",
                    minLength: 9,
                    maxLength: 9,
                    pattern: {
                      value: /^\d{9}$/,
                      message: "Please enter valid eMoney number",
                    },
                  })}
                />
              </div>

              <div className={errors.eMoneyPin ? "errors" : ""}>
                <div className="labelError">
                  <label htmlFor="eMoneyPin">e-Money PIN</label>
                  <span>{errors.eMoneyPin?.message}</span>
                </div>

                <input
                  placeholder="6891"
                  maxLength={4}
                  {...register("eMoneyPin", {
                    required: "EMoney pin is required",
                    minLength: 4,
                    maxLength: 4,
                    pattern: {
                      value: /^\d{4}$/,
                      message: "Please enter valid eMoney pin",
                    },
                  })}
                />
              </div>
            </div>
            {watch("payType") == "cash" && (
              <div className="cashOrDelivery">
                <img src={cashIcon} alt="cashIcon" />
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            )}
          </div>
          <button type="submit" ref={submitRef}></button>
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
                    <span className="price">{`$ ${(
                      product.price * product.quantity
                    ).toLocaleString()}`}</span>
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

          <button
            type="submit"
            onClick={() => {
              if (submitRef.current) {
                submitRef.current.click();
              }
            }}
          >
            CONTINUE & PAY
          </button>
        </div>
      </div>
      {!hideCompleted && (
        <Completed
          totalPrice={totalPrice}
          setHideCompleted={setHideCompleted}
        />
      )}
    </CheckoutStyle>
  );
};

export default Checkout;

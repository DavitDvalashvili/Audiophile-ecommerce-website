import styled from "styled-components";
import DefaultTheme from "./DefaultTheme";

const CheckoutStyle = styled.section`
  padding: 16px 24px 92px 24px;
  color: ${DefaultTheme.colors.black};
  background-color: ${DefaultTheme.colors.drWhite};
  .goBack {
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    text-transform: capitalize;
    opacity: 0.5;
    margin-bottom: 24px;
  }
  form {
    padding: 24px 24px 31px 24px;
    background-color: ${DefaultTheme.colors.white};
    border-radius: 8px;
    h3 {
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .infoBox {
      margin-top: 32px;
      p {
        color: ${DefaultTheme.colors.seraphimSepia};
        font-size: 13px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 0.929px;
        text-transform: uppercase;
        margin-bottom: 16px;
      }
      > div {
        display: flex;
        flex-direction: column;
        align-items: left;
        gap: 24px;
        .inputWrapper {
          .labelError {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: -0.214px;
            margin-bottom: 9px;
          }
          input {
            display: block;
          }
          input {
            width: 100%;
            height: 56px;
            border: 1px solid #cfcfcf;
            border-radius: 8px;
            padding: 18px 24px 19px 24px;
            :placeholder-shown {
              font-size: 14px;
              font-weight: 700;
              letter-spacing: -0.25px;
            }
            :focus {
              outline: none;
              border-color: ${DefaultTheme.colors.seraphimSepia};
            }
          }
        }
        .errors {
          color: ${DefaultTheme.colors.hotLip};
          input {
            border: 2px solid ${DefaultTheme.colors.hotLip};
          }
        }
      }
    }
    .payment {
      > p {
        color: ${DefaultTheme.colors.seraphimSepia};
        font-size: 13px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 0.929px;
        text-transform: uppercase;
        margin: 32px 0px 16px 0px;
      }
      .radioBox {
        .labelError {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: -0.214px;
          margin-bottom: 17px;
        }
        .eMoney,
        .cash {
          height: 56px;
          width: 100%;
          border-radius: 8px;
          border: 1px solid #cfcfcf;
          padding: 18px 16px;
          display: flex;
          justify-content: left;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
          input[type="radio"] {
            appearance: none;
            -webkit-appearance: none;
            width: 20px;
            height: 20px;
            border: 1px solid #cfcfcf;
            border-radius: 50%;
            margin-right: 10px;
            background-color: transparent;
            position: relative;
          }
          input[type="radio"]:checked::before {
            content: "";
            display: block;
            width: 10px;
            height: 10px;
            background-color: ${DefaultTheme.colors.seraphimSepia};
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          label {
            font-size: 14px;
            font-weight: 700;
            letter-spacing: -0.25px;
            margin-top: -2px;
          }
        }
      }
      .errors {
        .labelError {
          color: ${DefaultTheme.colors.hotLip};
        }
        .cash,
        .eMoney {
          border: 2px solid ${DefaultTheme.colors.hotLip};
        }
      }
      .eMoneyBox {
        padding-top: 16px;
        div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 9px;
          margin-bottom: 24px;
          .labelError {
            font-size: 12px;
            font-weight: 700;
            letter-spacing: -0.214px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            flex-direction: row;
            margin-bottom: 9px;
          }
          input {
            width: 100%;
            height: 56px;
            border: 1px solid #cfcfcf;
            border-radius: 8px;
            padding: 18px 24px 19px 24px;
            :placeholder-shown {
              font-size: 14px;
              font-weight: 700;
              letter-spacing: -0.25px;
            }
            :focus {
              outline: none;
              border-color: ${DefaultTheme.colors.seraphimSepia};
            }
          }
        }
        .errors {
          .labelError {
            color: ${DefaultTheme.colors.hotLip};
          }
          input {
            border: 2px solid ${DefaultTheme.colors.hotLip};
          }
        }
      }
      .cashOrDelivery {
        padding-top: 6px;
        display: flex;
        justify-content: left;
        align-items: flex-start;
        gap: 32px;
        font-size: 15px;
        font-weight: 500;
        line-height: 25px;
        p {
          opacity: 0.5;
        }
      }
    }
  }
  .summery {
    background-color: ${DefaultTheme.colors.white};
    margin-top: 32px;
    border-radius: 8px;
    padding: 32px 24px;
    h3 {
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 1.286px;
      text-transform: uppercase;
      margin-bottom: 31px;
    }
    .productBox {
      .productWrapper {
        margin-bottom: 24px;
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 16px;
        img {
          height: 64px;
          width: 64px;
          border-radius: 8px;
        }
        .textWrapper {
          span {
            display: block;
            font-size: 15px;
            font-weight: 700;
            line-height: 25px;
          }
          .price {
            font-size: 14px;
            opacity: 0.5;
          }
        }
        .quantity {
          margin-left: auto;
          font-size: 15px;
          font-weight: 700;
          line-height: 25px;
          opacity: 0.5;
        }
      }
    }
    .total,
    .shipping,
    .vat,
    .grand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      span {
        :nth-of-type(1) {
          font-size: 15px;
          font-style: normal;
          font-weight: 500;
          line-height: 25px;
          text-transform: uppercase;
          opacity: 0.5;
        }
        :nth-of-type(2) {
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
    .total {
      padding-top: 6px;
    }
    .grand {
      padding-top: 16px;
      padding-bottom: 24px;
      .number {
        color: ${DefaultTheme.colors.seraphimSepia};
      }
    }
    button {
      width: 100%;
      height: 48px;
      color: ${DefaultTheme.colors.white};
      background-color: ${DefaultTheme.colors.seraphimSepia};
      border: none;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s ease;
      :hover {
        background-color: ${DefaultTheme.colors.apricotWash};
      }
    }
    .errorMessage {
      color: ${DefaultTheme.colors.seraphimSepia};
      margin-top: 15px;
      font-size: 15px;
    }
  }
  @media (min-width: 768px) {
    padding: 48px 40px 116px 39px;
    margin: 0 auto;
    .main {
      max-width: 689px;
      margin: 0 auto;
    }
    .goBack {
      max-width: 768px;
      margin-left: auto;
      margin-right: auto;
    }
    form {
      padding: 30px 27px 30px 28px;
      h3 {
        font-size: 32px;
        line-height: 36px;
        letter-spacing: 1.143px;
      }
      .infoBox {
        margin-top: 41px;
        > div {
          flex-direction: row;
          flex-wrap: wrap;
          column-gap: 16px;
          row-gap: 26px;
          .inputWrapper {
            input {
              width: 309px;
              padding: 18px 24px 19px 24px;
            }
          }
        }
      }
      .shippingInfo {
        padding-top: 12px;
        > div {
          .address {
            input {
              width: 634px;
            }
          }
        }
      }
    }
    @media (min-width: 768px) {
      .summery {
        padding: 32px 33px;
      }
    }
    @media (min-width: 1440px) {
      padding: 79px 165px 161px 165px;
      .goBack {
        max-width: 1110px;
        margin-left: auto;
        margin-right: auto;
      }
      .main {
        max-width: 1110px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 30px;
        form {
          padding: 54px 48px;
          width: 730px;
          .payment {
            .radioBox {
              .labelError {
                flex-direction: column;
                align-items: flex-start;
              }
              display: flex;
              justify-content: space-between;
              gap: 16px;
              align-items: flex-start;
              .cash,
              .eMoney {
                width: 309px;
              }
            }
            .eMoneyBox {
              display: flex;
              justify-content: space-between;
              align-items: center;
              input {
                width: 309px;
              }
            }
          }
        }
        .summery {
          width: 350px;
          margin-top: 0px;
        }
      }
    }
  }
`;

export default CheckoutStyle;

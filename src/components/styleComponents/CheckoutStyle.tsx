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
          label,
          input {
            display: block;
          }
          label {
            font-size: 12px;
            font-weight: 700;
            letter-spacing: -0.214px;
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
              opacity: 0.4;
            }
            :focus {
              outline: none;
              border-color: ${DefaultTheme.colors.seraphimSepia};
            }
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
      .ratioBox {
        p {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: -0.214px;
          margin-bottom: 17px;
        }
        div {
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
      .eMoneyBox {
        padding-top: 16px;
        div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 9px;
          margin-bottom: 24px;
          label {
            font-size: 12px;
            font-weight: 700;
            letter-spacing: -0.214px;
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
              opacity: 0.4;
            }
            :focus {
              outline: none;
              border-color: ${DefaultTheme.colors.seraphimSepia};
            }
          }
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
  }
`;

export default CheckoutStyle;

import styled from "styled-components";
import DefaultTheme from "../DefaultTheme";

const ProductStyle = styled.div`
  padding: 16px 24px 88px 24px;
  color: ${DefaultTheme.colors.black};
  .getBack {
    display: block;
    margin-bottom: 24px;
    font-size: 15px;
    opacity: 0.5;
    font-weight: 500;
    line-height: 25px;
  }
  .product {
    img {
      display: block;
      margin: 0 auto;
      width: 100%;
      max-width: 375px;
      border-radius: 8px;
    }
    .textWrapper {
      .new {
        display: block;
        color: ${DefaultTheme.colors.seraphimSepia};
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 10px;
        text-transform: uppercase;
        margin: 32px 0px -16px 0px;
      }
      h1 {
        font-size: 28px;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        max-width: 200px;
        margin-top: 40px;
      }
      p {
        font-size: 15px;
        font-weight: 500;
        line-height: 25px;
        opacity: 0.5;
        margin: 24px 0px;
      }
      .price {
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 1.286px;
        text-transform: uppercase;
      }
      .addAmount {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 16px;
        margin-top: 31px;
        .amount {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 21px;
          padding: 15px 15.5px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          width: 120px;
          height: 48px;
          background-color: ${DefaultTheme.colors.Beluga};
          .plus,
          .minus {
            opacity: 0.25;
            cursor: pointer;
          }
        }
        button {
          color: ${DefaultTheme.colors.white};
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          background-color: ${DefaultTheme.colors.seraphimSepia};
          border: none;
          width: 160px;
          height: 48px;
          cursor: pointer;
        }
      }
    }
  }
  .feature {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 88px;
    color: ${DefaultTheme.colors.black};
    margin: 88px 0px;
    .textBox {
      h2 {
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 0.857px;
        text-transform: uppercase;
      }
      p {
        font-size: 15px;
        font-weight: 500;
        line-height: 25px;
        opacity: 0.5;
        margin-top: 24px;
      }
    }
    .Box {
      color: ${DefaultTheme.colors.black};
      width: 100%;
      h4 {
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 0.857px;
        text-transform: uppercase;
      }
      .items {
        margin-top: 8px;
        margin-left: 0px;
        .itemAmount {
          color: ${DefaultTheme.colors.seraphimSepia};
          font-size: 15px;
          font-weight: 700;
          line-height: 25px;
          margin-right: 21px;
        }
        .itemName {
          opacity: 0.5;
          color: ${DefaultTheme.colors.black};
          font-size: 15px;
          font-weight: 500;
          line-height: 25px;
        }
      }
    }
  }
`;

export default ProductStyle;

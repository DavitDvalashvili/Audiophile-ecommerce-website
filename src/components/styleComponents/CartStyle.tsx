import styled from "styled-components";
import DefaultTheme from "./DefaultTheme";

const CartStyle = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 24px 24px 0px 24px;
  position: absolute;
  top: 90px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 10;
  color: ${DefaultTheme.colors.black};
  .cart {
    background-color: ${DefaultTheme.colors.white};
    width: 100%;
    border-radius: 8px;
    padding: 31px 28px;
    max-width: 377px;
    margin: 0px 0px 0px auto;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .activeCart {
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 1.286px;
        text-transform: uppercase;
      }
      .removeAll {
        font-size: 15px;
        font-weight: 500;
        line-height: 25px;
        text-decoration-line: underline;
        opacity: 0.5;
        cursor: pointer;
        transition: all 0.3s ease;
        :hover {
          color: ${DefaultTheme.colors.seraphimSepia};
        }
      }
    }
    .activeProducts {
      margin: 31px 0px 32px 0px;
      width: 100%;
      gap: 24px;
      height: min-content;
      .product {
        .productWrapper {
          margin-bottom: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          img {
            width: 64px;
            border-radius: 8px;
          }
          .namePrice {
            span {
              display: block;
            }
            span {
              letter-spacing: 0px;
              :nth-of-type(1) {
                font-size: 15px;
                font-weight: 700;
                line-height: 25px;
              }
              :nth-of-type(2) {
                font-size: 14px;
                font-weight: 700;
                line-height: 25px;
                opacity: 0.5;
              }
            }
          }
          .quantityBox {
            width: 96px;
            height: 32px;
            margin-left: auto;
            background-color: ${DefaultTheme.colors.Beluga};
            padding: 7px 11.5px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 1px;
            .plus,
            .minus {
              opacity: 0.5;
              cursor: pointer;
              transition: all 0.3s ease;
              :hover {
                color: ${DefaultTheme.colors.seraphimSepia};
              }
            }
            .quantity {
              opacity: unset;
            }
          }
        }
      }
    }
    .totalWrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-transform: uppercase;
      margin-bottom: 24px;
      .totalText {
        font-size: 15px;
        font-weight: 500;
        line-height: 25px;
      }
      .totalNumber {
        font-size: 18px;
        font-weight: 700;
      }
    }
    button {
      width: 100%;
      height: 48px;
      padding: 15px 0px;
      border: none;
      text-align: center;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: ${DefaultTheme.colors.white};
      background-color: ${DefaultTheme.colors.seraphimSepia};
      cursor: pointer;
      transition: all 0.3s ease;
      :hover {
        background-color: ${DefaultTheme.colors.apricotWash};
      }
    }
  }
  @media (min-width: 768px) {
    padding: 24px 40px 0px 40px;
    .cart {
      padding: 31px 31px 31px 33px;
    }
  }
  @media (min-width: 1440px) {
    top: 97px;
    padding: 32px 165px 0px 165px;
  }
`;

export default CartStyle;

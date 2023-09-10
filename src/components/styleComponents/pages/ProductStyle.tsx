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
            :hover {
              color: ${DefaultTheme.colors.seraphimSepia};
            }
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
    gap: 120px;
    margin: 120px 0px;
    .textBox {
      h2 {
        letter-spacing: 0.857px;
        font-size: 32px;
        letter-spacing: 1.143px;
      }
      p {
        width: 100%;
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
  @media (min-width: 768px) {
    padding: 33px 39px 64px 40px;
    .product {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 69.5px;
      img {
        width: 281px;
        max-width: unset;
        margin: 0;
      }
      .textWrapper {
        .new {
          font-weight: 400;
          margin: 0px 0px 17px 0px;
          font-size: 12px;
          letter-spacing: 8.571px;
        }
        h1 {
          max-width: 350px;
          margin-top: unset;
        }
        p {
          margin: 32px 0px;
          width: 339px;
        }
      }
    }
    .feature {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 88px;
      color: ${DefaultTheme.colors.black};
      margin: 88px auto;
      max-width: 896px;
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
        margin: 0 auto;
        max-width: 896px;
        width: 100%;
        display: flex;
        justify-content: left;
        align-items: flex-start;
        gap: 11px;
        h4 {
          width: 339px;
          font-size: 32px;
          letter-spacing: 1.143px;
        }
      }
    }
  }
  @media (min-width: 1440px) {
    padding: 79px 165px 132px 165px;
    .getBack {
      margin: 0px auto 56px auto;
    }
    .product {
      gap: 125px;
      img {
        width: 540px;
      }
      .textWrapper {
        width: 445px;
        .new {
          margin: 0px 0px 16px 0px;
          font-size: 14px;
          letter-spacing: 10px;
        }
        h1 {
          font-size: 40px;
          line-height: 44px; /* 110% */
          letter-spacing: 1.429px;
        }
        p {
          margin: 32px 0px;
          width: 100%;
        }
        .addAmount {
          margin-top: 47px;
        }
      }
    }
    .feature {
      flex-direction: row;
      align-items: flex-start;
      gap: 125px;
      margin: 160px auto;
      max-width: 1110px;
      .textBox {
        width: 635px;
        h2 {
          font-size: 32px;
          letter-spacing: 1.143px;
        }
        p {
          margin-top: 32px;
        }
      }
      .Box {
        margin: 0;
        width: 350px;
        align-items: flex-start;
        gap: 32px;
        flex-direction: column;
        h4 {
          width: 339px;
          font-size: 36px;
        }
        .items {
          margin-top: 8px;
          margin-left: 0px;
          .itemAmount {
            margin-right: 24px;
          }
        }
      }
    }
  }
`;

export default ProductStyle;

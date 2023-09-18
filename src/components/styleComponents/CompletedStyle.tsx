import styled from "styled-components";
import DefaultTheme from "./DefaultTheme";

export const CompletedStyle = styled.div`
  position: absolute;
  left: 0;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  .completedBox {
    margin: 224px auto;
    border-radius: 8px;
    background-color: ${DefaultTheme.colors.white};
    width: 327px;
    padding: 32px;
    h1 {
      margin: 23px 0px 16px 0px;
      font-size: 24px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0.857px;
      text-transform: uppercase;
    }
    p {
      font-size: 15px;
      font-weight: 500;
      line-height: 25px;
      opacity: 0.4;
      margin-bottom: 24px;
    }
    .productBox {
      background-color: ${DefaultTheme.colors.Beluga};
      border-radius: 8px 8px 0px 0px;
      padding: 24px;
      .product {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 16px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 8px;
        }
        .namePrice {
          font-size: 15px;
          font-weight: 700;
          line-height: 25px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .price {
            opacity: 0.5;
          }
        }
        .quantity {
          font-size: 15px;
          font-weight: 700;
          line-height: 25px;
          opacity: 0.5;
          margin-left: auto;
        }
      }
      hr {
        margin: 12px 0px 0px 0px;
        opacity: 0.08;
        background: ${DefaultTheme.colors.black};
      }
      p {
        font-size: 12px;
        font-weight: 700;
        letter-spacing: -0.214px;
        opacity: 0.5;
        margin: 12px auto 0px 54px;
      }
    }
    .grand {
      background-color: ${DefaultTheme.colors.black};
      border-radius: 0px 0px 8px 8px;
      color: #fff;
      font-size: 15px;
      font-weight: 500;
      line-height: 25px;
      padding: 15px 24px 19px 24px;
      span {
        display: block;
        :nth-of-type(1) {
          text-transform: uppercase;
          opacity: 0.5;
          margin-bottom: 8px;
        }
      }
    }
    button {
      margin-top: 23px;
      width: 100%;
      height: 48px;
      border: none;
      background-color: ${DefaultTheme.colors.seraphimSepia};
      color: ${DefaultTheme.colors.white};
      text-transform: uppercase;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.3s ease;
      :hover {
        background-color: ${DefaultTheme.colors.apricotWash};
      }
    }
  }
  @media (min-width: 768px) {
    .completedBox {
      margin: 222px auto;
      border-radius: 8px;
      background-color: ${DefaultTheme.colors.white};
      width: 540px;
      padding: 48px;
      h1 {
        margin: 23px 0px 24px 0px;
        line-height: 36px;
        letter-spacing: 1.143px;
        width: 248px;
        margin-bottom: 33px;
      }
      .main {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 0px;
      }
      .productBox {
        border-radius: 8px 0px 0px 8px;
        width: 246px;
        height: 140px;
        p {
          line-height: 16px;
        }
      }
      .grand {
        width: 198px;
        border-radius: 0px 8px 8px 0px;
        padding: 41px 24px 41px 24px;
        span {
          display: block;
          :nth-of-type(1) {
            text-transform: uppercase;
            opacity: 0.5;
            margin-bottom: 8px;
          }
        }
      }
    }
  }
`;

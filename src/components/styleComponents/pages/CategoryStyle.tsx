import styled from "styled-components";
import DefaultTheme from "../DefaultTheme";

const PageStyle = styled.section`
  h1 {
    color: ${DefaultTheme.colors.white};
    text-align: center;
    padding: 32px 0px;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    background-color: ${DefaultTheme.colors.black};
  }
  .productsContainer {
    padding: 64px 24px 88px 24px;
    display: flex;
    flex-direction: column;
    gap: 120px;
    .products {
      display: flex;
      flex-direction: column;
      gap: 32px;
      justify-content: center;
      align-items: center;
      img {
        border-radius: 8px;
        height: 352px;
      }
      .textWrapper {
        text-align: center;
        color: ${DefaultTheme.colors.black};
        span {
          color: ${DefaultTheme.colors.seraphimSepia};
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 10px;
          margin-bottom: 24px;
          display: block;
          text-transform: uppercase;
        }
        h2 {
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 1px;
          max-width: 250px;
          margin: 0px auto;
          text-transform: uppercase;
        }
        p {
          font-size: 15px;
          font-weight: 500;
          line-height: 25px;
          opacity: 0.5;
          margin: 24px auto;
          max-width: 572px;
        }
        button {
          border: none;
          height: 48px;
          width: 160px;
          background-color: ${DefaultTheme.colors.seraphimSepia};
          color: ${DefaultTheme.colors.white};
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: 1px;
          font-weight: 700;
          transition: all 0.3s ease;
          cursor: pointer;
          :hover {
            background-color: ${DefaultTheme.colors.apricotWash};
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 40px;
      font-weight: 700;
      line-height: 44px;
      letter-spacing: 1.429px;
    }
    .productsContainer {
      padding: 120px 40px 64px 39px;
      .products {
        gap: 52px;
        img {
          height: 352px;
        }
        .textWrapper {
          span {
            margin-bottom: 16px;
          }
          h2 {
            max-width: 350px;
            font-size: 40px;
            line-height: 44px;
            letter-spacing: 1.429px;
          }
          p {
            margin: 32px auto 24px auto;
          }
        }
      }
    }
  }
  @media (min-width: 1440px) {
    .productsContainer {
      gap: 160px;
      padding: 160px 165px 64px 165px;
      .products {
        flex-direction: row;
        gap: 125px;
        justify-content: center;
        align-items: center;
        img {
          height: 560px;
        }
        .textWrapper {
          text-align: left;
          h2 {
            margin: 0;
          }
          p {
            margin: 32px 0px 40px 0px;
            max-width: 445px;
          }
        }
      }
    }
  }
`;

export default PageStyle;

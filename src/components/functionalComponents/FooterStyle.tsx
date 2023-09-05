import styled from "styled-components";
import DefaultTheme from "../styleComponents/DefaultTheme";

const FooterStyle = styled.div`
  background-color: ${DefaultTheme.colors.chaosBlack};
  padding: 0px 24px 38px 24px;
  color: ${DefaultTheme.colors.white};
  hr {
    width: 101px;
    height: 4px;
    background-color: ${DefaultTheme.colors.apricotWash};
    border: none;
    margin: 0 auto;
    margin-bottom: 48px;
  }
  .navigationBox {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 36px;
    nav {
      ul {
        display: flex;
        gap: 16px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        a {
          li {
            list-style-type: none;
            font-size: 13px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 2px;
            text-transform: uppercase;
            transition: all 0.5s ease;
            cursor: pointer;
            :hover {
              color: ${DefaultTheme.colors.seraphimSepia};
            }
          }
        }
      }
    }
  }
  p {
    opacity: 0.5;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    margin: 48px 0px;
  }
  .sMediaCopyRight {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 48px;
    p {
      font-size: 15px;
      font-weight: 700;
      line-height: 25px;
      margin: 0px;
    }
    .sMedias {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      transition: all 0.3s, ease;
      svg {
        cursor: pointer;
        :hover path {
          fill: ${DefaultTheme.colors.seraphimSepia};
        }
      }
    }
  }
  @media (min-width: 768px) {
    padding: 0px 40px 46px 39px;
    hr {
      margin: 0;
      margin-bottom: 56px;
    }
    .navigationBox {
      gap: 32px;
      align-items: flex-start;
      nav {
        ul {
          gap: 34px;
          flex-direction: row;
        }
      }
    }
    p {
      max-width: 689px;
      text-align: left;
      margin: 32px 0px 80px 0px;
    }
    .sMediaCopyRight {
      justify-content: space-between;
      flex-direction: row;
    }
  }
  @media (min-width: 1440px) {
    padding: 0px 165px 48px 165px;
    hr {
      margin-bottom: 71px;
    }
    .navigationBox {
      flex-direction: row;
      justify-content: space-between;
    }
    p {
      max-width: 540px;
      margin: 36px 0px 56px 0px;
    }
    .sMediaCopyRight {
      .sMedias {
        margin-top: -88px;
      }
    }
  }
`;

export default FooterStyle;

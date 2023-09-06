import styled from "styled-components";
import DefaultTheme from "../DefaultTheme";
import bgMobile from "../../../assets/home/mobile/image-header.jpg";
import bgTablet from "../../../assets/home/tablet/image-header.jpg";
import bgDesktop from "../../../assets/home/desktop/image-hero.jpg";
import circle from "../../../assets/icons/pattern-circles.svg";
import speakerZx7 from "../../../assets/home/mobile/image-speaker-zx7.jpg";
import earphoneMobile from "../../../assets/home/mobile/image-earphones-yx1.jpg";

const HomeStyle = styled.div`
  .cover {
    color: ${DefaultTheme.colors.white};
    padding: 108px 24px 112px 23px;
    text-align: center;
    background-image: url(${bgMobile});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: ${DefaultTheme.colors.thamarBlack};
    margin-bottom: 8px;
    span {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 10px;
      text-transform: uppercase;
    }
    h2 {
      font-size: 36px;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 1.286px;
      text-transform: uppercase;
      margin: 36px auto 24px auto;
      max-width: 375px;
    }
    p {
      font-size: 15px;
      font-weight: 500;
      line-height: 25px;
      opacity: 0.75;
      margin: 0 auto 28px auto;
      max-width: 349px;
    }
    button {
      width: 160px;
      height: 48px;
      border: none;
      background-color: ${DefaultTheme.colors.seraphimSepia};
      color: ${DefaultTheme.colors.white};
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: all 0.3s ease;
      cursor: pointer;
      :hover {
        background-color: ${DefaultTheme.colors.apricotWash};
      }
    }
  }
  .products {
    padding: 85px 24px 35px 24px;
    .speakerZX9 {
      background-color: ${DefaultTheme.colors.seraphimSepia};
      border-radius: 8px;
      padding: 55px 24px 55px 23px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 32px;
      background-image: url(${circle});
      background-position: center -127px;
      background-size: cover;
      background-repeat: no-repeat;
      .imageWrapper {
        img {
          height: 207px;
        }
      }
      .textWrapper {
        max-width: 280px;
        text-align: center;
        color: ${DefaultTheme.colors.white};
        h1 {
          font-size: 36px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 1.286px;
          text-transform: uppercase;
          padding: 0 44px;
        }
        p {
          font-size: 15px;
          font-weight: 500;
          line-height: 25px;
          margin: 24px 0px;
          opacity: 0.75;
        }
        button {
          width: 160px;
          height: 48px;
          background-color: ${DefaultTheme.colors.black};
          border: none;
          color: ${DefaultTheme.colors.white};
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          :hover {
            background-color: ${DefaultTheme.colors.shadyCharacter};
          }
        }
      }
    }
    .speakerZX7 {
      height: 320px;
      width: 100%;
      background-image: url(${speakerZx7});
      background-position: center;
      background-size: 100% 320px;
      margin: 24px 0px;
      border-radius: 8px;
      padding: 101px 24px;
      font-weight: 700;
      h1 {
        font-size: 28px;
        letter-spacing: 2px;
        margin-bottom: 32px;
      }
      button {
        width: 140px;
        height: 48px;
        border: 1px solid ${DefaultTheme.colors.black};
        font-size: 13px;
        letter-spacing: 1px;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.3s ease;
        :hover {
          background-color: ${DefaultTheme.colors.black};
          color: ${DefaultTheme.colors.white};
        }
      }
    }
    .earphone {
      border-radius: 8px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 24px;
      div {
        height: 200px;
        border-radius: 8px;
      }
      .imageBox {
        background-image: url(${earphoneMobile});
        background-size: contain;
        background-position: center;
      }
      .textBox {
        padding: 41px 24px;
        background-color: ${DefaultTheme.colors.Beluga};
        h1 {
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 32px;
        }
        button {
          width: 140px;
          height: 48px;
          border: 1px solid ${DefaultTheme.colors.black};
          font-size: 13px;
          letter-spacing: 1px;
          font-weight: 700;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          :hover {
            background-color: ${DefaultTheme.colors.black};
            color: ${DefaultTheme.colors.white};
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .cover {
      padding-top: 126px;
      padding-bottom: 167px;
      background-image: url(${bgTablet});
      margin-bottom: 40px;
      span {
        opacity: 0.49;
      }
      h2 {
        font-size: 56px;
        line-height: 58px;
        letter-spacing: 2px;
        max-width: unset;
        width: 396px;
        margin: 24px auto;
      }
      p {
        max-width: unset;
        width: 349px;
        margin: 0 auto 40px auto;
      }
    }
  }
  @media (min-width: 1440px) {
    .cover {
      padding: 128px 165px 158px 165px;
      text-align: left;
      background-image: url(${bgDesktop});
      margin-bottom: 92px;
      h2 {
        margin: 24px 0px;
      }
      p {
        margin: 0 0 40px 0;
      }
    }
  }
`;

export default HomeStyle;

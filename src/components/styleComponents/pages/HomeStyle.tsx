import styled from "styled-components";
import DefaultTheme from "../DefaultTheme";
import bgMobile from "../../../assets/home/mobile/image-header.jpg";
import bgTablet from "../../../assets/home/tablet/image-header.jpg";
import bgDesktop from "../../../assets/home/desktop/image-hero.jpg";
import circle from "../../../assets/icons/pattern-circles.svg";
import speakerZx7 from "../../../assets/home/mobile/image-speaker-zx7.jpg";
import speakerZx7Tablet from "../../../assets/home/tablet/image-speaker-zx7.jpg";
import speakerZxrDesktop from "../../../assets/home/desktop/image-speaker-zx7.jpg";
import earphoneMobile from "../../../assets/home/mobile/image-earphones-yx1.jpg";
import earphoneTablet from "../../../assets/home/tablet/image-earphones-yx1.jpg";

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
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
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
    .products {
      padding: 29px 40px 11px 39px;
      .speakerZX9 {
        padding: 52px 169px 64px 171px;
        gap: 64px;
        background-position: center -170px;
        .imageWrapper {
          img {
            height: 237px;
          }
        }
        .textWrapper {
          max-width: 349px;
          h1 {
            font-size: 56px;
            line-height: 58px;
            letter-spacing: 2px;
            padding: unset;
          }
          p {
            margin: 24px 0px 40px 0px;
          }
        }
      }
      .speakerZX7 {
        background-image: url(${speakerZx7Tablet});
        margin: 32px 0px;
        padding: 101px 63.75px;
      }
      .earphone {
        flex-direction: row;
        gap: 11px;
        div {
          height: 320px;
          flex: 1;
        }
        .imageBox {
          background-image: url(${earphoneTablet});
        }
        .textBox {
          padding: 101px 0px;
          h1,
          button {
            margin-left: 41px;
          }
        }
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
    .products {
      padding: 101px 165px 107px 165px;
      .speakerZX9 {
        padding: 96px 0px 0px 0px;
        flex-direction: row;
        align-items: flex-start;
        overflow: hidden;
        gap: 138.28px;
        background-position: -70px -50px;
        background-size: 850px;
        .imageWrapper {
          img {
            height: 493px;
            margin-bottom: -34px;
          }
        }
        .textWrapper {
          max-width: 349px;
          text-align: left;
          h1 {
            font-size: 56px;
            line-height: 58px;
            letter-spacing: 2px;
            padding: 0;
          }
          p {
            margin: 24px 0px 40px 0px;
          }
        }
      }
      .speakerZX7 {
        background-image: url(${speakerZxrDesktop});
        margin: 48px 0px;
        padding: 101px 95px;
      }
      .earphone {
        width: 100%;
        flex-direction: row;
        gap: 30px;
        div {
          height: 320px;
          flex: 1;
        }
        .textBox {
          padding: 0px;
          h1 {
            padding: 101px 0px 0px 95px;
            margin: 0px 0px 32px 0px;
          }
          button {
            margin-left: 95px;
          }
        }
      }
    }
  }
`;

export default HomeStyle;

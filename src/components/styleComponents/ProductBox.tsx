import styled from "styled-components";
import DefaultTheme from "./DefaultTheme";
import gearMobile from "../../../assets/shared/mobile/image-best-gear.jpg";
import gearTablet from "../../../assets/shared/tablet/image-best-gear.jpg";
import gearDesktop from "../../../assets/shared/desktop/image-best-gear.jpg";

export const ProductBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 68px;
  padding: 84px 24px 35px 24px;
  background-color: ${DefaultTheme.colors.white};
  border-radius: 0px 0px 8px 8px;
  div {
    border-radius: 8px;
    background: ${DefaultTheme.colors.Beluga};
    opacity: 1;
    height: 165px;
    width: 100%;
    text-align: center;
    color: ${DefaultTheme.colors.black};
    text-transform: uppercase;
    font-weight: 700;
    h1 {
      font-size: 15px;
      letter-spacing: 1.071px;
      margin-top: -9px;
      margin-bottom: 17px;
    }
    a {
      font-size: 13px;
      letter-spacing: 1px;
      opacity: 0.5;
      cursor: pointer;
      span {
        transition: all 0.3s ease;
        margin-right: 13.32px;
        :hover {
          color: ${DefaultTheme.colors.seraphimSepia};
        }
      }
    }
  }
  #headphone {
    height: 104px;
    margin: -52px 0px 27px 0px;
  }
  #speaker {
    margin: -52px 0px 30px 0px;
    height: 101px;
  }
  #earPhone {
    height: 104px;
    margin: -52px 0px 27px 0px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    gap: unset;
    padding: 108px 39px 67px 40px;
    justify-content: space-between;
    div {
      width: 223px;
    }
  }
  @media (min-width: 1440px) {
    justify-content: center;
    gap: 30px;
    padding-left: 165px;
    padding-right: 165px;
    div {
      width: 350px;
      height: 204px;
      h1 {
        font-size: 18px;
        letter-spacing: 1.28px;
        margin-top: 0px;
        margin-bottom: 15px;
      }
    }
    #headphone {
      height: 160px;
      margin: -80px 0px 36px 0px;
    }
    #speaker {
      margin: -72.5px 0px 42.5px 0px;
      height: 146px;
    }
    #earPhone {
      height: 161px;
      margin: -85px 0px 40px 0px;
    }
  }
`;

export const StoryBox = styled.div`
  color: ${DefaultTheme.colors.black};
  padding: 85px 24px 120px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  .imageBox {
    width: 100%;
    height: 300px;
    border-radius: 8px;
    background-image: url(${gearMobile});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .textWrapper {
    text-align: center;
    h1 {
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 32px;
      span {
        color: ${DefaultTheme.colors.seraphimSepia};
      }
    }
    p {
      font-size: 15px;
      font-weight: 500;
      line-height: 25px;
      opacity: 0.5;
    }
  }
  @media (min-width: 768px) {
    padding: 85px 40px 120px 39px;
    .textWrapper {
      width: 573px;
      h1 {
        font-size: 40px;
        line-height: 44px;
        letter-spacing: 1.429px;
      }
    }
    .imageBox {
      background-image: url(${gearTablet});
    }
  }
  @media (min-width: 1440px) {
    padding: 93px 165px 160px 165px;
    flex-direction: row;
    gap: 125px;
    .textWrapper {
      width: 445px;
      text-align: left;
    }
    .imageBox {
      width: 540px;
      height: 588px;
      order: 2;
      background-image: url(${gearDesktop});
    }
  }
`;

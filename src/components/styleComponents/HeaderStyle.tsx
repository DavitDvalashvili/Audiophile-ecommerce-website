import styled from "styled-components";
import DefaultTheme from "./DefaultTheme";

export const HeaderStyle = styled.div`
  background-color: ${DefaultTheme.colors.black};
  color: ${DefaultTheme.colors.white};
  padding: 33px 24px 32px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 2px;
  .burger,
  .cart {
    cursor: pointer;
  }
  .bg {
    position: absolute;
    top: 90px;
    left: 0px;
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  @media (min-width: 768px) {
    padding: 32px 40px 33px 39px;
    justify-content: left;
    gap: 42px;
    .cart {
      margin-left: auto;
    }
  }
  @media (min-width: 1440px) {
    padding: 35px 165.17px 37px 165px;
    gap: 197px;
    nav {
      ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        text-decoration: none;
        gap: 34px;
        li {
          cursor: pointer;
          transition: all 0.3s ease;
          :hover {
            color: ${DefaultTheme.colors.seraphimSepia};
          }
        }
      }
    }
  }
`;

export const NavigationStyle = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 65px;
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
        margin-right: 13.32px;
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
`;

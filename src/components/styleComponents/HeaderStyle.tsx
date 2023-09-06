import styled from "styled-components";
import DefaultTheme from "./DefaultTheme";

export const HeaderStyle = styled.section`
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
  .cart .logo {
    cursor: pointer;
  }
  .bg {
    position: absolute;
    z-index: 5;
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

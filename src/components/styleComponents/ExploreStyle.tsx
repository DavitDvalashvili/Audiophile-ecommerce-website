import styled from "styled-components";
import DefaultTheme from "./DefaultTheme";

export const GalleryStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 8px;
    max-width: 375px;
    width: 100%;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 277px 395px;
    grid-template-rows: 174px 174px;
    column-gap: 18px;
    row-gap: 20px;
    img {
      max-width: unset;
      width: unset;
    }
    .first,
    .second {
      width: 277px;
    }
    .third {
      width: 395px;
      grid-column: 2 / 2;
      grid-row: 1 / 3;
    }
  }
  @media (min-width: 1440px) {
    grid-template-columns: 445px 635px;
    grid-template-rows: 280px 280px;
    column-gap: 30px;
    row-gap: 32px;
    .first,
    .second {
      width: 445px;
    }
    .third {
      width: 635px;
    }
  }
`;

export const RecommendationStyle = styled.section`
  text-align: center;
  color: ${DefaultTheme.colors.black};
  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0.857px;
    text-transform: uppercase;
    margin: 120px 0px 40px 0px;
  }
  .recommendProducts {
    display: flex;
    flex-direction: column;
    gap: 56px;
    img {
      border-radius: 8px;
      width: 100%;
    }
    h3 {
      margin: 32px 0px;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 1.714px;
      text-transform: uppercase;
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
  @media (min-width: 768px) {
    h2 {
      margin: 120px 0px 56px 0px;
    }
    .recommendProducts {
      flex-direction: row;
      justify-content: space-evenly;
      gap: 11px;
      img {
        width: 223px;
      }
      h3 {
        margin-top: 40px;
      }
    }
  }
  @media (min-width: 1440px) {
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
    h2 {
      font-size: 32px;
      letter-spacing: 1.163px;
      margin: 160px 0px 64px 0px;
    }
    .recommendProducts {
      gap: 30px;
      img {
        width: 350px;
      }
      h3 {
        margin: 40px 0px 32px 0px;
      }
    }
  }
`;

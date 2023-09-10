import styled from "styled-components";
import DefaultTheme from "../DefaultTheme";

export const GalleryStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 4px;
    max-width: 375px;
    width: 100%;
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
`;

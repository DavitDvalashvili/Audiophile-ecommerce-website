import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
   } 
   a {
      text-decoration: none;
      color: inherit; 
   }
   body {
      position: relative;
      &::-webkit-scrollbar {
         display: none;
      }
   }
`;

export default GlobalStyle;

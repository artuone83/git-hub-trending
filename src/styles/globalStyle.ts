import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }
  body {
    background: ${({ theme: themeProvider }) => themeProvider.colors.gray};
    overflow-x: hidden;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style-type: none;
  }
  p {
    font-size: 1rem;
  }`;

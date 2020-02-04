import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: Montserrat-Medium;
  }

  body.fontLoaded {
    font-family: Montserrat-Medium;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Montserrat-Medium;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;

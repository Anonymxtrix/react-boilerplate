import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    src: url('../assets/fonts/roboto-v20-latin-500.woff2') format('woff2'),
      url('../assets/fonts/roboto-v20-latin-500.woff') format('woff');
  }

  body {
    font-family: Roboto, sans-serif;
  }
`;

export default GlobalStyle;

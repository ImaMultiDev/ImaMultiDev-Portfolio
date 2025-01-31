import { css, Global } from '@emotion/react';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  body {
    background-color: #0D1117;
    line-height: 1.5;
  }

  #root {
    width: 100%;
    min-height: 100%;
  }
`;

export const GlobalStyles = () => <Global styles={globalStyles} />; 
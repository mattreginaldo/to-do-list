import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    transition: all 0.25s linear;
  }
`;

export default GlobalStyles;

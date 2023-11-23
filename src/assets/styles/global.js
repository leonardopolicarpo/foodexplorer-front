import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.colors.dark400};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary100};
    font-family: Poppins, sans-serif;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }
`; 
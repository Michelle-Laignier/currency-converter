import { createGlobalStyle } from "styled-components";

import bg2 from "../../src/assets/bg2.jpg"

export default createGlobalStyle`
  :root {
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-image: url(${bg2});
    
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100vh;
  }

  body, input, button {
    color: ${({ theme }) => theme.COLORS.TEXT};;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
  }

  button:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  input:hover,
  input:focus {
    outline: 3px solid ${({ theme }) => theme.COLORS.INPUT};
  }
`
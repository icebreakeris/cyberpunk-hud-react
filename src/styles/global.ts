import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        user-select: none;
    }
    
    html, body, #root {
        font-family: "Play";
        height: 100%;
        width: 100%;
    }
`;

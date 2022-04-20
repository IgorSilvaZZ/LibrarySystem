import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        justify-content: center;
        align-items:center;

        background: #ffffff;
    }
    
    body, input, textarea, button {
        font: 400 16px 'Poppins', sans-serif; 
    }
`;

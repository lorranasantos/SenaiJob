import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --primary: #c62828;
        --secondary: #ff6659;
        --background: #f5f5f5;
        --green: #43a047;
        --border: #9e9e9e;
        --black: #000000;
        --white: #ffffff;
    }
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    a:link {
        text-decoration: none;
    }
    a:visited {
        text-decoration: none;
    }
    a:active {
        text-decoration: none;
    }
`

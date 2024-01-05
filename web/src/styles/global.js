import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Noto Sans', sans-serif;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
    }
`;
import styled from "styled-components";
import background from "./assets/background.jpg"

export const Container = styled.div`
    grid-area: background;

    background-image: url(${background});

    background-position: center center;
    background-size: cover;

    @media( max-width: 800px ) {
        display: none;
    }  
`;
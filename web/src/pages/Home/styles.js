import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > main {
        width: min(90%, 130rem);
        margin: 7.4rem auto 0;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: "first second third";
        column-gap: 1.6rem;

        .one{
            grid-area: first;
            div + div {
                margin-top: 1.6rem;
            }
        }
        
        .two {
            grid-area: second;
            div + div {
                margin-top: 1.6rem;
            }
        }
        
        .three {
            grid-area: third;
            div + div {
                margin-top: 1.6rem;
            }
        }
    }

    @media(max-width: 900px) {
        > main {
            grid-template-columns: 1fr 1fr;
            grid-template-areas: "first second";
        }

        .three {
            display: none;
        }
    }

    @media(max-width: 600px) {
        > main {
            grid-template-columns: 1fr;
            grid-template-columns: "first";
        }

        .two {
            display: none;
        }
    }


`;
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > main {
        width: min(90%, 130rem);
        margin: 7.4rem auto 10rem;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: "first second third";
        column-gap: 1.6rem;

        .first-column{
            grid-area: first;
            div + div {
                margin-top: 1.6rem;
            }
        }
        
        .second-column {
            grid-area: second;
            div + div {
                margin-top: 1.6rem;
            }
        }
        
        .third-column {
            grid-area: third;
            div + div {
                margin-top: 1.6rem;
            }
        }

        .double-size {
            height: 60rem;
        }
    }

    .upload-image-modal,
    .delete-image-modal {
        position: fixed;
        inset: 0;
        display: flex;

        background-color: rgba(0, 0, 0, .25);
        
        justify-content: center;
        align-items: center;
        
        > div {
            width: min(90%, 62rem);
            padding: 2.4rem 3.2rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;

            background-color: ${ ({ theme }) => theme.COLORS.WHITE};
            border-radius: 1.2rem;

            h2 {
                font-weight: 500;
                font-size: 2.4rem;
                line-height: 3.2rem;
            }

            .buttons {
                display: flex;
                align-self: flex-end;
                gap: 2.4rem;

                
                .cancel-button {
                    background: none;
                    
                    border: none;
                    
                    font-size: 1.6rem;
                    font-weight: 500;
                    
                    color: ${ ({ theme }) => theme.COLORS.GRAY};
                    
                    line-height: 2rem;

                    cursor: pointer;
                }
            }
        }

    }

    .delete-image-modal .buttons button:last-child {
        background-color: ${ ({ theme }) => theme.COLORS.RED};
    }

    .none {
        display: none;
    }

    @media(max-width: 900px) {
        > main {
            grid-template-columns: 1fr 1fr;
            grid-template-areas: "first second";
        }

        .third-column {
            display: none;
        }
    }

    @media(max-width: 600px) {
        > main {
            grid-template-columns: 1fr;
            grid-template-columns: "first";
            place-content: center center;
            column-gap: 0;
        }

        .second-column {
            display: none;
        }
    }


`;
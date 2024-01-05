import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 30rem;
    border-radius: 1.2rem;
    position: relative;

    > img {
        width: 100%;
        height: inherit;
        border-radius: inherit;

        transition: filter .3s ease-in-out;
    }

    > button {
        position: absolute;
        top: 5%;
        right: 5%;

        transition: visibility .3s ease-in-out;
        visibility: hidden;

        font-weight: 500;

        color: ${ ({ theme }) => theme.COLORS.RED};
        background: none;
        border: 1px solid ${ ({ theme }) => theme.COLORS.RED};
        padding: .5rem 1.5rem;
        border-radius: 3.8rem;

        cursor: pointer;
    }
    
    > h2 {
        position: absolute;
        left: 6%;
        bottom: 5%;
        
        color: ${ ({ theme }) => theme.COLORS.WHITE};

        transition: visibility .3s ease-in-out;
        visibility: hidden;
        
        width: 80%;

        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2rem;

        font-family: 'Montserrat', sans-serif;
    }

    &:hover {
        img {
            filter: brightness(0.5);
        }

        button, h2 {
            visibility: visible;
        }
    }
`;
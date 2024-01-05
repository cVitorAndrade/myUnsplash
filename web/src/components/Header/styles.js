import styled from "styled-components";

export const Container = styled.header`
    width: min(90%, 130rem);
    margin: auto;
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        gap: 3.2rem;
        align-items: center;
    }

    .brand {
        display: flex;
        gap: 1rem;
        
        h1 {
            display: flex;
            flex-direction: column;

            color: ${ ({ theme }) => theme.COLORS.BLACK};

            line-height: 2rem;
            
            font-size: 1.8rem;
            font-weight: 800;

            span {
                font-size: 1.4rem;
                font-weight: 500;
                
                line-height: 1.2rem;
            }
        }
    }

    .search {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        padding: 1.4rem;

        border-radius: 1.2rem;
        border: 1px solid ${ ({ theme }) => theme.COLORS.GRAY};

        > label {
            color: ${ ({ theme }) => theme.COLORS.GRAY};
        }

        > input {
            border: none;
            outline: none;

            &::placeholder {
                color: ${ ({ theme }) => theme.COLORS.GRAY};
                font-size: 1.4rem;
                font-weight: 500;
                line-height: 2rem;
            }
        }
    }

    button {
        background-color: ${ ({ theme }) => theme.COLORS.GREEN};
        border: none;
        color: ${ ({ theme }) => theme.COLORS.WHITE};
        border-radius: 1.2rem;
        padding: 0 2.6rem;

        font-size: 1.4rem;
        font-weight: 700;
        line-height: 2rem;

        transition: filter .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);

        &:hover {
            filter: brightness(0.9);
            cursor: pointer;
        }
    }
`;
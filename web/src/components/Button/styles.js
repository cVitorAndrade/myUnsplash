import styled from "styled-components";

export const Container = styled.button`
    background-color: ${ ({ theme }) => theme.COLORS.GREEN};
    border: none;
    color: ${ ({ theme }) => theme.COLORS.WHITE};
    border-radius: 1.2rem;
    padding: 1.8rem 2.6rem;

    font-size: 1.4rem;
    font-weight: 700;
    line-height: 2rem;

    transition: filter .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    &:hover {
        filter: brightness(0.9);
        cursor: pointer;
    }
`;


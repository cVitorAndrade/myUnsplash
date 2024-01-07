import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    > input {
        padding: 1.8rem;
        border: 1px solid #4f4f4f;
        border-radius: 1.2rem;
        outline: none;
    }
`;
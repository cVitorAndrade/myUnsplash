import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;

    grid-template-columns: 1fr 1fr;
    grid-template-areas: "content background";

    > main {
        grid-area: content;

        display: flex;
        align-items: center;
        justify-content: center;

        .header {   
            h1 {
                font-size: 3.2rem;
                font-weight: 500;
            }
            
            p {
                font-size: 1.6rem;
                font-weight: 500;
            }
        }
        
        
        form {
            width: min(90%, 40rem);

            display: flex;
            flex-direction: column;
            gap: 2.4rem;
        }

    }
`;
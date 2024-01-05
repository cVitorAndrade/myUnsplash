import { Container } from "./styles";

export function ImageItem ({ title }) {
    return(
        <Container>
            <img src="https://github.com/cvitorandrade.png" alt="" />
            <button>delete</button>
            <h2>{ title }</h2>
        </Container>
    )
}
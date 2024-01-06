import { Container } from "./styles";

export function ImageItem ({ title, path, ...rest}) {
    return(
        <Container { ...rest }>
            <img src={path} alt="" />
            <button>delete</button>
            <h2>{ title }</h2>
        </Container>
    )
}
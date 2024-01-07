import { Container } from "./styles";

export function Input ({ title, ...rest}) {
    return(
        <Container>
            <label htmlFor="">{ title }</label>
            <input type="text" />
        </Container>
    )
}
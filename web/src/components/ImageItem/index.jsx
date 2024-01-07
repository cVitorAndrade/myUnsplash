import { Container } from "./styles";

export function ImageItem ({ title, path, deleteImage, ...rest}) {
    return(
        <Container { ...rest }>
            <img 
                src={path} 
                alt={title} />

            <button 
                onClick={deleteImage}
            >
                delete
            </button>

            <h2>{ title }</h2>
        </Container>
    )
}
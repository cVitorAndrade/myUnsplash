import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ImageItem } from "../../components/ImageItem";
import { Container } from "./styles";

export function Home () {
    const [allImages, setAllImages] = useState([
        {
            title: "titulo 1"
        },
        {
            title: "titulo 2"
        },
        {
            title: "titulo 3"
        },
        {
            title: "titulo 4"
        },
        {
            title: "titulo 5"
        },
        {
            title: "titulo 6"
        },
        {
            title: "titulo 7"
        },
    ])

    const [firstColumnImage, setFirstColumnImage] = useState();
    const [secondColumnImage, setSecondColumnImage] = useState();
    const [thirdColumnImage, setThirdColumnImage] = useState();

    const [columnsNumber, setColumnsNumber] = useState(1)

    useEffect(() => {
        function handleResize() {
            if ( window.innerWidth >= 900 ) {
                setColumnsNumber(3)
            } else if ( window.innerWidth >= 600 ) {
                setColumnsNumber(2)
            } else {
                setColumnsNumber(1)
            }
        }
        
        handleResize();
        window.addEventListener("resize", handleResize)
        
        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])

    useEffect(() => {
        if ( columnsNumber === 1 ) {
            setFirstColumnImage(allImages);
            return
        } else if ( columnsNumber === 2 ) {
            const first = allImages.filter((image, index) => index < allImages.length /2)
            const second = allImages.filter((image, index) => index > allImages.length / 2 && index < allImages.length)
            setFirstColumnImage(first)
            setSecondColumnImage(second)
        } else {
            const first = allImages.filter((image, index) => index < allImages.length /3)
            const second = allImages.filter((image, index) => index > allImages.length / 3 && index < (allImages.length / 3) * 2 )
            const third = allImages.filter((image, index) => index > (allImages.length /3) * 2 && index < allImages.length) 

            setFirstColumnImage(first)
            setSecondColumnImage(second)
            setThirdColumnImage(third)
        }

    }, [columnsNumber])

    console.log(firstColumnImage);
    

    return(
        <Container>
            <Header />

            <main>

                    <div className="one">
                        {
                            firstColumnImage && firstColumnImage.map( image => (
                                <ImageItem title={image.title} key={image.title}/>
                            ))
                        }
                    </div>
                
                    <div className="two">
                        {
                            secondColumnImage && secondColumnImage.map( image => (
                                <ImageItem title={image.title} key={image.title}/>
                            ))
                        }
                    </div>

                    <div className="three">
                        {
                            thirdColumnImage && thirdColumnImage.map( image => (
                                <ImageItem title={image.title} key={image.title}/>
                            ))
                        }
                    </div>

            </main>

        </Container>
    )
}
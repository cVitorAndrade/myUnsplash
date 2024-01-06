import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ImageItem } from "../../components/ImageItem";
import { Container } from "./styles";
import { api } from "../../services/api";

export function Home () {
    const [allImages, setAllImages] = useState([]);
    
    useEffect(() => {
        api.get("/images").then( ({ data }) => {
            setAllImages([...data.images])
        }).catch(error => {
            console.log(error);
        })
    }, []);

    const [firstColumnImage, setFirstColumnImage] = useState();
    const [secondColumnImage, setSecondColumnImage] = useState();
    const [thirdColumnImage, setThirdColumnImage] = useState();

    const [columnsNumber, setColumnsNumber] = useState()

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
            const second = allImages.filter((image, index) => index >= allImages.length / 2 && index < allImages.length)
            setFirstColumnImage(first)
            setSecondColumnImage(second)
        } else {
            const first = allImages.filter((image, index) => index < allImages.length /3)
            const second = allImages.filter((image, index) => index >= allImages.length / 3 && index < (allImages.length / 3) * 2 )
            const third = allImages.filter((image, index) => {
                if ( index >= (allImages.length /3) * 2 && index <= allImages.length ) {
                    return true;
                }
            }) 

            setFirstColumnImage(first)
            setSecondColumnImage(second)
            setThirdColumnImage(third)
        }

    }, [columnsNumber, allImages])    

    return(
        <Container>
            <Header />

            <main>

                    <div className="first-column">
                        {
                            firstColumnImage && firstColumnImage.map( image => {
                                const doubleSize = Math.floor(Math.random() * 10) >= 5;

                                return (
                                    <ImageItem 
                                        key={image.id} 
                                        title={image.title} 
                                        path={image.path}
                                        className={doubleSize ? "double-size" : ""}
                                    />
                                )
                            })
                        }
                    </div>
                
                    <div className="second-column">
                        {
                            secondColumnImage && secondColumnImage.map( image => {
                                const doubleSize = Math.floor(Math.random() * 10) >= 5;

                                return (
                                    <ImageItem 
                                        key={image.id} 
                                        title={image.title} 
                                        path={image.path}
                                        className={doubleSize ? "double-size" : ""}
                                    />
                                )
                            })
                        }
                    </div>

                    <div className="third-column">
                        {
                            thirdColumnImage && thirdColumnImage.map( image => {
                                const doubleSize = Math.floor(Math.random() * 10) >= 5;

                                return (
                                    <ImageItem 
                                        key={image.id} 
                                        title={image.title} 
                                        path={image.path}
                                        className={doubleSize ? "double-size" : ""}
                                    />
                                )
                            })
                        }
                    </div>

            </main>

        </Container>
    )
}
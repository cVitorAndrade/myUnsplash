import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ImageItem } from "../../components/ImageItem";
import { Container } from "./styles";
import { api } from "../../services/api";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Home () {
    const [allImages, setAllImages] = useState([]);

    const [imageTitle, setImageTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [visibleUploadModal, setVisibleUploadModal] = useState(false);

    
    useEffect(() => {
        getImages();
    }, []);

    
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
    
    const [firstColumnImage, setFirstColumnImage] = useState();
    const [secondColumnImage, setSecondColumnImage] = useState();
    const [thirdColumnImage, setThirdColumnImage] = useState();

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

    function getImages () {
        api.get("/images").then( ({ data }) => {
            setAllImages([...data.images])
        }).catch(error => {
            console.log(error);
        })
    }

    function handleDeleteImage (id) {
        try {
            api.delete(`/images/${id}`)
            getImages();
        } catch (error) {
            console.log(error);
        }
    }

    function handleImageUpload () {
        try {
            api.post("/images", { title: imageTitle, path: imageUrl });
            
            getImages();
            clearScreen();
        } catch (error) {
            console.log(error);
        }
    }

    function clearScreen () {
        setVisibleUploadModal(false);
        setImageTitle("");
        setImageUrl("");
    }

    return(
        <Container>
            <Header 
                onClick={() => setVisibleUploadModal(true)}
            />

            <main>

                    <div className="first-column">
                        {
                            firstColumnImage && firstColumnImage.map( image => {

                                return (
                                    <ImageItem 
                                        key={image.id} 
                                        title={image.title} 
                                        path={image.path}
                                        className={image.id % 2 == 0 ? "double-size" : ""}
                                        deleteImage={() => handleDeleteImage(image.id)}
                                    />
                                )
                            })
                        }
                    </div>
                
                    <div className="second-column">
                        {
                            secondColumnImage && secondColumnImage.map( image => {

                                return (
                                    <ImageItem 
                                        key={image.id} 
                                        title={image.title} 
                                        path={image.path}
                                        className={image.id % 2 == 1 ? "double-size" : ""}
                                        deleteImage={() => handleDeleteImage(image.id)}
                                    />
                                )
                            })
                        }
                    </div>

                    <div className="third-column">
                        {
                            thirdColumnImage && thirdColumnImage.map( image => {

                                return (
                                    <ImageItem 
                                        key={image.id} 
                                        title={image.title} 
                                        path={image.path}
                                        className={image.id % 2 == 0 ? "double-size" : ""}
                                        deleteImage={() => handleDeleteImage(image.id)}
                                    />
                                )
                            })
                        }
                    </div>

            </main>

            <section className={visibleUploadModal ? "upload-image-modal" : "none"}>
                <div>
                    <h2>Add a new photo</h2>

                    <Input title="Label" onChange={ e => setImageTitle(e.target.value) }/>
                    <Input title="Photo URL" onChange={ e => setImageUrl(e.target.value) }/>

                    <div className="buttons">
                        <button 
                            className="cancel-button"
                            onClick={() => setVisibleUploadModal(false)}
                        >
                            Cancel
                        </button>
                        <Button title="Submit" onClick={handleImageUpload}/>
                    </div>
                </div>

            </section>

        </Container>
    )
}
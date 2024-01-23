import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ImageItem } from "../../components/ImageItem";
import { Container } from "./styles";
import { api } from "../../services/api";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Home () {
    const [allImages, setAllImages] = useState([]);
    const [validImages, setValidImages] = useState([]);

    const [imageTitle, setImageTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [password, setPassword] = useState("");

    const [visibleUploadModal, setVisibleUploadModal] = useState(false);
    const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);

    
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
            setFirstColumnImage(validImages);
            return
        } else if ( columnsNumber === 2 ) {
            const first = validImages.filter((image, index) => index < validImages.length / columnsNumber)
            const second = validImages.filter((image, index) => index >= validImages.length / columnsNumber && index < validImages.length)
            setFirstColumnImage(first)
            setSecondColumnImage(second)
        } else {
            const first = validImages.filter((image, index) => index < validImages.length /  columnsNumber)
            const second = validImages.filter((image, index) => index >= validImages.length /  columnsNumber && index < (validImages.length / columnsNumber) * 2 )
            const third = validImages.filter((image, index) => index >= (validImages.length / columnsNumber) * 2 && index <= validImages.length ) 

            setFirstColumnImage(first)
            setSecondColumnImage(second)
            setThirdColumnImage(third)
        }

    }, [columnsNumber, validImages])    

    function getImages () {
        api.get("/images").then( ({ data }) => {
            const sortedImages = [...data.images].sort( (a,b) => b.id - a.id );
            setAllImages(sortedImages)
            setValidImages(sortedImages)
        }).catch(error => {
            console.log(error);
        })
    }

    const [imageId, setImageId] = useState();

    function openDeleteModal (id) {
        setVisibleDeleteModal(true);
        setImageId(id);
    }

    async function handleDeleteImage () {
        try {
            await api.delete(`/images/${imageId}`, {
                headers: {
                    "password": password
                }
            });

            clearScreen();
            getImages();
        } catch (error) {
            console.log(error);
        }
    }

    function handleImageUpload () {
        try {
            api.post("/images", { title: imageTitle, path: imageUrl });
            
            clearScreen();
            getImages();
            
        } catch (error) {
            console.log(error);
        }
    }

    function clearScreen () {
        setVisibleUploadModal(false);
        setImageTitle("");
        setImageUrl("");
        
        setVisibleDeleteModal(false);
        setPassword("");
    }

    function imageFilter (value) {
        if ( value.trim() == "" ) {
            setValidImages(allImages);
            return;
        }

        const filteredImages = allImages.filter( image => image.title.toLowerCase().includes(value.toLowerCase()));
        setValidImages(filteredImages);
    }


    return(
        <Container>
            <Header 
                onClick={() => setVisibleUploadModal(true)}
                onChange={ e => imageFilter(e.target.value)}
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
                                        deleteImage={() => openDeleteModal(image.id)}
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
                                        deleteImage={() => openDeleteModal(image.id)}
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
                                        deleteImage={() => openDeleteModal(image.id)}
                                    />
                                )
                            })
                        }
                    </div>

            </main>

            <section className={visibleUploadModal ? "upload-image-modal" : "none"}>
                <div>
                    <h2>Add a new photo</h2>

                    <Input 
                        title="Label" 
                        value={imageTitle} 
                        onChange={ e => setImageTitle(e.target.value) }
                    />

                    <Input 
                        title="Photo URL" 
                        value={imageUrl} 
                        onChange={ e => setImageUrl(e.target.value) }
                    />

                    <div className="buttons">
                        <button 
                            className="cancel-button"
                            onClick={clearScreen}
                        >
                            Cancel
                        </button>
                        <Button title="Submit" onClick={handleImageUpload}/>
                    </div>
                </div>

            </section>

            <section className={visibleDeleteModal ? "delete-image-modal" : "none"}>
                <div>
                    <h2>Are you sure?</h2>

                    <Input 
                        title="Password" 
                        value={password} 
                        type="password"
                        onChange={ e => setPassword(e.target.value) }
                    />

                    <div className="buttons">
                        <button 
                            className="cancel-button"
                            onClick={clearScreen}
                        >
                            Cancel
                        </button>
                        <Button title="Delete" onClick={handleDeleteImage}/>
                    </div>
                </div>

            </section>

        </Container>
    )
}
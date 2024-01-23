import {useEffect, useState} from "react";
import {showImage} from "../../../redux/services/ImageService";

export function ImageHistory({item}) {
    const [images, setImages] = useState([]);
    useEffect(() => {
        showImage(item).then((response) => {
            setImages(response.data)
        })
    }, [item]);
    return (
        <>
            <a href="single-listing-1.html"
               className="image-wrapper background-image">
                <img src={images && images.length > 0 ? images[0].image : ""} alt=""/>
            </a>
        </>
    )
}
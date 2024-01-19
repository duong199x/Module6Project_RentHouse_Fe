import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {showImage} from "../../../redux/services/ImageService";

export function HouseOfUser({item, handleDelete}) {
    const [images, setImages] = useState([]);
    useEffect(() => {
        showImage(item.id).then((response) => {
            // console.log(response)
            setImages(response.data)
        })
    }, []);
    const ondelect = () => {
        handleDelete(item.id)
    }
    return (
        <>
            <div className="item">
                <div className="wrapper">
                    <div className="image">
                        <h3 style={{top:"-4px"}}>
                            <a href="single-listing-1.html" className="title" style={{float:"left"}}>{item.name}</a>
                            <a href="#" className="tag category" >{item?.category?.name}</a>
                            <span className="tag" style={{float:"left",marginLeft:"4px"}}>Offer</span>
                        </h3>
                        <Link to={`house/${item.id}`}
                           className="image-wrapper background-image">
                            <img src={images && images.length > 0 ? images[0].image : ""} alt=""/>
                        </Link>
                    </div>

                    <h4 className="location">
                        <a href="#">{item.location}</a>
                    </h4>
                    <div className="price">{item.price} VND</div>
                    <div className="admin-controls">
                        <Link to={`houseupdate/${item.id}`}>
                            <i className="fa fa-pencil"></i>EDIT
                        </Link>
                        <Link to={`images/${item.id}`}>
                            <i className="fa fa-pencil"></i>EDIT IMAGE</Link>
                        <a
                            onClick={() =>
                                ondelect()
                            }
                            href='javascript:' className="ad-remove">
                            <i className="fa fa-trash"></i>REMOVE
                        </a>
                    </div>

                    <div className="description">
                        <p>{item.description}</p>
                    </div>

                    <Link to={`house/${item.id}`} href="single-listing-1.html"
                          className="detail text-caps underline">Detail</Link>
                </div>
            </div>
        </>
    )
}

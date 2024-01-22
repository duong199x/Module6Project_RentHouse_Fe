import {Box, Rating, Typography} from "@mui/material";
import {useState} from "react";

export function Comment({item}) {
    return (
        <>
            <h2>★4,82 · 160 Đánh giá</h2>
            <div className={"row"}>
                <div className={'col-6'}>
                    <div className="author">
                        <div className="author-image">
                            <div className="background-image"><img
                                src={item.userDTO.imageUser ? item.userDTO.imageUser : 'https://placehold.co/400'}
                                alt=""/></div>
                        </div>
                        <div className="author-description">
                            <p style={{color: 'darkred'}}>{item.userDTO.fullName}</p>
                            <a href="seller-detail-1.html" className="text-uppercase">Hà Nội</a>
                            <div className="rating" data-rating="4"></div>
                        </div>
                    </div>
                    <p>
                            <Box sx={{'& > legend': {mt: 2},}}>
                            <Rating name="read-only" value={5} readOnly />
                            </Box>
                        <span> 15-01-2024</span>
                    </p>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
                </div>
            </div>
        </>
    )
}
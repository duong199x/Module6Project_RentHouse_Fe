import {Box, Button, dialogContentClasses, Modal, Rating, Stack, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getHistoryBooking, removeBooking} from "../../../redux/services/BookingService";
import {ImageHistory} from "./ImageHistory";
import {toast} from "react-toastify";
import "./HistoryBuy.css"
import {Field, Form, Formik} from "formik";
import {addComment} from "../../../redux/services/CommentService";

export default function HistoryBuy() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const listBookingUser = useSelector(({bookings}) => {
        return bookings.list;
    })
    useEffect(() => {
        dispatch(getHistoryBooking(id))
    }, []);
    let listBookingUserReverse = [...listBookingUser].reverse();
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    function statusInfo(status) {
        switch (status) {
            case 'CHECK_IN':
                return <>
                    <aside style={{
                        border: '1px solid steelblue',
                        borderRadius: '3px',
                        padding: '3px',
                        backgroundColor: 'steelblue',
                        color: 'white'
                    }}>Nhận phòng
                    </aside>
                </>
                break;
            case 'IN_PROGRESS':
                return <>
                    <aside style={{
                        border: '1px solid orange',
                        borderRadius: '3px',
                        padding: '3px',
                        backgroundColor: 'orange',
                        color: 'white'
                    }}>Chờ nhận phòng
                    </aside>
                </>
                break;
            case 'COMPLETED':
                return <>
                    <aside style={{
                        border: '1px solid green',
                        borderRadius: '3px',
                        padding: '3px',
                        backgroundColor: 'green',
                        color: 'white'
                    }}>Hoàn thành
                    </aside>
                </>
                break;
            case 'CANCELLED':
                return <>
                    <aside style={{
                        border: '1px solid red',
                        borderRadius: '3px',
                        padding: '3px',
                        backgroundColor: 'red',
                        color: 'white'
                    }}>Đã hủy
                    </aside>
                </>
                break;
        }
    }

    const deleteBooking = (idBooking) => {
        dispatch(removeBooking(idBooking)).then((data) => {
            if (data.error) {
                toast.error(`Huỷ Phòng Thất Bại! Bạn Không Thể Huỷ Trước 1 Ngày Checkin !`, {
                    position: "top-right"
                });
            } else {
                toast.success(`Huỷ Phòng Thành Công !`, {
                    position: "top-right"
                });
                dispatch(getHistoryBooking(id))
            }

        })
    }
    //danh gia
    const [open, setOpen] = useState(false);
    const handleOpen = (id) => {
        setIdSelected(id)
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 400,
        bgcolor: '#f2f2f2',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: '10px',
    };
    const [idSelected,setIdSelected]= useState(0);
    const [rating, setRating] = useState(5);
    const handleComment = (values) => {
        values.star = rating;
        dispatch(addComment(values)).then(() => {
            handleClose()
            dispatch(getHistoryBooking(id))

            }
        )
    }
    return (
        <>
            <div className="col-md-9">
                <div className="section-title clearfix">
                    <div className="float-left float-xs-none">
                        <select name="sorting" id="sorting" className="small width-200px"
                                data-placeholder="Default Sorting">
                            <option value="">Default Sorting</option>
                            <option value="1">Newest First</option>
                            <option value="2">Oldest First</option>
                            <option value="3">Lowest Price First</option>
                            <option value="4">Highest Price First</option>
                        </select>

                    </div>
                </div>
                {
                    listBookingUserReverse && listBookingUserReverse.map((item) =>
                        <div
                            className="items list grid-xl-3-items grid-lg-3-items grid-md-2-items">
                            {console.log("item",item)}
                            <div className="item">
                                <div className="wrapper">
                                    <div className="image">
                                        <h3>
                                            <a href="#" className="tag category">{item.house.category.name}</a>
                                            <a href="single-listing-1.html" className="title"
                                               style={{float: 'left', marginTop: '-20px'}}>{item.house.name}</a>
                                        </h3>
                                        <ImageHistory item={item.house}/>
                                    </div>

                                    <h4 className="location">
                                        <a href="#">{item.house.location}</a>
                                    </h4>
                                    <div className="price">{item.price} VND</div>
                                    <div className="meta">
                                        <figure>
                                            <i className="fa fa-calendar-o"></i>Ngày đặt: {formatDate(item.createAt)}
                                        </figure>
                                        <figure>
                                            <a href="#">
                                                <i className="fa fa-user"></i>Chủ nhà: {item.house.userDTO.fullName}
                                            </a>
                                        </figure>
                                    </div>

                                    <div className="description">
                                        <p>Nếu quý khách đặt sai hoặc không muốn đặt nữa. Vui lòng bấm hủy trong thời gian
                                            trước <b style={{color: 'red'}}>1 ngày</b></p>
                                    </div>

                                    <div className="additional-info">
                                        <ul>
                                            <li>
                                                <figure>Ngày bắt đầu</figure>
                                                <aside>{formatDate(item.startDate)}</aside>
                                            </li>
                                            <li>
                                                <figure>Ngày kết thúc</figure>
                                                <aside>{formatDate(item.endDate)}</aside>
                                            </li>
                                            <li>
                                                <figure>Số khách</figure>
                                                <aside>{item.numberOfGuests}</aside>
                                            </li>
                                            <li>
                                                <figure>Trạng thái</figure>
                                                {statusInfo(item.status)}
                                            </li>
                                        </ul>
                                    </div>
                                    {item.status && item.status === "IN_PROGRESS" ?
                                        <a href="javascript:" onClick={() => deleteBooking(item.id)}
                                           className="detail text-caps underline">
                                            Hủy
                                        </a> : item.status === "COMPLETED" ?
                                            <a href="javascript:" onClick={()=>handleOpen(item.house.id)}
                                               className="detail text-caps underline" id="commentRating">
                                                Đánh giá
                                            </a> :
                                            <a href="javascript:" onClick={() => deleteBooking(item.id)}
                                               className="detail text-caps underline isDis" style={{
                                                pointerEvents: 'none',
                                                color: 'gray',
                                                textDecoration: 'none',
                                                cursor: 'not-allowed',
                                                borderColor: 'gray'
                                            }}>
                                                Hủy
                                            </a>}

                                </div>
                            </div>
                        </div>
                    )}

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Formik initialValues={{
                        content: "",
                        star: 0,
                        userId: id,
                        houseId: idSelected,
                    }} onSubmit={handleComment}
                            enableReinitialize={true}
                    >
                        <Form>
                            <Box sx={style}>
                                <center><h1> Đánh giá nhà thuê</h1></center>
                                <Typography id="modal-modal-title" variant="h5" component="h1"
                                            style={{paddingBottom: '5px'}}>
                                   <strong>Xếp hạng</strong>
                                </Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={rating}
                                    onChange={(event, newValue) => {
                                        setRating(newValue);
                                    }}
                                />
                                <Typography id="modal-modal-title" variant="h5" component="h1"
                                            style={{paddingBottom: '5px'}}>
                                    <strong>Đánh giá</strong>
                                </Typography>
                                <Field
                                    as="textarea"
                                    id="myTextarea"
                                    name="content"
                                    rows="8" // Optional: Specify the number of visible text lines
                                    cols="60"></Field>
                                <button type={"submit"} className="btn btn-info" style={{
                                    width: "70px",
                                    height: "40px",
                                    marginTop: "10px",
                                    paddingTop: '10px',
                                    float: 'right'
                                }}>Gửi
                                </button>
                            </Box>
                        </Form>
                    </Formik>
                </Modal>
            </div>

        </>
    )
}

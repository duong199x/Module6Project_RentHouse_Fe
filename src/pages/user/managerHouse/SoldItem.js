import "./SoldItem.css"
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllBookingByHostId, getHistoryBooking, setCheckInStatus} from "../../../redux/services/BookingService";
import {getUser} from "../../../redux/services/UserService";
import {ImageSoldItem} from "./ImageSoldItem";

export default function SoldItem() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const listBookingHost = useSelector(({bookings}) => {
        return bookings.list;
    })
    useEffect(() => {
        dispatch(getAllBookingByHostId(id))
    }, []);

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

    const setCheckIn = (idBooking) => {
        dispatch(setCheckInStatus(idBooking)).then(() => {
            dispatch(getAllBookingByHostId(id))
        })
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

    return (
        <>
            <div className="col-md-9">
                <div className="section-title clearfix">
                    <div className="float-left float-xs-none">
                        <label className="mr-3 align-text-bottom">Sort by: </label>
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
                {listBookingHost && listBookingHost.map((item) =>
                    <div
                        className="items list grid-xl-3-items grid-lg-3-items grid-md-2-items">
                        <div className="item">
                            <div className="wrapper">
                                <div className="image">
                                    <h3>
                                        <a href="#" className="tag category">{item.house.category.name}</a>
                                        <a href="single-listing-1.html" className="title"
                                           style={{float: 'left', marginTop: '-20px'}}>{item.house.name}</a>
                                    </h3>
                                    <ImageSoldItem item={item.house}/>
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
                                            <i className="fa fa-user"></i>Người đặt: {item.user.fullName}
                                        </a>
                                    </figure>
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

                                <a href="javascrip:"
                                   className="detail text-caps underline" id='buttonCheckIn'
                                   onClick={() => setCheckIn(item.id)}>Nhận phòng</a>

                            </div>
                        </div>
                    </div>
                )}


            </div>

        </>
    )
}
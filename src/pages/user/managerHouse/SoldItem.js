import "./SoldItem.css"

export default function SoldItem() {
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
                {/*{listBookingUser && listBookingUser.map((item) => */}
                <div
                    className="items list grid-xl-3-items grid-lg-3-items grid-md-2-items">
                    <div className="item">
                        <div className="wrapper">
                            <div className="image">
                                <h3>
                                    <a href="#" className="tag category">item.house.category.name</a>
                                    <a href="single-listing-1.html" className="title"
                                       style={{float: 'left', marginTop: '-20px'}}>item.house.name</a>
                                </h3>
                                {/*<ImageHistory item=item.house/>*/}
                            </div>

                            <h4 className="location">
                                <a href="#">item.house.location</a>
                            </h4>
                            <div className="price">item.price VND</div>
                            <div className="meta">
                                <figure>
                                    <i className="fa fa-calendar-o"></i>Ngày đặt: formatDate(item.createAt)
                                </figure>
                                <figure>
                                    <a href="#">
                                        <i className="fa fa-user"></i>Chủ nhà: item.house.userDTO.fullName
                                    </a>
                                </figure>
                            </div>
                            <div className="additional-info">
                                <ul>
                                    <li>
                                        <figure>Ngày bắt đầu</figure>
                                        <aside>formatDate(item.startDate)</aside>
                                    </li>
                                    <li>
                                        <figure>Ngày kết thúc</figure>
                                        <aside>formatDate(item.endDate)</aside>
                                    </li>
                                    <li>
                                        <figure>Số khách</figure>
                                        <aside>item.numberOfGuests</aside>
                                    </li>
                                    <li>
                                        <figure>Trạng thái</figure>
                                        <aside style={{
                                            border: '1px solid green',
                                            borderRadius: '5px',
                                            padding: '1px'
                                            ,backgroundColor:'green',color:'white'
                                        }}>statusInfo(item.status)
                                        </aside>
                                    </li>
                                </ul>
                            </div>

                            <a href=""
                               className="detail text-caps underline" id='buttonCheckIn'>Nhận phòng</a>
                        </div>
                    </div>
                </div>
                {/*)}*/}


            </div>

        </>
    )
}
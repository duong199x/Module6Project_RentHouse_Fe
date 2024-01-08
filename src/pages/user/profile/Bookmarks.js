export default function Bookmarks() {
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
                    <div className="float-right d-xs-none thumbnail-toggle">
                        <a href="#" className="change-class" data-change-from-class="list"
                           data-change-to-class="grid" data-parent-class="items">
                            <i className="fa fa-th"></i>
                        </a>
                        <a href="#" className="change-class active" data-change-from-class="grid"
                           data-change-to-class="list" data-parent-class="items">
                            <i className="fa fa-th-list"></i>
                        </a>
                    </div>
                </div>

                <div className="items list compact grid-xl-3-items grid-lg-3-items grid-md-2-items">
                    <div className="item">
                        <div className="ribbon-vertical">
                            <i className="fa fa-star"></i>
                        </div>

                        <div className="wrapper">
                            <div className="image">
                                <h3>
                                    <a href="#" className="tag category">Home & Decor</a>
                                    <a href="single-listing-1.html" className="title">Furniture for
                                        sale</a>
                                    <span className="tag">Offer</span>
                                </h3>
                                <a href="single-listing-1.html"
                                   className="image-wrapper background-image">
                                    <img src="assets/img/image-01.jpg" alt=""/>
                                </a>
                            </div>

                            <h4 className="location">
                                <a href="#">Manhattan, NY</a>
                            </h4>
                            <div className="price">$80</div>
                            <div className="meta">
                                <figure>
                                    <i className="fa fa-calendar-o"></i>02.05.2017
                                </figure>
                                <figure>
                                    <a href="#">
                                        <i className="fa fa-user"></i>Jane Doe
                                    </a>
                                </figure>
                            </div>

                            <div className="description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                    venenatis lobortis</p>
                            </div>

                            <a href="single-listing-1.html"
                               className="detail text-caps underline">Detail</a>
                        </div>
                    </div>


                    <div className="item">
                        <div className="ribbon-vertical">
                            <i className="fa fa-star"></i>
                        </div>

                        <div className="wrapper">
                            <div className="image">
                                <h3>
                                    <a href="#" className="tag category">Education</a>
                                    <a href="single-listing-1.html" className="title">Creative
                                        Course</a>
                                    <span className="tag">Offer</span>
                                </h3>
                                <a href="single-listing-1.html"
                                   className="image-wrapper background-image">
                                    <img src="assets/img/image-02.jpg" alt=""/>
                                </a>
                            </div>

                            <h4 className="location">
                                <a href="#">Nashville, TN</a>
                            </h4>
                            <div className="price">$125</div>
                            <div className="meta">
                                <figure>
                                    <i className="fa fa-calendar-o"></i>28.04.2017
                                </figure>
                                <figure>
                                    <a href="#">
                                        <i className="fa fa-user"></i>Peter Browner
                                    </a>
                                </figure>
                            </div>

                            <div className="description">
                                <p>Proin at tortor eros. Phasellus porta nec elit non lacinia. Nam
                                    bibendum erat at leo faucibus vehicula. Ut laoreet porttitor risus,
                                    eget suscipit tellus tincidunt sit amet. </p>
                            </div>

                            <div className="additional-info">
                                <ul>
                                    <li>
                                        <figure>Start Date</figure>
                                        <aside>25.06.2017 09:00</aside>
                                    </li>
                                    <li>
                                        <figure>Length</figure>
                                        <aside>2 months</aside>
                                    </li>
                                    <li>
                                        <figure>Bedrooms</figure>
                                        <aside>3</aside>
                                    </li>
                                </ul>
                            </div>

                            <a href="single-listing-1.html"
                               className="detail text-caps underline">Detail</a>
                        </div>
                    </div>


                    <div className="item">
                        <div className="ribbon-vertical">
                            <i className="fa fa-star"></i>
                        </div>

                        <div className="wrapper">
                            <div className="image">
                                <h3>
                                    <a href="#" className="tag category">Adventure</a>
                                    <a href="single-listing-1.html" className="title">Into The Wild</a>
                                    <span className="tag">Ad</span>
                                </h3>
                                <a href="single-listing-1.html"
                                   className="image-wrapper background-image">
                                    <img src="assets/img/image-03.jpg" alt=""/>
                                </a>
                            </div>

                            <h4 className="location">
                                <a href="#">Seattle, WA</a>
                            </h4>
                            <div className="price">$1,560</div>
                            <div className="meta">
                                <figure>
                                    <i className="fa fa-calendar-o"></i>21.04.2017
                                </figure>
                                <figure>
                                    <a href="#">
                                        <i className="fa fa-user"></i>Peak Agency
                                    </a>
                                </figure>
                            </div>

                            <div className="description">
                                <p>Nam eget ullamcorper massa. Morbi fringilla lectus nec lorem
                                    tristique gravida</p>
                            </div>

                            <a href="single-listing-1.html"
                               className="detail text-caps underline">Detail</a>
                        </div>
                    </div>


                    <div className="item">
                        <div className="ribbon-vertical">
                            <i className="fa fa-star"></i>
                        </div>

                        <div className="wrapper">
                            <div className="image">
                                <h3>
                                    <a href="#" className="tag category">Real Estate</a>
                                    <a href="single-listing-1.html" className="title">Luxury
                                        Apartment</a>
                                    <span className="tag">Offer</span>
                                </h3>
                                <a href="single-listing-1.html"
                                   className="image-wrapper background-image">
                                    <img src="assets/img/image-04.jpg" alt=""/>
                                </a>
                            </div>

                            <h4 className="location">
                                <a href="#">Greeley, CO</a>
                            </h4>
                            <div className="price">$75,000</div>
                            <div className="meta">
                                <figure>
                                    <i className="fa fa-calendar-o"></i>13.03.2017
                                </figure>
                                <figure>
                                    <a href="#">
                                        <i className="fa fa-user"></i>Hills Estate
                                    </a>
                                </figure>
                            </div>

                            <div className="description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                    venenatis lobortis</p>
                            </div>

                            <div className="additional-info">
                                <ul>
                                    <li>
                                        <figure>Area</figure>
                                        <aside>368m<sup>2</sup></aside>
                                    </li>
                                    <li>
                                        <figure>Bathrooms</figure>
                                        <aside>2</aside>
                                    </li>
                                    <li>
                                        <figure>Bedrooms</figure>
                                        <aside>3</aside>
                                    </li>
                                    <li>
                                        <figure>Garage</figure>
                                        <aside>1</aside>
                                    </li>
                                </ul>
                            </div>

                            <a href="single-listing-1.html"
                               className="detail text-caps underline">Detail</a>
                        </div>
                    </div>


                    <div className="item">
                        <div className="ribbon-vertical">
                            <i className="fa fa-star"></i>
                        </div>

                        <div className="wrapper">
                            <div className="image">
                                <h3>
                                    <a href="#" className="tag category">Architecture</a>
                                    <a href="single-listing-1.html" className="title">We'll Redesign
                                        Your Apartment</a>
                                    <span className="tag">Offer</span>
                                </h3>
                                <a href="single-listing-1.html"
                                   className="image-wrapper background-image">
                                    <img src="assets/img/image-05.jpg" alt=""/>
                                </a>
                            </div>

                            <h4 className="location">
                                <a href="#">Greeley, CO</a>
                            </h4>
                            <div className="price">
                                <span className="appendix">From</span>
                                $200
                            </div>
                            <div className="meta">
                                <figure>
                                    <i className="fa fa-calendar-o"></i>13.03.2017
                                </figure>
                                <figure>
                                    <a href="#">
                                        <i className="fa fa-user"></i>XL Designers
                                    </a>
                                </figure>
                            </div>

                            <div className="description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                    venenatis lobortis</p>
                            </div>

                            <div className="additional-info">
                                <ul>
                                    <li>
                                        <figure>Area</figure>
                                        <aside>368m<sup>2</sup></aside>
                                    </li>
                                    <li>
                                        <figure>Bathrooms</figure>
                                        <aside>2</aside>
                                    </li>
                                    <li>
                                        <figure>Bedrooms</figure>
                                        <aside>3</aside>
                                    </li>
                                </ul>
                            </div>

                            <a href="single-listing-1.html"
                               className="detail text-caps underline">Detail</a>
                        </div>
                    </div>

                    <div className="item">
                        <div className="ribbon-vertical">
                            <i className="fa fa-star"></i>
                        </div>

                        <div className="wrapper">
                            <div className="image">
                                <h3>
                                    <a href="#" className="tag category">Cars</a>
                                    <a href="single-listing-1.html" className="title">Car Wheels</a>
                                    <span className="tag">Offer</span>
                                </h3>
                                <a href="single-listing-1.html"
                                   className="image-wrapper background-image">
                                    <img src="assets/img/image-18.jpg" alt=""/>
                                </a>
                            </div>

                            <h4 className="location">
                                <a href="#">Bryan, TX</a>
                            </h4>
                            <div className="price">
                                <span className="appendix">From</span>
                                $140
                            </div>
                            <div className="meta">
                                <figure>
                                    <i className="fa fa-calendar-o"></i>12.10.2016
                                </figure>
                                <figure>
                                    <a href="#">
                                        <i className="fa fa-user"></i>George R. Mund
                                    </a>
                                </figure>
                            </div>

                            <div className="description">
                                <p>Duis tempor velit vel lectus viverra, et finibus justo semper. Morbi
                                    egestas elit et
                                    orci interdum, ac tincidunt diam feugiat. Aliquam erat volutpat.
                                    Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit
                                </p>
                            </div>

                            <div className="additional-info">
                                <ul>
                                    <li>
                                        <figure>Size</figure>
                                        <aside>From 17"</aside>
                                    </li>
                                    <li>
                                        <figure>Material</figure>
                                        <aside>Alloy</aside>
                                    </li>
                                </ul>
                            </div>

                            <a href="single-listing-1.html"
                               className="detail text-caps underline">Detail</a>
                        </div>
                    </div>


                    <div className="item">
                        <div className="ribbon-vertical">
                            <i className="fa fa-star"></i>
                        </div>

                        <div className="wrapper">
                            <div className="image">
                                <h3>
                                    <a href="#" className="tag category">Computer</a>
                                    <a href="single-listing-1.html" className="title">Will Buy MacBook
                                        Pro</a>
                                    <span className="tag">Demand</span>
                                </h3>
                                <a href="single-listing-1.html"
                                   className="image-wrapper background-image">
                                    <img src="assets/img/image-19.jpg" alt=""/>
                                </a>
                            </div>

                            <h4 className="location">
                                <a href="#">Elmsford, NJ</a>
                            </h4>
                            <div className="price">
                                <span className="appendix">Max</span>
                                $2,500
                            </div>
                            <div className="meta">
                                <figure>
                                    <i className="fa fa-calendar-o"></i>10.10.2016
                                </figure>
                                <figure>
                                    <a href="#">
                                        <i className="fa fa-user"></i>Timothy
                                    </a>
                                </figure>
                            </div>

                            <div className="description">
                                <p>Quisque in tincidunt quam, quis blandit orci. Proin semper leo mi,
                                    efficitur lacinia nunc blandit ac.
                                    Vestibulum congue at justo semper dignissim.
                                </p>
                            </div>

                            <div className="additional-info">
                                <ul>
                                    <li>
                                        <figure>Screen Size</figure>
                                        <aside>17"</aside>
                                    </li>
                                </ul>
                            </div>

                            <a href="single-listing-1.html"
                               className="detail text-caps underline">Detail</a>
                        </div>
                    </div>


                </div>


                <div className="page-pagination">
                    <nav aria-label="Pagination">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">
                                            <i className="fa fa-chevron-left"></i>
                                        </span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="#">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">
                                            <i className="fa fa-chevron-right"></i>
                                        </span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </>
    )
}
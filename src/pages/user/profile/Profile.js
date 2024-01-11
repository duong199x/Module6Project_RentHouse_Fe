import {Link, Outlet} from "react-router-dom";

export default function Profile() {
    return (
        <>
            <section className="content">
                <section className="block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <nav className="nav flex-column side-nav">
                                    <a className="nav-link icon" href="my-profile.html">
                                        <i className="fa fa-user"></i>
                                        <Link to={"/user/profile/profile-detail"}>My Profile</Link>
                                    </a>
                                    <a className="nav-link active icon" href="">
                                        <i className="fa fa-recycle"></i>
                                        <Link to={"/user/profile/change-password"}>Change Password</Link>
                                    </a>
                                    <a className="nav-link icon" href="">
                                        <i className="fa fa-heart"></i>
                                        <Link to={"/user/profile/bookmarks"}>Bookmarks</Link>
                                    </a>
                                    <a className="nav-link icon" href="">
                                        <i className="fa fa-check"></i>History Buy (Order)
                                    </a>
                                    <a className="nav-link icon" href="">
                                        <i className="fa fa-star"></i>
                                        <Link to={"/user/profile/list-house-user"}>My Ads Listing</Link>
                                    </a>
                                    <a className="nav-link icon" href="">
                                        <i className="fa fa-star"></i>
                                        <Link to={"/user/create"}>Add House</Link>
                                    </a>
                                    <a className="nav-link icon" href="">
                                        <i className="fa fa-check"></i>Sold Items
                                    </a>
                                </nav>
                            </div>
                            <Outlet/>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
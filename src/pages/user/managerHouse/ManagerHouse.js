import {Link, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

export default function ManagerHouse() {
    const currentUser = useSelector(({users}) => {
        return users.currentToken;
    })
    return (
        <>
            <section className="content">
                <section className="block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <nav className="nav flex-column side-nav">
                                    <a className="nav-link icon" href="">
                                        <i className="fa fa-star"></i>
                                        <Link to={`/user/manager-house/list-house-user/${currentUser.id}`}>My Ads Listing</Link>
                                    </a>
                                    <a className="nav-link icon" href="">
                                        <i className="fa fa-star"></i>
                                        <Link to={"/user/create"}>Add House</Link>
                                    </a>
                                    <a className="nav-link icon" href="">
                                        <i className="fa fa-check"></i>
                                        <Link to={"/user/manager-house/sold-item"}>Sold Items</Link>

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
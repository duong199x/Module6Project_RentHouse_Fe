import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import "./managerHouse.css";

export default function ManagerHouse() {
  const currentUser = useSelector(({ users }) => {
    return users.currentToken;
  });
  return (
    <>
      <section className="content">
        <section className="block set-block">
          <div className="container">
            <div className="row">
              <div className="col-md-2" style={{ marginTop: "20px" }}>
                <nav className="nav flex-column side-nav">
                  <Link
                    className="nav-link icon"
                    to={`/manager-house/list-house-user/${currentUser.id}`}
                  >
                    <i className="fa fa-star"></i>
                    My Ads Listing
                  </Link>
                  <Link className="nav-link icon" to={`/manager-house/create`}>
                    <i className="fa fa-star"></i>
                    Add House
                  </Link>
                  <Link
                    className="nav-link icon"
                    to={`/manager-house/sold-item/${currentUser.id}`}
                  >
                    <i className="fa fa-check"></i>
                    Sold Items
                  </Link>
                  <Link
                    className="nav-link icon"
                    to={`/manager-house/money/${currentUser.id}`}
                  >
                    <i className="fa fa-check"></i>
                    Money Diagram
                  </Link>
                </nav>
              </div>
              <Outlet />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

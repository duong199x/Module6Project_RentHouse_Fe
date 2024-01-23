import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Profile() {
  const currentUser = useSelector(({ users }) => {
    return users.currentToken;
  });
  return (
    <>
      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <nav className="nav flex-column side-nav">
                <Link
                  to={`/profile/profile-detail/${currentUser.id}`}
                  className="nav-link icon"
                >
                  <i className="fa fa-user"></i>
                  My Profile
                </Link>
                <Link to="/profile/change-password" className="nav-link icon">
                  <i className="fa fa-recycle"></i>
                  Change Password
                </Link>
                <Link
                  to={`/profile/bookmarks/${currentUser.id}`}
                  className="nav-link icon"
                >
                  <i className="fa fa-heart"></i>
                  Bookmarks
                </Link>
                <Link
                  to={`/profile/history/${currentUser.id}`}
                  className="nav-link icon"
                >
                  <i className="fa fa-check"></i>
                  History Buy (Order)
                </Link>
              </nav>
            </div>
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}

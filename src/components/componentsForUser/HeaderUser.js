import Navbar from "../forAdmin/Navbar";
import NavbarUser from "./NavbarUser";
import {Link, useNavigate} from "react-router-dom";
import * as React from "react";
import {logout} from "../../redux/services/UserService";
import {useDispatch} from "react-redux";

export default function HeaderUser() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const logoutScreen = () => {
        dispatch(logout()).then(() => {
            navigate("/login")
        })
    }
    return (
        <>
            <header className="hero">
                <div className="hero-wrapper">

                    <div className="secondary-navigation">
                        <div className="container">
                            <ul className="left">
                                <li>
                            <span>
                                <i className="fa fa-phone"></i> +1 123 456 789
                            </span>
                                </li>
                            </ul>

                            <ul className="right">
                                <li>
                                    <Link to={"/login"}><i className="fa fa-sign-in"></i>Log In</Link>
                                </li>
                                <li>
                                    <Link to={"/register"}><i className="fa fa-pencil-square-o"></i>Register</Link>
                                </li>
                                <li style={{padding: "8px"}}>
                                    <button onClick={logoutScreen} style={{background: "transparent", color: "white", border: 'none', cursor:'pointer'}}><i className="fa fa-pencil-square-o"></i>Logout</button>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <NavbarUser/>
                    <div className="background">
                        <div className="background-image original-size">
                            <img src="assets/img/hero-background-icons.jpg" alt=""/>
                        </div>

                    </div>

                </div>

            </header>


        </>
    )
}
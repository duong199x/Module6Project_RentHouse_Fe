import Header from "../components/forAdmin/Header";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";

import Navbar from "../components/forAdmin/Navbar";

export const Home = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}
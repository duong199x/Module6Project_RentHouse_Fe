import Header from "../components/Header";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";

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
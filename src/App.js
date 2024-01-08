import { Home } from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import UserManager from "./pages/admin/UserManager";
import HouseManager from "./pages/admin/HouseManager";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import UserPage from "./pages/user/UserPage";
import ListHouse from "./pages/user/ListHouse";
import CreateHouse from "./pages/houses/CreateHouse";
import Profile from "./pages/user/profile/Profile";
import ChangePassword from "./pages/user/profile/ChangePassword";
import ProfileDetail from "./pages/user/profile/ProfileDetail";
import Bookmarks from "./pages/user/profile/Bookmarks";
import ListHouseOfUser from "./pages/user/profile/ListHouseOfUser";

function App() {
    return (
        <>
            <Routes>
                <Route path={"login"} element={<Login />} />
                <Route path={"register"} element={<Register />} />
                <Route path={'user'} element={<UserPage/>}>
                    <Route path={'house'} element={<ListHouse/>}/>
                </Route>
                <Route path={'home'} element={<Home />}>
                    <Route path={'users'} element={<UserManager />} />
                    <Route path={'houses'} element={<HouseManager />} />
                    <Route path={'profile'} element={<Profile/>}>
                        <Route path={"change-password"} element={<ChangePassword/>}/>
                        <Route path={"profile-detail"} element={<ProfileDetail/>}/>
                        <Route path={"bookmarks"} element={<Bookmarks/>}/>
                        <Route path={"list-house-user"} element={<ListHouseOfUser/>}/>
                    </Route>
                    <Route path={'create'} element={<CreateHouse/>}/>
                    {/*<Route path={'edit/:id'} element={<UpdateProduct/>}/>*/}
                    {/*<Route path={':id'} element={<ProductDetail/>}/>*/}
                </Route>
                

                <Route path='*' element={<Navigate to="home" />} />
            </Routes>
        </>
    );
}

export default App;

import {Home} from "./pages/Home";
import {Navigate, Route, Routes} from "react-router-dom";
import UserManager from "./pages/admin/UserManager";
import HouseManager from "./pages/admin/HouseManager";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import UserPage from "./pages/user/UserPage";
import ListHouse from "./pages/user/ListHouse";

import Profile from "./pages/user/profile/Profile";
import ChangePassword from "./pages/user/profile/ChangePassword";
import ProfileDetail from "./pages/user/profile/ProfileDetail";
import Bookmarks from "./pages/user/profile/Bookmarks";
import ListHouseOfUser from "./pages/user/managerHouse/ListHouseOfUser";
import ImageUpload from "./firebase/ImageUpload";
import {useSelector} from "react-redux";
import {CreateConvenient} from "./pages/houses/convenient/AddConvenientToHouse";
import {UpdateHouse} from "./pages/houses/update/UpdateHouse";
import HouseDetail from "./pages/houses/HouseDetail";
import CreateHouse from "./pages/houses/create/CreateHouse";
import ShowFormImageUpdate from "./pages/houses/update/ShowUpdateImage";
import ManagerHouse from "./pages/user/managerHouse/ManagerHouse";


function App() {
    const currentUser = useSelector(({users}) => {
        return users.currentToken;
    })
    const id = useSelector(({users}) => {
        return users.userId;
    })

    return (
        <>
            <Routes>
                <Route path={"login"} element={<Login/>}/>
                <Route path={"register"} element={<Register/>}/>
                {
                    currentUser ? (
                        <>
                            <Route path={'user'} element={<UserPage/>}>
                                <Route path={'house'} element={<ListHouse/>}/>
                                <Route path={'images/:idHouse'} element={<ShowFormImageUpdate/>}/>
                                <Route path={'house/:id'} element={<HouseDetail/>}/>
                                <Route path={'create'} element={<CreateHouse/>}/>
                                <Route path={'addImage'} element={<ImageUpload/>}/>
                                <Route path={'convenient'} element={<CreateConvenient/>}/>
                                <Route path={'houseupdate/:id'} element={<UpdateHouse/>}/>
                                <Route path={'profile'} element={<Profile/>}>
                                    <Route path={"change-password"} element={<ChangePassword/>}/>
                                    <Route path={`profile-detail/:id`} element={<ProfileDetail/>}/>
                                    <Route path={"bookmarks"} element={<Bookmarks/>}/>
                                </Route>
                                <Route path={"manager-house"} element={<ManagerHouse/>}>
                                    <Route path={"list-house-user/:id"} element={<ListHouseOfUser/>}/>
                                </Route>
                            </Route>
                            <Route path={'admin'} element={<Home/>}>
                                <Route path={'users'} element={<UserManager/>}/>
                                <Route path={'houses'} element={<HouseManager/>}/>
                            </Route>
                        </>
                    ) : (
                        <>
                            <Route path='*' element={<Navigate to="login"/>}/>
                        </>
                    )
                }
                <>
                    <Route path='*' element={<Navigate to="login"/>}/>
                </>
            </Routes>
        </>
    );
}

export default App;

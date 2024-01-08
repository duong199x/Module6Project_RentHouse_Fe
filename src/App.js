import {Home} from "./pages/Home";
import {Navigate, Route, Routes} from "react-router-dom";
import UserManager from "./pages/admin/UserManager";
import HouseManager from "./pages/admin/HouseManager";
import UserPage from "./pages/user/UserPage";
import ListHouse from "./pages/user/ListHouse";
import CreateHouse from "./pages/houses/CreateHouse";

function App() {
    return (
        <>
            <Routes>
                <Route path={'user'} element={<UserPage/>}>
                    <Route path={'house'} element={<ListHouse/>}/>

                </Route>
                <Route path={'home'} element={<Home/>}>
                    <Route path={'users'} element={<UserManager/>}/>
                    <Route path={'houses'} element={<HouseManager/>}/>
                    <Route path={'create'} element={<CreateHouse/>}/>
                    {/*<Route path={'edit/:id'} element={<UpdateProduct/>}/>*/}
                    {/*<Route path={':id'} element={<ProductDetail/>}/>*/}
                </Route>

                <Route path='*' element={<Navigate to = "home"/>}/>
                {/*dieu huong trang khi nhap sai*/}
            </Routes>
        </>
    );
}

export default App;

import {Home} from "./pages/Home";
import {Navigate, Route, Routes} from "react-router-dom";
import HousesManager from "./pages/admin/HousesManager";

function App() {
    return (
        <>
            <Routes>
                <Route path={'houses'} element={<Home/>}>
                    <Route path={'list'} element={<HousesManager/>}/>
                    {/*<Route path={'add'} element={<AddProduct/>}/>*/}
                    {/*<Route path={'edit/:id'} element={<UpdateProduct/>}/>*/}
                    {/*<Route path={':id'} element={<ProductDetail/>}/>*/}
                </Route>

                <Route path='*' element={<Navigate to = "houses/list"/>}/>
                {/*dieu huong trang khi nhap sai*/}
            </Routes>
        </>
    );
}

export default App;

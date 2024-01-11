import {configureStore} from "@reduxjs/toolkit";

import UserReducer from "../reducers/UserReducer";
import houseReducer from "../reducers/HouseReducer";
import imageReducer from "../reducers/ImageReducer";
import categoryReducer from "../reducers/CategoryReducer";

export const store = configureStore ({
    reducer: {
        users: UserReducer,
        houses : houseReducer,
        categories: categoryReducer,
        images : imageReducer
    }
})
export default store;
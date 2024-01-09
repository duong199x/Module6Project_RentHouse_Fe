import {configureStore} from "@reduxjs/toolkit";

import UserReducer from "../reducers/UserReducer";
import houseReducer from "../reducers/HouseReducer";
import categoryReducer from "../reducers/CategoryReducer";

export const store = configureStore({
    reducer: {
        users: UserReducer,
        houses: houseReducer,
        categories: categoryReducer
    }
})
export default store;
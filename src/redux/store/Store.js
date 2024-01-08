import {configureStore} from "@reduxjs/toolkit";
import houseReducer from "../reducers/HouseReducer";

export const Store = configureStore ({
    reducer: {
        houses : houseReducer,

    }
})
import {configureStore} from "@reduxjs/toolkit";

import UserReducer from "../reducers/UserReducer";
import houseReducer from "../reducers/HouseReducer";
import imageReducer from "../reducers/ImageReducer";
import categoryReducer from "../reducers/CategoryReducer";
import convenientService from "../reducers/ConvenientService";
import bookingReducer from "../reducers/BookingReducer";

export const store = configureStore ({
    reducer: {
        users: UserReducer,
        houses : houseReducer,
        categories: categoryReducer,
        images : imageReducer,
        convenients : convenientService,
        bookings: bookingReducer
    }
})
export default store;
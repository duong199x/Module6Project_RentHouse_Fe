import {createAsyncThunk} from "@reduxjs/toolkit";
import getAxios from "./customAxios";

export const addBooking = createAsyncThunk(
    'booking/addBooking',
    async (data) => {
        let response = await getAxios().post('/booking', data);
        return response.data;
    }
)
export const getHistoryBooking = createAsyncThunk(
    'booking/getHistoryBooking',
    async (idUser) => {
        let response = await getAxios().get(`/booking/${idUser}`);
        return response.data;
    }
)
export const removeBooking = createAsyncThunk(
    'booking/removeBooking',
    async (idBooking) => {
        let response = await getAxios().delete(`/booking/${idBooking}`)
        console.log("response", response)
        return response.data;
    }
)
export const getAllBookingByHouseId = createAsyncThunk(
    'booking/getAllBookingByHouseId',
    async (idHouse) => {
        let response = await getAxios().get(`booking/house/${idHouse}`)
        return response.data
    }
)
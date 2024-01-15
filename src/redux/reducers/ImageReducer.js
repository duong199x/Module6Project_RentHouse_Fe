import {createSlice} from "@reduxjs/toolkit";

import {addImages, getAllImage, removeImageById} from "../services/ImageService";
import {removeById} from "../services/HouseService";

const initialState = {
    list: []
}

const imageSlice = createSlice({
    name: 'houses',
    initialState,
    extraReducers: builder => {
        builder.addCase(getAllImage.fulfilled, (state, {payload}) => {
            state.list = payload;
        })
        builder.addCase(addImages.fulfilled, (state, {payload}) => {
            state.list.push(payload);
        })
        builder.addCase(removeImageById.fulfilled, (state, {payload}) => {
            state.list.splice(payload)
        })
    }
})
export default imageSlice.reducer;

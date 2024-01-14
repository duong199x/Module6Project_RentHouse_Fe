import {createSlice} from "@reduxjs/toolkit";
import {addConvenient, getAllConvenient} from "../services/ConvenientService";

const initialState = {
    listConvenient: []
}
const convenientSlice = createSlice({
    name: 'convenients',
    initialState,
    extraReducers: builder => {
        builder.addCase(getAllConvenient.fulfilled, (state, {payload}) => {
            state.listConvenient = payload;
        })
        // builder.addCase(addConvenient().fulfilled, (state, {payload}) => {
        //     state.listConvenient.push(payload);
        // })
    }
})
export default convenientSlice.reducer;

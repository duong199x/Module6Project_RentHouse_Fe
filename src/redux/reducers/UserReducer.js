import {createSlice} from "@reduxjs/toolkit";
import {changepassword, login, register} from "../services/UserService";

const initialState = {
    list: [],
    currrentToken: ""
}
const userSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, {payload}) => {
                state.currrentToken = payload.accessToken;
            })
            .addCase(register.fulfilled, (state, {payload}) => {
            })
            .addCase(changepassword.fulfilled, (state, action) => {

            })
    }
})
export default userSlice.reducer;
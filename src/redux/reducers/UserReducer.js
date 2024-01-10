import {createSlice} from "@reduxjs/toolkit";
import {changePassword, changepassword, login, logout, register} from "../services/UserService";

const initialState = {
    list: [],
    userId: null,
    currrentToken: JSON.parse(sessionStorage.getItem("currrentToken"))
}
const userSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, {payload}) => {
                debugger;
                sessionStorage.setItem("currrentToken",JSON.stringify(payload))
                state.currrentToken = payload;
                state.userId = payload.userId;
            })
            .addCase(register.fulfilled, (state, {payload}) => {
            })
            .addCase(changePassword.fulfilled, (state, action) => {

            })
    }
})
export default userSlice.reducer;
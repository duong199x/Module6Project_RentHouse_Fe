import {createSlice} from "@reduxjs/toolkit";
import {changePassword, changepassword, login, logout, register} from "../services/UserService";

const initialState = {
    list: [],
    currrentToken: JSON.parse(localStorage.getItem("currentToken"))
}
const userSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, {payload}) => {
                localStorage.setItem("currentToken",JSON.stringify(payload))
                state.currrentToken = payload;
            })
            .addCase(register.fulfilled, (state, {payload}) => {
            })
            .addCase(changePassword.fulfilled, (state, action) => {

            })
    }
})
export default userSlice.reducer;
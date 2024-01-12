import {createSlice} from "@reduxjs/toolkit";
import {changePassword, changepassword, login, logout, register} from "../services/UserService";

const initialState = {
    list: [],
    currentToken: JSON.parse(localStorage.getItem("currentToken"))
}
const userSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, {payload}) => {
                localStorage.setItem("currentToken",JSON.stringify(payload))
                state.currentToken = payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.currentToken = null;
            })
            .addCase(register.fulfilled, (state, {payload}) => {
            })
            .addCase(changePassword.fulfilled, (state, action) => {

            })
            .addCase(logout.fulfilled,(state, {payload}) => {
                state.currentToken = null;
                localStorage.clear();
            })
    }
})
export default userSlice.reducer;
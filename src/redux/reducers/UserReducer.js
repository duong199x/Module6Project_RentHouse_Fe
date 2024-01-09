import {createSlice} from "@reduxjs/toolkit";
import {changepassword, editDetailUser, getUser, login, register} from "../services/UserService";

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
            .addCase(editDetailUser.fulfilled, (state, action) => {
                state.userDetail = action.payload.data
                state.currentUser = action.payload.data
                state.isActiveEdit = false;
            })
            .addCase(getUser.fulfilled,(state,action)=>{
                state.userDetail = action.payload.data
            })
    }
})
export default userSlice.reducer;
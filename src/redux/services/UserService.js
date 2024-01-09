import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import customAxios from "./api";

export const login = createAsyncThunk(
    "users/login",
    async (user) => {
        let res = await axios.post("http://localhost:8080/login", user)
        return res.data;
    }
)
export const register = createAsyncThunk(
    "users/register",
    async (user) => {
        let res = await axios.post("http://localhost:8080/register", user)
        return res.data;
    }
)
export const changepassword = createAsyncThunk(
    "users/changepassword",
    async (user) => {
        let res = await axios.patch("http://localhost:8080/users/change-password", user)
        return res;
    }
)
export const editDetailUser = createAsyncThunk(
    'user/edit',
    async (data) => {
        const res  = await customAxios.patch('users/' + data.id, data);
        return res;
    }
)

export const getUser = createAsyncThunk(
    'user/get',
    async (data) =>{
        const res = await customAxios.get('users/' + data.id, data);
        return res;

    }
)
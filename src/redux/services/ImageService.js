import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllHouse = createAsyncThunk(
    'images/getAll',
    async () => {
        let response = await axios.get('http://localhost:8080/images');
        return response.data;
    }
)
export const add = createAsyncThunk(
    'images/add',
    async (newHouse) => {
        let response = await axios.post('http://localhost:8080/images/create',newHouse);
        return response.data;
    }
)
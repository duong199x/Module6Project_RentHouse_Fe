import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

    export const getAllConvenient = createAsyncThunk(
    'convenients/getAlConvenient',
    async () => {
        let response = await axios.get('http://localhost:8080/convenient');
        return response.data;
    }
)

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUser=createAsyncThunk('getAllUser', async()=>{
    try{
        const user = await axios.get(
          "https://63b866593329392049dbd33d.mockapi.io/user"
        );
        return user.data
    }catch(error){
        return Promise.reject(error)
    }
})
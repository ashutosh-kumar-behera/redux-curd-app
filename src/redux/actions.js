import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUser=createAsyncThunk('getAllUser', async()=>{
    try{
        const user = await axios.get(
          "https://63b866593329392049dbd33d.mockapi.io/user"
        );
        return user.data;
    }catch(error){
        return Promise.reject(error);
    }
})

export const createUser = createAsyncThunk('create', async(data)=>{
    try{
        const user = await axios.post("https://63b866593329392049dbd33d.mockapi.io/user", data)
        return user.data;
    }catch(error){
        return Promise.reject(error);
    }
})

export const userDelete = createAsyncThunk('delete', async(id)=>{
    try{
        const user = await axios.delete(`https://63b866593329392049dbd33d.mockapi.io/user/${id}`);
        return user.data;
    }catch(error){
        return Promise.reject(error);
    }
})

export const userUpdate = createAsyncThunk('update', async(getInput)=>{
    try{
        const user = await axios.put(
          `https://63b866593329392049dbd33d.mockapi.io/user/${getInput.id}`,
          getInput
        );
        return user.data;
    }catch(error){
        return Promise.reject(error);
    }
})
import { createSlice } from "@reduxjs/toolkit";
import { createUser, getAllUser } from "./actions";

const userSlice = createSlice({
    name:"user",
    initialState:{
        loading:false,
        users:[],
        error:""
    },
    extraReducers:(builder)=>{
        builder
        // read
        .addCase(getAllUser.pending, (state)=>{
            state.loading=true;
        })
        .addCase(getAllUser.fulfilled, (state,action)=>{
            state.loading=false;
            state.users=action.payload;
        })
        .addCase(getAllUser.rejected, (state,action)=>{
            state.loading=false;
            state.users=[];
            state.error=action.error.message;
        })
        //create
        .addCase(createUser.pending, (state)=>{
            state.loading=true;
        })
        .addCase(createUser.fulfilled, (state,action)=>{
            state.loading=false;
            state.users.push(action.payload);
        })
        .addCase(createUser,(state,action)=>{
            state.loading=false;
            state.users=[];
            state.error=action.error.message
        })
    }
})

export default userSlice.reducer
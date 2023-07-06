import { createSlice } from "@reduxjs/toolkit";
import { createUser, getAllUser, userDelete,  } from "./actions";

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
          .addCase(getAllUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(getAllUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
          })
          .addCase(getAllUser.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
          })
          //create
          .addCase(createUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
          })
          .addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
          //delete
          .addCase(userDelete.pending, (state) => {
            state.loading = true;
          })
          .addCase(userDelete.fulfilled, (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            const data1 = state.users.find((el) => el.id === id);
            if (data1) {
              state.users = state.users.filter((el) => el.id !== id);
            }
          })
          .addCase(userDelete.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });

    }
})

export default userSlice.reducer
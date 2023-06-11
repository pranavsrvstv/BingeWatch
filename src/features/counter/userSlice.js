import { createSlice } from '@reduxjs/toolkit';

// we create slices for different objects so that all info is not condensed in a single file
//here we made a user slice
export const userSlice = createSlice({
  //name of the slice
  name: 'user',
  initialState:{
    user:null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    //reducers are actions that can affect the userslice. Here login and logout are two reducers
    login:(state,action)=>
    {
      state.user=action.payload;
    },
    logout:(state)=>{
      state.user=null;
    }
   
  },
});

export const {login,logout } =userSlice.actions;

//state refers to the object that has all states in it, 
export const selectUser = (state) => state.user.user;


export default userSlice.reducer;

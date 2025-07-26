import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  repos:[]
};

export const getProfile = createAsyncThunk(
  "githubData/getProfile",
  async (username) => {
    const userRes = await axios.get(`https://api.github.com/users/${username}`);
    const reposRes = await axios.get(`https://api.github.com/users/${username}/repos`);
    return {
      user: userRes.data,
      repos: reposRes.data,
      
      
    };
    
  }
 
);



const githubData = createSlice({
  name: "githubData",
  initialState,
  reducers: {},
extraReducers: (builder) => {
  builder.addCase(getProfile.fulfilled, (state, action) => {
    state.user = action.payload.user;
    state.repos = action.payload.repos;
  });
}
});

export default githubData.reducer;
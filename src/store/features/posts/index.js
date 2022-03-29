import { createSlice } from '@reduxjs/toolkit';
import { addPosts, getActivePost } from './middleware';

const initialState = {
  list: [],
  active: {},
};

export const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addPosts.pending, (state) => {
      state.list = [];
    });
    builder.addCase(addPosts.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(getActivePost.fulfilled, (state, action) => {
      state.active = action.payload;
    });
  },
});

export default postsSlice.reducer;

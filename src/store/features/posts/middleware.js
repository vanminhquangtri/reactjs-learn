import { createAsyncThunk } from '@reduxjs/toolkit';

export const addPosts = createAsyncThunk('posts/addPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(async (res) => {
      const result = await res.json();
      return result;
    })
    .catch((error) => error);
  return response;
});

export const getActivePost = createAsyncThunk(
  'posts/getActivePost',
  async (postId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    )
      .then(async (res) => {
        const result = await res.json();
        return result;
      })
      .catch((error) => error);
    return response;
  }
);

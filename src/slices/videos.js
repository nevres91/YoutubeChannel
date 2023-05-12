import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  videos: null,
  nextPageToken: null,
  loading: true,
  error: null,
  comments: null
}


const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    fetchVideos: (state, action) => {
      state.videos = action.payload.videos;
      state.nextPageToken = action.payload.nextPageToken;
      state.loading = false;
      state.error = null;
    },
    clearVideos: (state) => {
      state.videos = null;
      state.loading = true;
      state.error = null
    },
    fetchComments: (state, action) => {
      state.comments = action.payload
    }
  }
})

export const { fetchVideos, clearVideos, fetchComments } = videosSlice.actions;

export default videosSlice.reducer;
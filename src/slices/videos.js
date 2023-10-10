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
      state.videos = state.videos ? state.videos.concat(action.payload.videos) : action.payload.videos;
      state.nextPageToken = action.payload.nextPageToken;
      state.loading = false;
      state.error = null;
    },
    clearVideos: (state) => {
      state.videos = null;
      state.loading = true;
      state.error = null;
      state.comments = null;
      state.nextPageToken = null
    },
    fetchComments: (state, action) => {
      state.comments = state.comments ? state.comments.concat(action.payload) : action.payload;
    }
  }
})

export const { fetchVideos, clearVideos, fetchComments } = videosSlice.actions;

export default videosSlice.reducer;
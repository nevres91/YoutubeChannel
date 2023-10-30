import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  selectedPhoto: null
}


const selectedBikePhoto = createSlice({
  name: 'bikePhoto',
  initialState,
  reducers: {

    selectBikePhoto: (state, action) => {
      state.selectedPhoto = action.payload
    },
    clearPhoto: (state) => {
      state.selectedPhoto = null
    }
  }
})

export const { selectBikePhoto, clearPhoto } = selectedBikePhoto.actions;

export default selectedBikePhoto.reducer;
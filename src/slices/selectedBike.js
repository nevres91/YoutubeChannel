import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  selectedBike: null
}


const selectedBike = createSlice({
  name: 'bike',
  initialState,
  reducers: {
    loginBike: (state) => {
      state.selectedBike = 'yz';
    },
    selectBike: (state, action) => {
      state.selectedBike = action.payload
    }
  }
})

export const { selectBike, loginBike } = selectedBike.actions;

export default selectedBike.reducer;
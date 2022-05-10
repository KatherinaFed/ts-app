import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
  name: 'event',
  initialState: {
    myEvents: [{}],
  },
  reducers: {
    addEvent(state, action) {
      return {
        ...state,
        myEvents: []
      }
    }
  }
});

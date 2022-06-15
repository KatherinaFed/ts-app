import { createSlice } from '@reduxjs/toolkit';

type EventItem = {
  id: number;
  name: string;
  time: number;
  day: number;
  title: string;
  description: string;
};

interface IInitialState {
  events: Array<EventItem>;
}

const initialState: IInitialState = {
  events: [],
};

// REDUCER
const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    addEvent(state, action) {
      console.log('ACTION PAYLOAD (ADD EVENT): ', action.payload);

      return {
        events: [...state.events, action.payload],
      };
    },
    // updateEvent(state, action) {
    //   console.log(state.events)
    //   const newState = state.events.map((evt: object) => {
    //     console.log('ID: ', evt)
    //     return evt.id === action.payload.id ? action.payload : evt;
    //   });

    //   return {
    //     events: [...state.events, newState],
    //   };
    // },
  },
});

export const { addEvent } = eventSlice.actions;
export default eventSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    desitnation: null,
    travelTimeInformation: null
}
export const navSlice = createSlice({
    name: 'Nav',
    initialState,
    reducers: {
        setOrign: (state, action) => {
            state.origin = action.payload;
        },
        setDesitnation: (state, action) => {
            state.desitnation = action.payload
        },
        setTravelTime: (state, action) => {
            state.travelTimeInformation = action.payload;
        }
    }
})

export const { setOrign, setDesitnation, setTravelTime } = navSlice.actions;

export const selectOrigin=(state)=>state.nav.origin;
export const selectDesination=(state)=>state.nav.desitnation;
export const selectTravelTime=(state)=>state.nav.travelTimeInformation;


export default navSlice.reducer;
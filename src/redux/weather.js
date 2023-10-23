import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    weatherInfo: {},
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setInfo: (state, action) => {
            state.weatherInfo = action.payload
        },
    },
})

export const { setInfo } = weatherSlice.actions

export default weatherSlice.reducer

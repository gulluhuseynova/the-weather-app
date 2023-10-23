import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './weather'

export const store = configureStore({
    reducer: { weather: weatherReducer },
})

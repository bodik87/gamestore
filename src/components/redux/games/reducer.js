import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        currentGame: null
    },
    reducers: {
        // при клике эта функция будет добавлять товар в корзину
        setCurrentGame: (state, action) => {
            state.currentGame = action.payload
        }
    }
})

export const { setCurrentGame } = gamesSlice.actions
export default gamesSlice.reducer
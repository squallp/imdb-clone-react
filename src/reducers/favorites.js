import {createSlice} from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
	name: "favorites",
	initialState: {
		value: []
	},
	reducers: {
		addToFav: (state, action) => {
			if (state.value.includes(action.payload)) {
			} else {
				state.value = [...state.value, action.payload];
			}
		},
		removeFromFav: (state, action) => {
			 state.value = state.value.filter(item => item !== action.payload);
		}
	}
});

export const {addToFav,removeFromFav} = favoritesSlice.actions;
export default favoritesSlice.reducer;
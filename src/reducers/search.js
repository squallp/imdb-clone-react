import {createSlice} from "@reduxjs/toolkit";

export const searchQuerySlice = createSlice({
	name: "searchQuery",
	initialState: {
		value: ""
	},
	reducers: {
		query: (state, action) => {
			state.value = action.payload;
		},
	}
});

export const {query} = searchQuerySlice.actions;
export default searchQuerySlice.reducer;
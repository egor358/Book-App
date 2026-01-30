import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
  onlyFavority: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;
    },
    setAuthorTitle: (state,action) => {
      state.author = action.payload;
    },
    setFavoritFilter: (state) => {
          state.onlyFavority = !state.onlyFavority
    },
    resetFilter: () => {
        return initialState
    },
  },
});

export const {setTitleFilter,setAuthorTitle,setFavoritFilter,resetFilter} = filterSlice.actions
export const selectTitleFilter = (state)=> state.filter.title
export const selectAuthorFilter = (state)=> state.filter.author
export const selectFavoritFilter = (state)=> state.filter.onlyFavority
 export default filterSlice.reducer 





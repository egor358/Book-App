import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setError } from "./errorSlice";
import { createBookWidthId } from "../../utils/createBooksWidthId";
import axios from "axios";
const initialState = {
  books: [],
  isLoadingApi: false,
};

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (url, thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
    }
  }
);
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    toggleBook: (state, action) => {
      state.books.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoadingApi = false;
      if (action.payload?.title && action.payload?.author) {
        state.books.push(createBookWidthId(action.payload, "API"));
      }
    });
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoadingApi = true;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.isLoadingApi = false;
    });
  },
});
export const selectIsLoadingViaAPI = (state) => state.books.isLoadingApi;
export const { addBook, deleteBook, toggleBook } = bookSlice.actions;
export default bookSlice.reducer;

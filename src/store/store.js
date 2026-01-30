import { configureStore } from '@reduxjs/toolkit';
import errorReducer from "./slices/errorSlice"
import booksReducer from "./slices/bookSlice"
import  filterSlice  from './slices/filterSlice';
const store = configureStore({                 
    reducer:{
     error:errorReducer,
     books:booksReducer,
     filter:filterSlice
    }
})
store.subscribe(() => {
  
});
export default store


// {                  Глобальный state
//   error: "",
//   books: {
//     books: [],
//     isLoadingApi: false
//   }
// }


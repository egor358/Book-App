import React, { useState } from "react";
import styles from "./BookForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../../store/slices/errorSlice";
import { addBook } from "../../store/slices/bookSlice";
import { createBookWidthId } from "../../utils/createBooksWidthId";
import booksData from "../../books.json";
import { fetchBooks } from "../../store/slices/bookSlice";
import { selectIsLoadingViaAPI } from "../../store/slices/bookSlice";
import { FaSpinner } from "react-icons/fa";
export const BookForm = () => {
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");

  const isLoadingApi = useSelector(selectIsLoadingViaAPI);

  const dispatch = useDispatch();
  const handelRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    dispatch(addBook(createBookWidthId(randomBook, "random")));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    title = title.trim();
    author = author.trim();
    if (title && author) {
      dispatch(addBook(createBookWidthId({ title, author }, "menual")));
      // console.log(createBookWidthId({cleanTitle,cleanAuthor}));

      setTitle("");
      setAuthor("");
    } else {
    }
  };
  const handleRandomApi = () => {
   
    dispatch(fetchBooks("http://localhost:4000/random-book"));
    
  };

  return (
    <div>
      <div className={`${styles["app-block"]} ${styles["book-form"]}`}>
        <h2>Please new book</h2>
        <form onSubmit={handleSubmitForm}>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="author">Author: </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <button type="submit">Add Book</button>
          <button type="button" onClick={handelRandomBook}>
            Add Random
          </button>

          <button
            type="button"
            disabled={isLoadingApi}
            onClick={handleRandomApi}
          >
            {isLoadingApi ? (
              <>
                <span>Loading Book...</span>
                <FaSpinner className={styles["spinner"]} />
              </>
            ) : (
              "Add Random via API"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

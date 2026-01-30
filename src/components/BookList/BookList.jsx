import React from "react";
import styles from "./BookList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { toggleBook } from "../../store/slices/bookSlice";
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectFavoritFilter,
} from "../../store/slices/filterSlice";

export const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const favoriteFilter = useSelector(selectFavoritFilter);

  const handleGoogleFavorite = (id) => {
    dispatch(toggleBook(id));
  };

  const filtereddBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase());
    const matchesFavority = favoriteFilter ? book.isFavorite : true;
    return matchesTitle && matchesAuthor && matchesFavority;
  });

  const hightlitMatch = (text, filter) => {
    if (!filter) {
      return text;
    }
    const regex = new RegExp(`(${filter})`, "gi");
    //  console.log(text.split(regex));
    return text.split(regex).map((subString,i) => {
      if (subString.toLowerCase() === filter.toLowerCase()) {
        return <span key={i} className={`${styles["highlight"]}`}>{subString}</span>;
      }
      return subString
    });
  };

  return (
    <div className={`${styles["app-block"]} ${styles["book-list"]}`}>
      <h2>Book List</h2>
      {filtereddBooks.length ? (
        <ul>
          {filtereddBooks.map((book, index) => (
            <li key={book.id}>
              <div className={styles["book-info"]}>
                {++index}.{hightlitMatch(book.title, titleFilter)} by
                <strong>{hightlitMatch(book.author, authorFilter)}</strong>
                <strong>({book.sorce})</strong>
              </div>

              <div
                className={styles["book-actions"]}
                onClick={() => handleGoogleFavorite(book.id)}
              >
                {book.isFavorite ? (
                  <BsBookmarkStarFill className={`${styles["star-icon"]}`} />
                ) : (
                  <BsBookmarkStar className={`${styles["star-icon"]}`} />
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>no books</p>
      )}
    </div>
  );
};

// Селекторы (чтение состояния)

// selectTitleFilter

// selectAuthorFilter

// selectFavoritFilter

// 👉 только читают state

// 🔹 Action creators (изменение состояния)

// setTitleFilter

// setAuthorTitle

// setFavoritFilter

// resetFilter

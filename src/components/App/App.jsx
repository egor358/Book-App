import React from "react";
import { Error } from "../Error/Error";
import styles from "./App.module.css";
import { BookForm } from "../BookForm/BookForm";
import { BookList } from "../BookList/BookList";
import { Filter } from "../Filter/Filter";

export const App = () => {
  return (
    <div className={styles.App}>
      <header className={styles["app-header"]}>
        <h1>Book Library App</h1>
      </header>
      <main className={`${styles["app-main"]}`}>
      <div className={`${styles["app-left-column"]}`}>
        <BookForm/>
      </div>

      <div className={`${styles["app-right-column"]}`}>
        <Filter/>

        <BookList/>
      </div>
     </main>
      <Error />

    </div>
  );
};

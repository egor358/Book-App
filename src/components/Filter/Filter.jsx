import { useDispatch, useSelector } from "react-redux";
import styles from "./Filter.module.css";
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectFavoritFilter,
  setTitleFilter,
  setAuthorTitle,
  setFavoritFilter, 
  resetFilter,
} from "../../store/slices/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const favoriteFilter = useSelector(selectFavoritFilter);

  const hadlerTitleFilter = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };
  const handlerAuthorFilter = (e) => {
    dispatch(setAuthorTitle(e.target.value));
  };
  const hadlerFavoriteFilter = () => {
    dispatch(setFavoritFilter());
    console.log("favoriteFilter:", favoriteFilter);

  };

  const handlerResetFilter = () => {
    dispatch(resetFilter());
  };

  return (
    <div className={`${styles["app-block"]} ${styles.filter}`}>
      <div className={`${styles["filter-row"]}`}>
        <div className={`${styles["filter-group"]}`}>
          <input
            value={titleFilter}
            type="text"
            onChange={hadlerTitleFilter}
            placeholder="Filter by title..."
          />
        </div>
        <div className={`${styles["filter-group"]}`}>
          <input
            value={authorFilter}
            type="text"
            onChange={handlerAuthorFilter}
            placeholder="Filter by author"
          />
        </div>
        <div className={`${styles["filter-group"]}`}>
          <label>
            <input
              checked={favoriteFilter}
              onChange={hadlerFavoriteFilter}
              type="checkbox"
            
            />
            Only Favorite
          </label>
        </div>
        <button onClick={handlerResetFilter} type="button">Reset filters</button>
      </div>
    </div>
  );
};

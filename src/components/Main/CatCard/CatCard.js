import classes from "./styles/catCardStyles.module.css";
import dislike from "../../../img/icons/emptyHeart.svg";
import like from "../../../img/icons/fullHeart.svg";
import { useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../store/cats/actions";

export function CatCard({ data }) {
  const dispatch = useDispatch();

  const addCatToFavorites = (event) => {
    const sendObj = {
      url: event.target.dataset.url,
      id: event.target.dataset.id,
    };

    dispatch(addToFavorites(sendObj));
  };

  const removeCatFromFavorites = (event) => {
    const id = { id: event.target.dataset.id };
    dispatch(removeFromFavorites(id));
  };

  return (
    <div className={classes.catCard}>
      <img className={classes.catCard__img} src={data.url} alt="cat" />
      <img
        onClick={addCatToFavorites}
        data-url={data.url}
        data-id={data.id}
        className={classes.catCardLike}
        src={dislike}
        alt="like"
      />
      {data.like && (
        <img
          onClick={removeCatFromFavorites}
          src={like}
          data-id={data.id}
          className={classes.catCardLike}
          alt="like"
        />
      )}
    </div>
  );
}

import classes from "./styles/mainStyles.module.css";
import { CatCard } from "./CatCard";

export function Main({ data, isButtonVisible }) {
  return (
    <main className={classes.main}>
      <div className={classes.main__cats}>
        {data.map((cardData) => {
          return <CatCard key={cardData.id} data={cardData} />;
        })}
      </div>
      {isButtonVisible && (
        <button type="button" className={classes.main__loadMoreButton}>
          ...загружаем еще котиков
        </button>
      )}
    </main>
  );
}

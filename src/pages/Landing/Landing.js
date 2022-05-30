import { Route, Routes } from "react-router-dom";
import { Main } from "../../components";
import { getCatsStart, getMoreCatsOnCick } from "../../store/cats/thunks";

import { useSelector } from "react-redux";
import { catsSelector, favoritesSelector } from "../../store/cats/selectors";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export function Landing() {
  const dispatch = useDispatch();
  let [page, setPage] = useState(1);
  const data = useSelector(catsSelector);
  const favorites = useSelector(favoritesSelector);

  useEffect(() => {
    dispatch(getCatsStart());
  }, [dispatch]);

  const buttonHandler = () => {
    setPage(page + 1);
    dispatch(getMoreCatsOnCick(page));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            data={data}
            isButtonVisible={true}
            buttonHandler={buttonHandler}
          />
        }
      />
      <Route
        path="/favorites"
        element={<Main data={favorites} isButtonVisible={false} />}
      />
    </Routes>
  );
}

import { Route, Routes } from "react-router-dom";
import { Main } from "../../components";
import { getCatsStart } from "../../store/cats/thunks";
import { useSelector } from "react-redux";
import { catsSelector, favoritesSelector } from "../../store/cats/selectors";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function Landing() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsStart());
  }, [dispatch]);

  const data = useSelector(catsSelector);
  const favorites = useSelector(favoritesSelector);

  return (
    <Routes>
      <Route path="/" element={<Main data={data} isButtonVisible={true} />} />
      <Route
        path="/favorites"
        element={<Main data={favorites} isButtonVisible={false} />}
      />
    </Routes>
  );
}

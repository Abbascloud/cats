export const catsSelector = (state) => {
  return state.allCats.cats ?? [];
};
export const favoritesSelector = (state) => {
  return state.allCats.favorites ?? [];
};

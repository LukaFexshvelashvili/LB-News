import { setFavorites } from "../../store/UserSlice";

export function toggleFavorite(dispatch: Function, id: number) {
  let storage: string | null = localStorage.getItem("fav_articles");
  let favorites: number[] = storage ? JSON.parse(storage) : [];

  const index = favorites.indexOf(id);

  if (index !== -1) {
    favorites.splice(index, 1);
  } else {
    favorites.unshift(id);
  }

  localStorage.setItem("fav_articles", JSON.stringify(favorites));
  dispatch(setFavorites(favorites));
}
export function isFavorite(id: number) {
  let storage: string | null = localStorage.getItem("fav_articles");
  let favorites: number[] = storage ? JSON.parse(storage) : [];

  const index = favorites.indexOf(id);

  if (index !== -1) {
    return true;
  } else {
    return false;
  }
}

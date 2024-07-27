import { useEffect, useState } from "react";

export function CheckLike(id: number | string): boolean {
  const likes: (number | string)[] = JSON.parse(
    localStorage.getItem("likes") || "[]"
  );

  return likes.includes(id);
}

export function SetStorageLike(like: boolean, id: number | string) {
  let likes: (number | string)[] = JSON.parse(
    localStorage.getItem("likes") || "[]"
  );

  if (like) {
    if (!likes.includes(id)) {
      likes.push(id);
      localStorage.setItem("likes", JSON.stringify(likes));
    }
  } else {
    if (likes.includes(id)) {
      likes = likes.filter((item) => item !== id);
      localStorage.setItem("likes", JSON.stringify(likes));
    }
  }
}

export function CheckFavorite(id: number | string): boolean {
  const news_favorites: (number | string)[] = JSON.parse(
    localStorage.getItem("news_favorites") || "[]"
  );

  return news_favorites.includes(id);
}

export function SetStorageFavorite(like: boolean, id: number | string) {
  let news_favorites: (number | string)[] = JSON.parse(
    localStorage.getItem("news_favorites") || "[]"
  );

  if (like) {
    if (!news_favorites.includes(id)) {
      news_favorites.push(id);
      localStorage.setItem("news_favorites", JSON.stringify(news_favorites));
    }
  } else {
    if (news_favorites.includes(id)) {
      news_favorites = news_favorites.filter((item) => item !== id);
      localStorage.setItem("news_favorites", JSON.stringify(news_favorites));
    }
  }
}

export const useDebounce = (
  value: any,
  delay: number,
  setLoader?: Function
) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    if (setLoader) {
      setLoader(true);
    }
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timeout
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debouncedValue;
};

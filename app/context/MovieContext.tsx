import { createContext, useState, useContext, useEffect } from "react";
import { ReactNode } from "react";
import { json } from "stream/consumers";
import { Movie } from "../types/movie";

const MovieContext = createContext();

export function useMovieContext() {
  return useContext(MovieContext);
}

export function MovieProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) {
      setFavorite(JSON.parse(storedFavs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie: Movie) => {};

  return <MovieContext.provider>{children}</MovieContext.provider>;
}

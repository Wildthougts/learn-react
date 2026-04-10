"use client";

import { Input } from "@/components/ui/input";
import { MovieCard } from "./components/MovieCard";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "./services/movies";

import { Movie } from "./types/movie";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPopularMovies();
  }, []);

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      // If search is empty, load popular movies
      loadPopularMovies();
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await searchMovies(searchQuery);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
      setError("couldn't search movies");
    } finally {
      setLoading(false);
    }
  };

  const loadPopularMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getPopularMovies();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
      setError("couldn't fetch Movies");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-24">
      <main className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="col-span-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="flex gap-2"
          >
            <Input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit">Search</Button>
          </form>
        </div>
        {loading && (
          <div className="col-span-full text-center">Loading movies...</div>
        )}
        {error && (
          <div className="col-span-full text-center text-red-500">{error}</div>
        )}
        {!loading &&
          !error &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </main>
    </div>
  );
}

import { TMDBResponse, TMDBMovie } from "../types/movie";

export async function getPopularMovies(): Promise<TMDBResponse> {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const response = await fetch(`${url}/movie/popular?api_key=${key}`);
  const data: TMDBResponse = await response.json();

  return data;
}

export async function searchMovies(query: string): Promise<TMDBResponse> {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const response = await fetch(
    `${url}/search/movie?api_key=${key}&query=${encodeURIComponent(query)}`,
  );
  const data: TMDBResponse = await response.json();

  return data;
}

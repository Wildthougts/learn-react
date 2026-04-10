import { MovieCard } from "./components/MovieCard";

export default function Home() {
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020", url: "/vercel.svg" },
    { id: 2, title: "Sider Man", release_date: "2009", url: "/vercel.svg" },
    { id: 3, title: "Avengers", release_date: "2021", url: "/vercel.svg" },
  ];
  const movieNumber = 1;
  return (
    <div className="p-24">
      <main className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {movieNumber === 1 ? (
          <MovieCard
            movie={{
              title: "Deon Movie",
              url: "/vercel.svg",
              release_date: "2-4-2026",
            }}
          />
        ) : (
          <MovieCard
            movie={{
              title: "Wildthought's Movie",
              url: "/vercel.svg",
              release_date: "2-4-2026",
            }}
          />
        )}
      </main>
    </div>
  );
}

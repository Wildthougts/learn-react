import Link from "next/link";

export function NavBar() {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold">GameHub</div>
        <Link href="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link href="/favorites" className="hover:text-gray-400">
          Favorites
        </Link>
      </div>
    </div>
  );
}

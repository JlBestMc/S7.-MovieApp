interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
  };
}

export default function MovieCard({ movie }: MovieCardProps) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="bg-gray-900 rounded shadow overflow-hidden">
      <img src={imageUrl} alt={movie.title} className="w-full h-auto" />
      <div className="p-2 text-sm font-semibold">{movie.title}</div>
    </div>
  );
}

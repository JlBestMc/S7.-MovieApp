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
    <div className="bg-[#0d253f] rounded-lg shadow overflow-hidden px-6 pt-6 pb-4">
      <img
        src={imageUrl}
        alt={movie.title}
        className="w-full h-auto rounded-lg"
      />
      <div className="p-2 text-sm text-white font-semibold text-center">
        {movie.title}
      </div>
    </div>
  );
}

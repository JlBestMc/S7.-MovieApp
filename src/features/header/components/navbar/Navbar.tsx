export default function Navbar() {
  return (
    <>
      <div className="bg-[rgb(3 37 65)] flex justify-between items-center p-4 text-white">
        <div className="flex">
          <a>Movies</a>
          <a>TV Shows</a>
          <a>People</a>
        </div>
        <div>
          <a>Search</a>
          <a>Login</a>
          <a>Register</a>
        </div>
      </div>
    </>
  );
}

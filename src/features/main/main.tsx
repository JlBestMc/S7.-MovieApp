import logodark from "@/assets/logo-dark.svg";
import logo2dark from "@/assets/logo2_dark_gradient.svg";
import Button from "../../components/Button/Button";
export default function Main() {
  return (
    <div className="bg-[url('@/assets/Rectangle.jpg')] bg-cover bg-center h-screen">
      <div className="flex justify-between items-center p-4 px-16 text-black-300">
        <div className="w-32">
          <img src={logodark}></img>
        </div>
        <div className="flex justify-between items-center space-x-4 gap-3 font-semibold ">
          <a className="cursor-pointer">Movies</a>
          <a className="cursor-pointer">TV Shows</a>
          <a className="cursor-pointer">People</a>
          <a className="cursor-pointer">More</a>
        </div>
        <div className="flex justify-between items-center space-x-3  font-semibold">
          <Button variant="primary">Login</Button>
          <Button variant="secondary">Register</Button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 h-full">
        <div>
          <img src={logo2dark} alt="Logo" className="w-64" />
        </div>
        <div className="flex flex-col justify-center w-92 ml-5">
          <h1 className="text-4xl font-bold text-start bg-gradient-to-r from-blue-950 to-purple-950 bg-clip-text text-transparent">
            TMDB MovieApp
          </h1>
          <p className="text-black-300 mt-2 text-lg">
            Explore your favorite movies and series. Discover new releases,
            watch trailers, and get the latest updates on your favorite films.
          </p>
          <div className="flex space-x-4 justify-center mt-5">
            <Button styles="px-12" variant="primary">
              Registrate
            </Button>
            <Button styles="px-10" variant="secondary">
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

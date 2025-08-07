import logo2dark from "@/assets/logo2_dark_gradient.svg";
import Button from "../../components/Button/Button";
export default function Main() {
  return (
    <div className="flex items-center justify-center mt-10 h-full">
      <div>
        <img src={logo2dark} alt="Logo" className="w-64" />
      </div>
      <div className="flex flex-col justify-center w-92 ml-8">
        <h1 className="text-4xl font-bold text-start bg-gradient-to-r from-blue-950 to-purple-950 bg-clip-text text-transparent">
          TMDB MovieApp
        </h1>
        <p className="text-black-300 mt-2 text-lg">
          Explore your favorite movies and series. Discover new releases, watch
          trailers, and get the latest updates on your favorite films.
        </p>
        <div className="flex space-x-4 justify-center mt-5">
          <Button styles="px-16" variant="primary">
            Login
          </Button>
          <Button styles="px-14 bg-black" variant="primary">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

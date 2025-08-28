import logo2dark from "@/assets/logo2_dark_gradient.svg";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { auth } from "../../auth/firebase";
import { signOut } from "firebase/auth";
import { useAuth } from "../../auth/hooks/useAuth";
export default function Main() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center pt-18 sm:pt-40 md:h-screen mr-5">
        <div>
          <img src={logo2dark} alt="Logo" className="sm:w-64 w-80 pb-5" />
        </div>
        <div className="flex flex-col justify-center w-92 sm:ml-9">
          <h1 className="text-4xl font-bold md:text-start text-center bg-gradient-to-r from-blue-950 to-purple-950 bg-clip-text text-transparent">
            TMDB MovieApp
          </h1>
          <p className="text-black-300 mt-2 text-lg md:text-start text-center">
            Explore your favorite movies and series. Discover new releases,
            watch trailers, and get the latest updates on your favorite films.
          </p>
          <div className="flex space-x-4 justify-center mt-4">
            {user ? (
              <div className="mr-8 hidden sm:flex">
                <Button styles="px-16" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="sm:flex hidden space-x-4 justify-center">
                <Button styles="px-16" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button styles="px-14" onClick={() => navigate("/register")}>
                  Register
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

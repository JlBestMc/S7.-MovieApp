import Button from "../../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../auth/context/AuthContextBase";
import { auth } from "../../../../auth/firebase";
import { signOut } from "firebase/auth";

interface NavbarProps {
  logo: string;
  bgColor?: string;
  aStyles?: string;
  borderColor?: string;
  variantButton?: "primary" | "secondary" | "tertiary" | "quaternary";
}
export default function Navbar({
  logo,
  bgColor,
  aStyles,
  borderColor,
  variantButton,
}: NavbarProps)  {
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <div
        className={`flex ${bgColor} flex-col md:flex-row justify-between items-center p-4 px-16 text-black-300`}
      >
        <div className="w-32 cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </div>
        <div
          className={`flex justify-between items-center space-x-4 gap-3 md:my-0 my-5 font-semibold border ${borderColor} rounded-full px-12 py-2`}
        >
          <a onClick={() => navigate("/movies")}  className={aStyles}>Movies</a>
          <a className={aStyles}>TV Shows</a>
          <a className={aStyles}>People</a>
          <a className={aStyles}>More</a>
        </div>
        {user ? (
          <div className="flex justify-between items-center space-x-3  font-semibold">
            <Button styles="px-14" variant={variantButton} onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <div className="flex justify-between items-center space-x-3  font-semibold">
            <Button variant={variantButton} onClick={() => navigate("/login")}>Login</Button>
            <Button variant={variantButton} onClick={() => navigate("/register")}>Register</Button>
          </div>
        )}
      </div>
    </>
  );
}

import Logo from "@/assets/logo.svg";
import Button from "../../../components/Button/Button";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#0d253f] flex justify-between items-center p-4 px-16 text-white">
        <div className="w-52 ">
          <img src={Logo}></img>
        </div>
        <div className="flex justify-center items-center space-x-4 gap-3 font-semibold ">
          <a className="cursor-pointer">Movies</a>
          <a className="cursor-pointer">TV Shows</a>
          <a className="cursor-pointer">People</a>
          <a className="cursor-pointer">More</a>
        </div>
        <div className="flex justify-between items-center space-x-4 gap-3 font-semibold">
          <Button variant="primary">Login</Button>
          <Button variant="secondary">Register</Button>
        </div>
      </div>
    </>
  );
}

import logodark from "../../../../assets/logo-dark.svg";
import Button from "../../../../components/Button/Button";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center p-4 px-16 text-black-300">
        <div className="w-32">
          <img src={logodark}></img>
        </div>
        <div className="flex justify-between items-center space-x-4 gap-3 md:my-0 my-5 font-semibold border border-black rounded-full px-12 py-2">
          <a className="cursor-pointer hover:text-purple-900">Movies</a>
          <a className="cursor-pointer hover:text-purple-900">TV Shows</a>
          <a className="cursor-pointer hover:text-purple-900">People</a>
          <a className="cursor-pointer hover:text-purple-900">More</a>
        </div>
        <div className="flex justify-between items-center space-x-3  font-semibold">
          <Button variant="primary">Login</Button>
          <Button variant="secondary">Register</Button>
        </div>
      </div>
    </>
  );
}

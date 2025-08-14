import Navbar from "../../features/header/components/navbar/Navbar";
import Main from "../../features/main/main";
import logodark from "../../assets/logo-dark.svg";

export default function WelcomePage() {

  return (
    <>
      <div className="bg-[url('@/assets/Rectangle.jpg')] bg-cover bg-center h-dvh">
        <Navbar
          aStyles="cursor-pointer hover:text-purple-900"
          variantButton="secondary"
          logo={logodark}
        />
        <Main />
      </div>
    </>
  );
}

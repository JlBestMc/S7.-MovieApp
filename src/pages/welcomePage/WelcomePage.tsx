import Navbar from "../../features/header/components/navbar/Navbar";
import Main from "../../features/main/MainFeature";
import logodark from "../../assets/logo-dark.svg";

export default function WelcomePage() {

  return (
    <>
      <div className="bg-[url('@/assets/Rectangle.jpg')] bg-cover bg-no-repeat bg-fixed bg-center pb-20 md:pb-0 md:h-screen">
        <Navbar
          aStyles="cursor-pointer hover:bg-gradient-to-r hover:from-blue-900 hover:to-purple-900 hover:bg-clip-text hover:text-transparent"
          variantButton="secondary"
          logo={logodark}
        />
        <Main />
      </div>
    </>
  );
}

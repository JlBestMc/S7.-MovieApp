import Footer from "../../features/footer/Footer";
import Navbar from "../../features/header/components/navbar/Navbar";
import Main from "../../features/main/main";

export default function WelcomePage() {
  return (
    <div>
      <div className="bg-[url('@/assets/Rectangle.jpg')] bg-cover bg-center h-screen">
        <Navbar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

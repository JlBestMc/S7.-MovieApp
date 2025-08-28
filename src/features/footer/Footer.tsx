import logoXL from "@/assets/logo-lg.svg";
import Button from "../../components/Button/Button";
import { useAuth } from "../../auth/hooks/useAuth";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  const { user } = useAuth();

  return (
    <footer className="bg-[#0d253f] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          <div className="flex flex-col justify-center items-center">
            <img src={logoXL} alt="MovieApp Logo" className="mb-8 w-32" />
            <Link to={user ? "/movies" : "/login"}>
              <Button variant="tertiary">
                {user ? (
                  <p>
                    Hello,{" "}
                    {user.displayName?.split(" ")[0] ||
                      (user.email ? user.email.split("@")[0] : "")}
                  </p>
                ) : (
                  <p>Get Started</p>
                )}
              </Button>
            </Link>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">The Basics</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white text-white">
                  About TMDB
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-white">
                  Support Forums
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-white">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white text-white">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-white">
                  API Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-white">
                  DMCA Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="mr-7 md:mr-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-white">
                  Movies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-white">
                  TV Shows
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-white">
                  About us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

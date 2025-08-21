import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/registerPage/registerPage";
import MoviePage from "./pages/moviePage/MoviePage";
import { AuthProvider } from "./auth/context/AuthContext"; 
import WelcomePage from "./pages/welcomePage/WelcomePage";
import Footer from "./features/footer/Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/movies" element={<MoviePage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;

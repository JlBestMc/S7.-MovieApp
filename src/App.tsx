import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/registerPage/registerPage";
import MoviePage from "./pages/moviePage/MoviePage";
import MovieDetailPage from "./pages/movieDetailsPage/movieDetailsPage";
import ActorDetailsPage from "./pages/actorDetailsPage/ActorDetailsPage";
import { AuthProvider } from "./auth/context/AuthContext"; 
import WelcomePage from "./pages/welcomePage/WelcomePage";
import Footer from "./features/footer/Footer";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <MoviePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <ProtectedRoute>
                <MovieDetailPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/actor/:id"
            element={
              <ProtectedRoute>
                <ActorDetailsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

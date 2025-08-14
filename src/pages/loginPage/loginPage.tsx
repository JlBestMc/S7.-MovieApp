import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../auth/firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../../features/header/components/navbar/Navbar";
import logo2 from "../../assets/logo2.svg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirige a la página principal
    } catch (err) {
      setError("Correo o contraseña incorrectos.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      setError("Error al iniciar sesión con Google.");
    }
  };

  return (
    <>
      <Navbar
        bgColor="bg-[#0d253f]"
        aStyles="cursor-pointer hover:text-cyan-300 text-white"
        logo={logo2}
        borderColor="border-white"
        variantButton="quaternary"
      />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded shadow-md w-80"
        >
          <h2 className="text-xl font-bold mb-4">Iniciar Sesión</h2>

          {error && <p className="text-red-500 mb-2">{error}</p>}

          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full mb-3"
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full mb-3"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Entrar
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="bg-red-500 text-white px-4 py-2 rounded w-full mt-3"
          >
            Iniciar con Google
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;

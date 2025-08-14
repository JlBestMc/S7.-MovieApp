import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../auth/firebase";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";
import logo2 from "../../assets/logo2.svg";
import Navbar from "../../features/header/components/navbar/Navbar";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      navigate("/");
    } catch (err) {
      let message = "Error al registrar el usuario.";
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case "auth/email-already-in-use":
            message = "El correo ya está en uso.";
            break;
          case "auth/invalid-email":
            message = "El correo no es válido.";
            break;
          case "auth/weak-password":
            message = "La contraseña es demasiado débil (mín. 6 caracteres).";
            break;
          default:
            message = err.message || message;
        }
      }
      console.error("Register error:", err);
      setError(message);
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
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Registro</h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full mb-3"
          required
        />

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

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">
          Registrarse
        </button>
      </form>
    </div>
    </>
  );
};

export default RegisterPage;

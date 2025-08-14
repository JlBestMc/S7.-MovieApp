// src/components/GoogleButton.tsx
import { loginWithGoogle } from "../authService";

export default function GoogleButton() {
  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
    } catch (err) {
      console.error("Error con Google:", err);
    }
  };

  return (
    <button
      onClick={handleGoogle}
      className="bg-red-500 text-white py-2 px-4 rounded"
    >
      Iniciar sesión con Google
    </button>
  );
}

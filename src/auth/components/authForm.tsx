// src/components/AuthForm.tsx
import { useState } from "react";
import { loginEmailPassword, registerEmailPassword } from "../authService";

interface Props {
  isLogin?: boolean;
}

export default function AuthForm({ isLogin = true }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await loginEmailPassword(email, password);
      } else {
        await registerEmailPassword(email, password);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 rounded">
        {isLogin ? "Iniciar sesión" : "Registrarse"}
      </button>
    </form>
  );
}

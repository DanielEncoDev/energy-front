import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import qs from "qs";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const body = qs.stringify({
      username,
      password,
    });
   
    try {
        const response = await axios.post("http://127.0.0.1:8000/login", body, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
    
        console.log("Respuesta:", response.data);
        localStorage.setItem("token", response.data.token);
        router.push("/dashboard");
      } catch (error) {
        console.error("Error en la solicitud:", error);
        return null;
      }
  };

  return (
    <div >
      <h2>Login </h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" , gap: "1rem"}}>
        <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Iniciar sesión</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

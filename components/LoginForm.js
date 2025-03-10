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
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}stations`, body, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.access_token}`;
        localStorage.setItem("token", response.data.access_token);
        router.push("/dashboard");
    
        console.log("Respuesta:", response.data);
      } catch (error) {
        console.error("Error en la solicitud:", error);
        return null;
      }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" , gap: "1rem"}}>
        <input className="input" type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="input" type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="btn-confirm" type="submit">Iniciar sesión</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

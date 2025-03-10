import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

// import '../styles/global.css';

export default function Home() {
  const router = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);

    if (token) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <div className="container">
      <h1>Iniciar Sesión</h1>
      <LoginForm />
    </div>
  );
}

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
  }, []);

  return (
    <div className = "flex flex-col items-center justify-center h-screen">
        <LoginForm  />
    </div>
  );
}

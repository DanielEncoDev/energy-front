import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

import axios from "axios";

export default function Dashboard() {
  const [token, setToken] = useState(null);
  const router = useRouter();

  // const getStation = async () => {
  //   const response = await axios.get("http://127.0.0.1:8000/station", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   console.log("Respuesta:", response)  };
  
  useEffect(async () => {
    const token = localStorage.getItem("token");
    setToken(token)
  

  }, []);

  return (
    <div >
      <h1>Dashboard</h1>
      <Navbar />
      {token ? <p>Bienvenido</p> : <p>Cargando...</p>}
    </div>
  );
}

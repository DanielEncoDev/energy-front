import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <nav style={{ display: "flex", justifyContent: "center" }}>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </nav>
  );
}

import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <nav className="navbar">
        <h1>S2G Energy</h1>
      <button className="button-logout" onClick={handleLogout}>Cerrar sesión</button>
    </nav>
  );
}

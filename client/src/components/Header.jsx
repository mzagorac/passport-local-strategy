import { NavLink, useHistory } from "react-router-dom";
import "./Header.css";

export default function Header({ user, setUser, bc }) {
  const { push } = useHistory();

  const handleLogout = async (e) => {
    const response = await fetch("/logout");
    const responseData = await response.json();

    if (responseData.message === "user logged out") setUser(null);
    push("/");
    bc.postMessage("Logged out");
  };

  return (
    <div className="Header">
      <div className="logo" onClick={() => push("/")}>
        Logo
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        {user && <NavLink to="/profile">Profile</NavLink>}
        {!user ? (
          <NavLink to="/login">Login</NavLink>
        ) : (
          <div onClick={handleLogout}>Logout</div>
        )}
      </nav>
    </div>
  );
}

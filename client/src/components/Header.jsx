import { NavLink, useHistory } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const { push } = useHistory();

  const handleLogout = async (e) => {
    const response = await fetch("/logout");
    const responseData = await response.json();
    console.log(responseData);
  };

  return (
    <div className="Header">
      <div className="logo" onClick={() => push("/")}>
        Logo
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <div onClick={handleLogout}>Logout</div>
      </nav>
    </div>
  );
}

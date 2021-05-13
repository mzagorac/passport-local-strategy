import { useEffect, useState } from "react";
import "./Login.css";

export default function Login() {
  const [data, setData] = useState({ username: "", password: "" });

  const submitHandler = async (e) => {
    e.preventDefault();
    const respose = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const responseData = await respose.json();

    setData({ username: "", password: "" });
  };

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({ ...data, [name]: value });
  };

  return (
    <div className="login">
      <form onSubmit={submitHandler}>
        <label>
          Username:
          <input
            type="usernamd"
            name="username"
            value={data.username}
            onChange={changeHandler}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
          />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
}

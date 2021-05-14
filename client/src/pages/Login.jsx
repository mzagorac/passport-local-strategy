import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

export default function Login({ setUser }) {
  const [data, setData] = useState({ username: "jack", password: "1234567" });
  const { push } = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    const respose = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const responseData = await respose.json();

    console.log(responseData);
    if (responseData.message === "user logged in") {
      const userResponse = await fetch("/profile");
      const userData = await userResponse.json();

      setUser(userData.user);
      push("/profile");
      // console.log(userData);
    }

    // setData({ username: "", password: "" });
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

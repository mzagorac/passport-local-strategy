import { useState, useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [bc, setBc] = useState(null);
  const { push } = useHistory();

  useEffect(() => {
    const bc = new BroadcastChannel("test_channel");
    setBc(bc);
    bc.onmessage = function (ev) {
      if (ev.data === "Logged in") {
        fetch("/profile")
          .then((res) => res.json())
          .then((data) => {
            setUser(data.user);
            push("/profile");
          })
          .catch(console.error);
      }

      if (ev.data === "Logged out") {
        setUser(null);
      }
    };

    return () => bc.close();
  }, [push]);

  return (
    <div className="App">
      <Header user={user} setUser={setUser} bc={bc} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} bc={bc} />
        </Route>
        {user ? (
          <Route path="/profile">
            <Profile user={user} />
          </Route>
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/profile")
      .then((response) => {
        if (response.redirected) {
          return Promise.resolve({});
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.user) {
          setUser(data.user);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Router>
        <Header user={user} setUser={setUser} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          {user ? (
            <Route path="/profile">
              <Profile user={user} />
            </Route>
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

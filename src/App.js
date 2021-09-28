import React, { useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";

import "./App.css";
import useStore from "./store";

function App() {
  const history = useHistory();

  const loggedInUserId = useStore(store => store.loggedInUserId);
  const loggedUserRole = useStore(store => store.loggedUserRole);
  const getUserRole = useStore(store => store.getUserRole);

  if (!loggedInUserId) {
    history.push("/");
  } else if (loggedUserRole === "ADMIN") {
    history.push("/dashboard");
  } else {
    history.push("/homePage");
  }

  useEffect(() => {
    if (loggedInUserId) {
      getUserRole(loggedInUserId);
    }
  }, [getUserRole, loggedInUserId]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/sign-up">
          <SignUpPage />
        </Route>

        <Route path="/homePage">
          <HomePage />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LoginPage from "./pages/LoginPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";

function App() {
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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

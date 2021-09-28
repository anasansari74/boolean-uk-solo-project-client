import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

import styled from "styled-components";
import useStore from "../store";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginDiv = styled.div`
  display: grid;

  padding: 1rem;
  margin: 2rem 15%;

  border: 0.5rem solid royalblue;
  border-radius: 1rem;

  h1 {
    font-size: 3rem;
    text-align: center;
  }

  .login-form {
    display: grid;

    padding: 1rem;
    margin: 1rem;
  }

  .sign-up-btn {
    display: inline;
    text-align: center;

    padding: 0.5rem;
    margin: 0.5rem;
  }
`;

export default function LoginPage() {
  // const loggedInUserId = useStore(store => store.loggedInUserId);
  const setLoggedInUser = useStore(store => store.setLoggedInUser);

  // const history = useHistory();

  const handleLogin = e => {
    e.preventDefault();

    const target = e.target;

    const userCreds = {
      userName: target.userName.value.toString(),
      password: target.password.value.toString(),
    };

    setLoggedInUser(userCreds);
    // .then(() => {
    //   if (loggedInUserId) {
    //     history.push("/homePage");
    //   }
    // });
  };
  return (
    <LoginDiv>
      <h1>Welcome to The Silver Train Ticketting App!</h1>

      <Form className="login-form" onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="text">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="userName"
            placeholder="Enter username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <p className="sign-up-btn">
        Don't have an account? <Link to="/sign-up">Sign Up!</Link>
      </p>
    </LoginDiv>
  );
}

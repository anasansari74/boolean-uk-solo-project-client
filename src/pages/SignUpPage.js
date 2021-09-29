import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
// import useStore from "../store";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import useStore from "../store";

const SignUpDiv = styled.div`
  display: grid;

  padding: 1rem;
  margin: 2rem 15%;

  border: 0.5rem solid royalblue;
  border-radius: 1rem;

  h1 {
    font-size: 3rem;
    text-align: center;
  }

  .signup-form {
    display: grid;

    padding: 1rem;
    margin: 1rem;
  }

  .log-in-btn {
    display: inline;
    text-align: center;

    padding: 0.5rem;
    margin: 0.5rem;
  }
`;

export default function SignUpPage() {
  const signUpUser = useStore(store => store.signUpUser);

  const handleSignUp = e => {
    e.preventDefault();

    const target = e.target;

    const dateBorn = `${target.dOB.value} 00:00:00 +0000`;

    const userCreds = {
      userName: target.userName.value.toString(),
      firstName: target.firstName.value.toString(),
      lastName: target.lastName.value.toString(),
      dateOfBirth: dateBorn,
      password: target.password.value.toString(),
      bio: target.bio.value.toString(),
    };

    signUpUser(userCreds);
  };
  return (
    <SignUpDiv>
      <h1>Sign up!</h1>

      <Form className="signup-form" onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Enter firstname"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Enter lastname"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="userName"
            placeholder="Enter username"
          />
          <Form.Text className="text-muted">
            Your username is absolutely unique
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dOB">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" max="2003-10-01" name="dOB" />
        </Form.Group>

        <FloatingLabel
          controlId="floatingTextarea"
          label="About you!"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            type="textarea"
            name="bio"
            placeholder="Enter your bio"
          />
        </FloatingLabel>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <p className="log-in-btn">
        Have an account? <Link to="/login">Login!</Link>
      </p>
    </SignUpDiv>
  );
}

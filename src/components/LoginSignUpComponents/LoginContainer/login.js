import { Container, TextField, Button } from "@material-ui/core";
import { useState } from "react";
import React from "react";
import "./login.css";

function Login() {
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);

  const test = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <form>
      <Container className="container" maxWidth="xs">
        <div className="welcome">
          <h1>Welcome Back!</h1>
          <h3> Login Yourself here</h3>
        </div>

        <TextField
          onChange={(event) => setEmail(event.target.value)}
          className="items"
          label="Username"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setPassword(event.target.value)}
          className="items"
          label="Password"
          type="password"
          variant="outlined"
        />
        <label className="forgotPassword">Forgot Password?</label>
        <label className="dont">
          <p>
            Don't have account.<a href="#"> Register Here</a>
          </p>
        </label>
        <Button
          onClick={test}
          className="items btn"
          type="submit"
          variant="contained"
          color="primary"
        >
          Login
        </Button>
        <Button
          onClick={test}
          className="items btn btn-google"
          type="submit"
          variant="contained"
          color="secondary"
        >
          Login With Google
        </Button>
        <Button
          onClick={test}
          className="items btn btn-facebook"
          type="submit"
          variant="contained"
          color="primary"
        >
          Login With Facebook
        </Button>
      </Container>
    </form>
  );
}

export default Login;

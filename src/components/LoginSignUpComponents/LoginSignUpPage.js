import React from "react";
import Signup from "./SignupContainer/signup";
import Login from "./LoginContainer/login";
import { useState } from "react";
import Swinging from "./svgImage/swinging";
import "../../App.css";
import { Grid, Hidden, Button } from "@material-ui/core";
function LoginSignUpPage() {
  const [signInState, setSignInState] = useState(true);
  const [signUpState, setSignUpState] = useState(false);
  const toggle = (page) => {
    if (page === "signin") {
      setSignUpState(false);
      setSignInState(true);
    } else {
      setSignUpState(true);
      setSignInState(false);
    }
    console.log(signInState, signUpState);
  };
  const renderForm = () => {
    if (signInState) {
      return <Login />;
    }
    if (signUpState) {
      return <Signup />;
    }
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Hidden only={["xs"]}>
            <Swinging />
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={6} className="signin-container">
          <Grid container>
            <Button
              disabled={signInState}
              className="btnSign"
              variant="outlined"
              color="secondary"
              onClick={() => {
                toggle("signin");
              }}
            >
              SignIn
            </Button>
            <Button
              className="btnSign"
              disabled={signUpState}
              variant="outlined"
              color="secondary"
              onClick={() => {
                toggle("signup");
              }}
            >
              SignUp
            </Button>
          </Grid>
          {renderForm()}
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginSignUpPage;

import {
  makeStyles,
  Container,
  TextField,
  Button,
  InputAdornment,
} from "@material-ui/core";
import { useState } from "react";
import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    marginTop: "16px",
    justifyContent: "center",
    textAlign: "center",
  },
  items: {
    marginTop: "15px",
  },
  tabs: {
    alignItems: "center",
  },
}));

function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);

  const test = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <form>
      <Container className={classes.container} maxWidth="xs">
        <h1>Login In</h1>

        <TextField
          onChange={(event) => setEmail(event.target.value)}
          className={classes.items}
          label="Username"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          onChange={(event) => setPassword(event.target.value)}
          className={classes.items}
          label="Password"
          type="password"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKeyIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          onClick={test}
          className={classes.items}
          type="submit"
          variant="contained"
          color="primary"
        >
          Login
        </Button>
        <Button
          onClick={test}
          className={classes.items}
          type="submit"
          variant="contained"
          color="secondary"
        >
          Login With Google
        </Button>
        <Button
          onClick={test}
          className={classes.items}
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

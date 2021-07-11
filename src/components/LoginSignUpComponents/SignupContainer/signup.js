import React from "react";
import { useState } from "react";
import {
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@material-ui/core";
import { Container, TextField } from "@material-ui/core";
import "./signup.css";

function Signup() {
  const [value, setValue] = React.useState("female");
  const [fName, setfName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Container className="container">
        <div className="welcome">
          <h1>Welcome</h1>
          <h3> Register Yourself here</h3>
        </div>
        <form className="form">
          <Grid container>
            <Grid item xs={6}>
              <TextField
                type="text"
                className="name"
                onChange={(event) => setfName(event.target.value)}
                variant="outlined"
                label="First Name"
                value={fName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                className="name"
                variant="outlined"
                label="Last Name"
                onChange={(event) => setLName(event.target.value)}
                value={lName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                className="items"
                variant="outlined"
                label="Email id"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <RadioGroup
                row
                value={value}
                className="radio"
                onChange={handleChange}
              >
                <FormControlLabel
                  className="FormControlLabel"
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  className="FormControlLabel"
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="items"
                variant="outlined"
                label="Password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                className="items"
                variant="outlined"
                label="Comfirm Password"
                onChange={(event) => setCpassword(event.target.value)}
                value={cpassword}
              />
            </Grid>
            <Grid item xs={12}>
              <Button className="btn" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default Signup;

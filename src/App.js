import { Grid, Hidden } from "@material-ui/core";
import "./App.css";
import LoginSignup from "./components/svgImage/svgImageComponent";
import NavTabs from "./components/loginSignup/NavTab/tab";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Hidden only={["xs"]}>
            <LoginSignup />
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={6}>
          <NavTabs />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

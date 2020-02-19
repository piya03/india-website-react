import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import "./App.css"
import CountryDetails from "./CountryDetails"
import Languages from "./Languages"
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';



const useStylesAppBar = makeStyles({
  root: {
    backgroundColor: "pink",
    height: "150px",
    "display": "flex", "justifyContent": "center", "flexDirection": "row",
    position: "absolute"
  }
})
const useStylesToolBar = makeStyles({
  root: {
    "background": "#eee", "borderRadius": "5px", "margin": "0px auto",
    "position": "absolute", "bottom": "5px",
    "right": "5px", "left": "5px", "display": "grid", "gridTemplateColumns": "auto auto"
  }

})
const useStylesContainerAppbar = makeStyles({
  root: {
    position: "relative"
  }
})


function AppContainer() {
  const classesAppBar = useStylesAppBar()
  const classesToolbar = useStylesToolBar()
  const classesContainer = useStylesContainerAppbar()
  let location = useLocation();

  console.log('location.pathname', location)
  let title = ''
  if (location.pathname === '/') {
    title = 'India'
  }
  if (location.pathname === '/languages') {
    title = 'Languages'
  }
  return (
    <AppBar classes={classesAppBar}>
      <Container maxWidth="md" classes={classesContainer}>
        <Typography variant="h3" color="inherit">
          {title}
        </Typography>
        <Toolbar classes={classesToolbar}>
          <Link to="/" variant="h5" color="inherit">
            <Typography variant="h5" color="inherit">India
                   </Typography>
          </Link>
          <Link to="/languages" variant="h5" color="inherit">
            <Typography variant="h5" color="inherit">
              Languages
                  </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>

  )
}
function App() {

  return (
    <div className="App" style={{ paddingTop: "140px" }}>

      <Router>
    
        <AppContainer />
        <Switch>
          <Route path="/languages" component={Languages} />
          <Route path="/" component={CountryDetails} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;


// background: antiquewhite;
//     padding: 32px;
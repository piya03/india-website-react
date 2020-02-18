import React from 'react';
import Button from '@material-ui/core/Button';
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
import { AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Box, Container } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


// function makeStyles(obj) {
//     return function() {

//     }
// }
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
});

const useStylesAppBar = makeStyles({
  root: {
    backgroundColor: "pink",
    height: "150px",
    "display": "flex", "justifyContent": "center", "flexDirection": "row"
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

  console.log('location.pathname', location.pathname)
  let title = ''
  if(location.pathname === '/'){
    title= 'India'
  } 
  if(location.pathname === '/languages') {
    title = 'Languages of India'
  }
  return (
    <AppBar classes={classesAppBar}>
      <Container maxWidth="md" classes={classesContainer}>
        <Typography variant="h2" color="inherit">
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
  // const classes = useStyles();

  // useLocation()
  return (
    <div className="App" style={{ paddingTop: "140px" }}>

      <Router>

        <AppContainer></AppContainer>
        <Switch>
          <Route path="/languages" component ={Languages} /> 
          <Route path="/"  component ={CountryDetails} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;


// background: antiquewhite;
//     padding: 32px;
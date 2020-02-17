import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css"
import CountryDetails from "./CountryDetails"
import Rivers from "./Rivers"
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


function App() {
  const classes = useStyles();

  return (
    <div className="App">
      {/* <Button variant="contained" color="primary"
          classes={{
            root: classes.root, // class name, e.g. `classes-nesting-root-x`
            label: classes.label, // class name, e.g. `classes-nesting-label-x`
          }}
          >
      Hello World
    </Button> */}
    <Router>

      <div className="container">
        <h1>India</h1>
        <nav className="main-nav">
          <Link to="/">India</Link>
          <Link to="/rivers">Rivers</Link>
        </nav>

      </div>


      <Switch>
      <Route path="/rivers">
            <Rivers />
          </Route>
          <Route path="/">
            <CountryDetails />
          </Route>
       
         
        </Switch>
        </Router>

    </div>
  );
}

export default App;

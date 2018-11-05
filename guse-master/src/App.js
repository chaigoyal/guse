import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home';
import Survey from './components/Survey';
import Dashboard from './components/Dashboard';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#363636',//'rgb(41, 182, 246)',
      contrastText: 'white'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#f03d33',//'rgb(255, 202, 40)'
      contrastText: 'white'
    },
    // error: will use the default color
  },
  overrides: {
    MuiStepIcon: {
      root: {
        color: "rgb(243, 99, 91)",
        '&$active': {
          color: '#f03d33'
        },
        '&$completed': {
          color: '#f03d33'
        }
      },
      text: {
        color: 'white'
      }
    },
    MuiFormControlLabel: {
      label: {
        color: 'white'
      }
    },
    MuiInput: {
      root: {
        color: 'white'
      }
    }
  }
});

console.log(theme)

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/survey" component={Survey} />
        <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

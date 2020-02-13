import React, { Component } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Dashboard from './Components/Dashboard/dashboard'
import SortIcon from '@material-ui/icons/Sort';
import AlarmIcon from '@material-ui/icons/Alarm';
import Sorting from './Sorting/sorting'
import Complexity from './Complexity/complexity'


class App extends Component {
  drawerList = {
    // Home: ["", <Home />],
    "Sorting": ["sort", <SortIcon />],
    "Complexity": ["complexity", <AlarmIcon />]
  }
  render() {
    return (
      <div>
        <Route
        component = {()=>(
          <Dashboard drawerList={this.drawerList}>
               <Route
                exact
                path="/sort"
                component = {Sorting}
              />
              <Route
                exact
                path="/complexity"
                component = {Complexity}
              />
        </Dashboard>
        )}
           />
      </div>
    );

  }
}

export default App;

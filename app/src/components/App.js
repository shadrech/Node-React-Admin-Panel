import React from 'react';
import { Provider } from "react-redux";
import {
  Router,
  Route,
} from "react-router-dom";

import { UsersList } from "./users-list";
import { UserCreateEdit } from "./user-create-edit";
import store from "../store";
import '../sass/index.css';

import history from "../history";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <h2 className="header">My Users App</h2>
    
            <Route exact path="/" component={UsersList} />
            <Route path="/users/create" component={UserCreateEdit} />
            <Route path="/user/:id" component={UserCreateEdit} />
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

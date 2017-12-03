import React from 'react';
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";

import { UsersList } from "./users-list";
import { UserCreateEdit } from "./user-create-edit";
import store from "../store";
import '../sass/index.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <h2 className="header">My Users</h2>

        <Route exact path="/" component={UsersList} />
        <Route path="/users/create" component={UserCreateEdit} />
        <Route path="/user/:id" component={UserCreateEdit} />
        </div>
    </BrowserRouter>
  </Provider>
)

export default App;

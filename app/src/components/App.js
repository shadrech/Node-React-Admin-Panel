import React from 'react';
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";

import { UsersList } from "./users-list";
import { UserEdit } from "./user-edit";
import store from "../store";
import '../sass/index.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={UsersList} />
        <Route path="/user/:id" component={UserEdit} />
      </div>
    </BrowserRouter>
  </Provider>
)

export default App;


import React, { Component } from "react";
import UserProfileList from "./components/UserProfileList";
import { usersService } from "./services";
import "./App.css";

import 'bootstrap-css';
//import { testData } from './dummyData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userList: []
    };
  }

  componentDidMount() {
    usersService.getUsers()
    .then(users => {
    this.setState ({userList: users })});
  }

  render() {
      const { userList } = this.state;
      return !userList.length ? (
        <div class="spinner"></div>
      ) : (
      <div class="container">
      <UserProfileList userlist={userList} />
      </div>
      );
    }
}

export default App;

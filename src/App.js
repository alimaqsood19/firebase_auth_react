import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      password: '',
      user: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.userName, this.state.password)
      .then(data => {
        console.log('Successfully logged in');
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.setState({ user });
            console.log(this.state.user);
          } else {
            console.log('NO user');
          }
        });
      })
      .catch(err => {
        console.log('err', err);
      });
  }

  handleChangeUser = event => {
    this.setState({ userName: event.target.value });
  };

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleClick = () => {
    if (this.state.user) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log('Successfully signed out');
          this.setState({ user: '' });
        })
        .catch(err => {
          console.log('Err', err);
        });
    }
    return console.log('No user to logout');
  };

  handleSignIn = () => {
    if (this.state.user) {
      return console.log('You are already logged in');
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.userName, this.state.password)
        .then(user => {
          this.setState({ user });
          console.log('You have signed back in', user);
        })
        .catch(err => {
          console.log('You have an error', err);
        });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Firebase AUTH</p>
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label type="text">User Name</label>
            <input
              type="text"
              value={this.state.userName}
              onChange={this.handleChangeUser}
            />
            <label type="text">Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
            <button type="submit">Submit</button>
          </form>
          <label>Sign out</label>
          <button onClick={this.handleClick}>Log Out</button>
          <label>Sign In</label>
          <button onClick={this.handleSignIn}>Sign In</button>
        </div>
      </div>
    );
  }
}

export default App;

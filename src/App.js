import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import AuthPage from './pages/auth/auth.component';

import Header from './layouts/header/header.component';

import { auth } from './firebase/firebase.utils'; 

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  subscribtionFromAuth = null;

  componentDidMount() {
    this.subscribtionFromAuth = auth.onAuthStateChanged(user => {
        this.setState({currentUser: user});

        console.log(user);
      })
  }

  componentWillUnmount() {
    // unsubscribing whenever component unmount 
    this.subscribtionFromAuth();
  }

render() {
  const {currentUser} = this.state;
  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/auth' component={AuthPage} />
      </Switch>
    </div>
  );

}
}

export default App;
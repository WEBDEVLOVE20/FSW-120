import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import TweetPost from './components/TweetPost/TweetPost';
import Login from './components/Login/Login';


const App = () => {

  return (
    <div >
      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/tweets' component={TweetPost}/>
      </Switch>
    </div>
  );
}

export default App;
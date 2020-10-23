import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from "./scenes/Home/HomePage.jsx"
import AboutPage from "./scenes/About/AboutPage.jsx"
import Navigation from "./components/navigation/Navigation.jsx"
import { Chatroom } from "./scenes/Chatroom/Chatroom.jsx";

//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (

    <React.Fragment action="/'" method="post">
      <Navigation />
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/home' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/chat' component={Chatroom} />
          </Switch>
        </main>
    </React.Fragment>
  );
}

export default App;
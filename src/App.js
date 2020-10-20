import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from "./components/home-page/home.jsx"
import AboutPage from "./components/about-page/about-page.jsx"
import Navbar from "./components/navbar/navbar.jsx"
import { ChatBox } from "./components/chatbox/chatbox"

//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/home' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/chat' component={ChatBox} />
          </Switch>
        </main>
    </React.Fragment>
  );
}

export default App;
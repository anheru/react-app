import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'
import Header from './Header'
import Index from '../pages/index'
import About from '../pages/about'
import Users from '../pages/users'
import Comics from '../pages/comics'
import Comic from '../pages/comic'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Header/>

          <div className="App-content">
            <Switch>
              <Route path="/" exact component={Index}/>
              <Route path="/comics" exact component={Comics}/>
              <Route path="/comics/:id" component={Comic}/>
              <Route path="/about" component={About}/>
              <Route path="/users" component={Users}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App

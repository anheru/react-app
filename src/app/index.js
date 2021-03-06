import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Routes from './config/routes'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Form from './Form'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ Form } />
        </div>
      </Router>
    )
  }
}

export default App

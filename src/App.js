import './App.css';
import Navbar from './Components/NavBar';
import React, { Component } from 'react'
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={5} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={9} country="in" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={9} country="in" category="entertainment" />}></Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={9} country="in" category="general" />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={9} country="in" category="health" />}></Route>
            
          </Routes>
        </Router>
      </div>
    )
  }
}


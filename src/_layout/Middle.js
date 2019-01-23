import React, {Component} from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import Home from '../_pages/_home/Home'
import Article from '../_pages/_articles/Article'
import About from '../_pages/_about/About'

export default class Header extends Component {
  render() {
    return (
        <Router>
          <div className='middleContent'>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/article" component={Article}/>
          </div>
        </Router>
    );
  }
}



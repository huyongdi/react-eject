import React, {Component} from 'react';
//import { Router, Link } from "@reach/router";
import {HashRouter as Router, Route, Link} from "react-router-dom";
import Home from '../_pages/Home'
import Article from '../_pages/Article'
import About from '../_pages/About'

export default class Header extends Component {
  render() {
    return (
        <Router>
          <div className='middleContent'>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/article" component={Article}/>

            {/*<Router>*/}
            {/*<Home path="/" />*/}
            {/*<About path="about" />*/}
            {/*<Article path="article" />*/}
            {/*</Router>*/}
          </div>
        </Router>
    );
  }
}



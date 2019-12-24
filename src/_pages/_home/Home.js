import React, { Component } from 'react';
import './home.less'


export default class Home extends Component {

  state = {
    iframeWidth :0
  }

  componentDidMount() {
    this.setState({
      iframeWidth: document.body.clientHeight - 40
    })
  }

  render() {
    return (
      <div className='bodyContent'>
        <iframe title='home' src="./homeShow/index.html" width="100%" height={this.state.iframeWidth}>

        </iframe>
     </div>
    );
  }
}



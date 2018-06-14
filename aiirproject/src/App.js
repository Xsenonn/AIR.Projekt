import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './containers/Home';
import ViewTask from './containers/ViewTask';
import './style/base.scss'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      userID:'',
      isLogged: false,
    }

    this.handler = this.handler.bind(this)
  }

  componentDidUpdate(prev) {
    console.log(this.state)
  }

  handler = (usr) => {
    console.log(usr)
    this.setState({userID: usr, isLogged: true})
    
  }

  render() {
    return (
      <Router>
        <div className='base'>
          <Route exact path="/" render={props => <Home userHandler={props => this.handler(props)}/>}/>
          {this.state.isLogged ? <Route exact path="/view" render={props => (<ViewTask userID={this.state.userID}/>)}/> : <Redirect to='/'/> }
          {this.state.isLogged ? <Redirect to='/view'/> : null}
        </div>
      </Router>
    );
  }
}


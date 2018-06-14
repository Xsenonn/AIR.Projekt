import React, { Component } from 'react';
import LoginMenu from '../components/LoginMenu';
import Register from '../components/Register';
import Login from '../components/Login';
import apiClient from '../api/apiClient'
import '../style/base.scss';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      register:false,
      userID:'',
      pass:''
    }
    
  }

  handler = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const user = data.get('username');
    const pass = data.get('pass');
    this.setState({userID: user, pass: pass})
    apiClient.login(user,pass)
    .then(response => response === true ? this.props.userHandler(this.state.userID): null )
  }

  
  
  componentDidUpdate(prev) {
    console.log(this.state)
  }

  display = popup => {
    switch (popup) {
      case 'login': {
        const { login } = this.state;
        return this.setState({ login: !login })
      }
      case 'register': {
        const { register } = this.state;
        return this.setState({ register: !register })
      }
      default:
        break;
    }
  }

  render() {
    const { login, register } = this.state;
    return(
      <div className='container'>
        {/*this.state.handler*/}
        { login ? <Login close={() => this.setState({ login: false, register: true })} 
                         handler={(props) => this.handler(props)}/> : null }
        { register ? <Register close={() => this.setState({register: false, login: true })} 
                         handler={(event) => this.handler(event)}/> : null }
      </div>
    )
  }
}
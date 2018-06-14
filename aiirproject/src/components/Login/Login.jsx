import React, {Component} from 'react'
import './Login.scss';
import apiClient from '../../api/apiClient'
const Login = (props) => {

  const closeContainer = (event) => {
    event.preventDefault();
    return props.close();
  }

  const handleSubmit= (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const user = data.get('username');
    console.log(event.target.value)
    apiClient.login(data)
    .then(response => response === true ? null : null )
    .catch(error => {})
  }

  return (
    <div className='overlay'>
      <div className='Login'>
        <div className='Login__Header'>
          <h1>Login</h1>
          <button onClick={(event) => closeContainer(event)}>X</button>
        </div>
        <div className='Login__Main'>
        <form className='Login__Form' onSubmit={(event) => props.handler(event)}>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username'/>
          <label htmlFor='pass'>Password</label>
          <input type='password' name='pass'/>
          <input type="submit" value="Submit"/>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
import React from 'react'
import './Register.scss';
const Register = (props) => {

  const closeContainer = (event) => {
    event.preventDefault();
    return props.close();
  }

  return (
    <div className='overlay'>
      <div className='Register'>
        <div className='Register__Header'>
          <h1>Register</h1>
          <button onClick={(event) => closeContainer(event)}>X</button>
        </div>
        <div className='Register__Main'>
        <form className='Register__Form' onSubmit={(event) => props.handlerReg(event)}>
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

export default Register;
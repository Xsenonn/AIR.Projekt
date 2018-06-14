import React from 'react'
import './CreateTask.scss';
import SendFile from '../SendFile';

const CreateTask = props => {

  const closeContainer = (event) => {
    event.preventDefault();
    return props.close();
  }

  const payload = {
    userID: props.userID,
    taskName: props.taskName,
    query: props.query
  }
  
  return (
    <div className='overlay'>
      <div className='CreateTask'>
        <div className='CreateTask__Header'>
          <h1>Create Task for {payload.userID}</h1>
          <button onClick={(event) => closeContainer(event)}>X</button>
        </div>
        <div className='CreateTask__Main'>
        <form className='CreateTask__Form'>
          <label htmlFor='taskName'>Task Name</label>
          <input type='text' name='taskName' onChange={props.onChangeTaskName} value={props.taskName} />
          <label htmlFor='query'>Query</label>
          <input type='text' name='query' onChange={props.onChangeQuery} value={props.query} />
          <SendFile userID={props.userID} taskName={props.taskName} query={props.query}/>
        </form>
        </div>
      </div>
    </div>
  )
}

export default CreateTask;
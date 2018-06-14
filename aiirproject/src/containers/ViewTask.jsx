import React, { Component } from 'react';
import Menu from '../components/Menu';
import BaseTable from '../components/BaseTable';
import CreateTask from '../components/CreateTask';
import '../style/base.scss';


export default class ViewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false,
      taskName: '',
      query:'',
      tasks:[{
        taskId:'1',
        query:'dupa',
        status:'Pending',
        startTime:'09.06.18',
        userId:'ThomasP'
      },
      {
        taskId:'1',
        query:'dupa',
        status:'Finished',
        startTime:'09.06.18 10:45',
        endTime:'10.06.18 11:00',
        userId:'ThomasP',
        occurance:'102'
      }],
     }
  }
  
  componentDidUpdate(prev) {
    console.log(this.state)
  }

  hendleTaskName = event => {
    this.setState({ taskName: event.target.value });
  }

  hendleQuery = event => {
    this.setState({ query: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault()
    alert("dupa!")
  }

  display = popup => {
    switch (popup) {
      case 'create': {
        const { create } = this.state;
        return this.setState({ create: !create })
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
    const { create } = this.state;
    return(
      <div className='container'>
        { 
          create 
          ? <CreateTask
              userID={this.props.userID} 
              close={() => this.setState({ create: false })}
              onChangeTaskName={(event) => this.hendleTaskName(event)}
              onChangeQuery={(event) => this.hendleQuery(event)}
              taskName={this.state.taskName}
              query={this.state.query}
              onSubmit={(event) => this.onSubmit(event)}
            /> 
          : null
        }
        <Menu display={popup => this.display(popup)}/>
        <BaseTable tasks={this.state.tasks}/>
      </div>
    )
  }
}
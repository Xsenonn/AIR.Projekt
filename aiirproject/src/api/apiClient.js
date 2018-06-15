import axios from 'axios';
import Config from '../config'

class ApiClient {
  constructor() {
    this.api = axios.create({
      baseURL: Config().url.baseUrl,
    });
  }

  register = (userID,pass) => {
    return this.api.post('/register', {userID: userID, pass: pass})
    .then(response => {
      const { code } = response.data;
      return code;
    })
    .catch(error => console.log(error));
    /*return Promise.resolve(true);*/
  };

  login = (userID,pass) => {
    alert(userID + " " + pass)
    return this.api.post('/login', {userID: userID, pass: pass})
    .then(response => {
      if(response.data.code === 200){
        return true;
      }
      else {
        return false;
      }
    })
    .catch(error => console.log(error))
     /*return Promise.resolve(true);*/
  }

  sendFile = data => {
    /*console.log(data)*/
    return this.api.post('/sendFile', data)
    .then(response => {
      if(response.data.code === 200) {
        return true
      }
      else {
        return false;
      }
    })
    .catch(error => console.log(error))
     /*return Promise.resolve(true);*/
  }
//===========Not tested yet!!!====================
  getTasks = username => {
    return this.api.get('/getFiles', username)
    .then(response => {return response})
    .catch(error => console.log(error))
  }

  getTaskresult = payload => { 
    return this.api.get('/getResult', {
      params:{
        taskname:payload.taskname, 
        username: payload.username}
      })
    .then( response => {return response})
    .catch(error => console.log(error))
  }

}

export default new ApiClient();
import axios from 'axios';

class RequestService{
insertRequest(id, date, purpose, amount, description, category){
    return axios
      .post('http://localhost:3000/api/login?email='+email+"&password="+password, {
      },{
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        }
      }
      )
      .then(response => {
        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
      });
    } 
}

export default new RequestService();
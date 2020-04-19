import axios from "axios";

class AuthService{
  login(email, password){
    return axios
      .post('http://localhost:3000/api/login?email='+email+"&password="+password, {
        email,
        password
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

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

}
export default new AuthService();
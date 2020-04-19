import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import AuthService from '../../helper/auth.service';

class AdminCreate extends Component{
    constructor(props){
        super(props);
      this.state = {
          currentUser: AuthService.getCurrentUser()
      }
    }
    componentWillMount(){
        if(this.state.currentUser==null){
          this.props.history.push('/login');
          window.location.reload();
        }
        else{
          const currentUser = this.state.currentUser;
          if(currentUser.role !== "Admin"){
            this.props.history.push('/restricted');
            window.location.reload();
          }
        }
      }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="animated fadeIn">

    </div>
    )
  }
}

export default AdminCreate;

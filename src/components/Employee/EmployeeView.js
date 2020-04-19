import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import AuthService from '../../helper/auth.service';

class EmployeeView extends Component{
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
          if(currentUser.role !== "Employee"){
            this.props.history.push('/home');
            window.location.reload();
          }
        }
      }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="animated fadeIn">
      <Row>
        <Col lg={6}>
          <Card>
            <CardHeader>
              <strong><i className="icon-info pr-1"></i>Profile</strong>
            </CardHeader>
            <CardBody>
                <Table responsive striped hover>
                  <tbody>
                  <tr><td><strong>{`ID: `}</strong></td><td>{currentUser.id}</td></tr>
                  <tr><td>{`Name: `}</td><td><strong>{currentUser.first_name + ` `+ currentUser.last_name}</strong></td></tr>
                  <tr><td>{`Email: `}</td><td><strong>{currentUser.email}</strong></td></tr>
                  <tr><td>{`Department: `}</td><td><strong>{currentUser.department}</strong></td></tr>
                  <tr><td>{`Role: `}</td><td><strong>{currentUser.role}</strong></td></tr>
                  </tbody>
                </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
    )
  }
}

export default EmployeeView;

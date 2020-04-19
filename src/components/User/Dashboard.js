import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import AuthService from '../../helper/auth.service';
import axios from 'axios';

class Dashboard extends Component{
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
      }

  render() {
    const { currentUser } = this.state.currentUser;

    return (
      <div className="animated fadeIn">
        <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <strong><i className="icon-info pr-1"></i>Dashboard</strong>
            </CardHeader>
            <CardBody>
                <h4><b>FDM Group's Company Expense Application</b></h4>
                <h5>Main function(s):</h5><br/>
                <b>User(s)</b><br/>
                <ul>
                    <li>Can view user details under "Profile".</li>
                    <li>Can change email and password in "Settings".</li>
                </ul>
                <br/>
                <b>Employee(s)</b><br/>
                <ul>
                    <li>Can view past expenses and ongoing requests in "View Expenses".</li>
                    <li>Can create requests for reimbursable expenses in "Create Request".</li>
                </ul>
                <br/>
                <b>Manager(s)</b><br/>
                <ul>
                    <li>Can accept/deny employee ongoing requests in "Employee Requests".</li>
                    <li>Can view employee's past expenses under "Employee Expenses".</li>
                </ul>
                <br/>
                <b>Auditor(s)</b><br/>
                <ul>
                    <li>Can accept/deny flagged requests in "Flagged Requests".</li>
                </ul>
                <br/>
                <b>Admin(s)</b><br/>
                <ul>
                    <li>Can view ongoing requests and flag requests in "Ongoing Requests".</li>
                    <li>Can create a new user in "Create User" that will be added to the user database.</li>
                </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </div>
    )
  }
}

export default Dashboard;

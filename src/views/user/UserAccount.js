import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

//import usersData from './UsersData'

class UserAccount extends Component {
    constructor(props){
        super(props);

      // Initialize state -- PLACEHOLDER VALUE
      this.state = {
          email: 'john@gmail.com',
          first_name: 'John',
          last_name: 'Doe',
          role: 'Employee',
          department: 'Operations'
      }
    }

  render() {

    //const user = usersData.find( user => user.id.toString() === this.props.match.params.id)
    //const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>User id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                    <tr><td><strong>{`ID: `}</strong></td><td>{`jhn123`}</td></tr>
                    <tr><td>{`Name: `}</td><td><strong>{this.state.first_name + ` `+this.state.last_name}</strong></td></tr>
                    <tr><td>{`Email: `}</td><td><strong>{this.state.email}</strong></td></tr>
                    <tr><td>{`Department: `}</td><td><strong>{this.state.department}</strong></td></tr>
                    <tr><td>{`Role: `}</td><td><strong>{this.state.role}</strong></td></tr>
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

export default UserAccount;

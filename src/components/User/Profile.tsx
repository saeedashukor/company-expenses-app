import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

interface IProps {
}

interface IState {
  id: string,
  email: string,
  first_name: string,
  last_name: string,
  role: string,
  department: string
}


class Profile extends Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
      this.state = {
          id: '',
          email: '',
          first_name: '',
          last_name: '',
          role: '',
          department: ''
      }
      
    }

  componentDidMount(){
    
    this.setState({

    })
  }

  render() {
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
                    <tr><td><strong>{`ID: `}</strong></td><td>{this.state.id}</td></tr>
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

export default Profile;

import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table,Badge } from 'reactstrap';
import AuthService from '../../helper/auth.service';

class AdminOngoing extends Component{
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
      <Row>
        <Col xs="12" lg="12">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> <b>View Expenses</b>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <tbody>
                <tr>
                </tr>
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

export default AdminOngoing;

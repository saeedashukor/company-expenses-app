import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Badge } from 'reactstrap';
import AuthService from '../../helper/auth.service';

class ManagerExpense extends Component{
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
          if(currentUser.role !== "Manager"){
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
                <thead>
                <tr>
                  <th>Expense ID</th>
                  <th>Date</th>
                  <th>Purpose</th>
                  <th>Amount</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Status</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2020-01-14</td>
                  <td>Business meeting</td>
                  <td>23.00</td>
                  <td>Uber</td>
                  <td>Transport</td>
                  <td><Badge color="secondary">Successful</Badge></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2020-02-25</td>
                  <td>Business conference</td>
                  <td>120.00</td>
                  <td>Dukes Hotel</td>
                  <td>Accomodation</td>
                  <td><Badge color="secondary">Successful</Badge></td>
                </tr>


                </thead>
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

export default ManagerExpense;

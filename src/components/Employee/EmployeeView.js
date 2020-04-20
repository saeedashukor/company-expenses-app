import React, { Component, Children } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Badge } from 'reactstrap';
import AuthService from '../../helper/auth.service';
import axios from 'axios';

class EmployeeView extends Component{
    constructor(props){
        super(props);
      this.state = {
          currentUser: AuthService.getCurrentUser(),
          requests: []
      }
    }
    
    colourChange(status){
      if(status === "Ongoing" || status ==="Flagged"){
        return `warning`;
      }
      else if(status === "Accepted" ){
        return `success`;
      }
      else if(status ==="Denied"){
        return `danger`;
      }
      else if(status === "Successful" || status ==="Unsuccessful"){
        return `secondary`;
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
            this.props.history.push('/restricted');
            window.location.reload();
          }
        }
      }

      componentDidMount(){
        const { currentUser } = this.state;
        axios.get('http://localhost:3000/api/emp/expense/'+ currentUser.id)
        .then(res => {
          this.setState({
            requests: res.data
          });
          console.log(this.state.requests);
        })
        .catch(err => {
          console.log(err);
        });


      }

  render() {

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
                    <th>View</th>
                  </tr>
                  </thead>
                  <tbody>
                      {this.state.requests.map((request) => (
                        <tr>
                        <td>{request.expense_id}</td>
                        <td>{request.date}</td>
                        <td>{request.purpose}</td>
                        <td>{request.amount}</td>
                        <td>{request.description}</td>
                        <td>{request.category}</td>
                        <td><Badge color={this.colourChange(request.status)}>{request.status}</Badge></td>
                        </tr>
                      ))}
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

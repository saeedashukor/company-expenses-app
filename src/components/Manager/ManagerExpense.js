import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Badge } from 'reactstrap';
import AuthService from '../../helper/auth.service';
import axios from 'axios';
import { user } from '../../server/models';

class ManagerExpense extends Component{
    constructor(props){
        super(props);
      this.state = {
          currentUser: AuthService.getCurrentUser(),
          users: [],
          expenses: []
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

      componentDidMount(){
        const { currentUser } = this.state;
        let users = [];
        users = axios.post('http://localhost:3000/api/man/getEmp?department='+ currentUser.department)
        .then(res => {
          this.setState({
            users: res.data
          });
          console.log(this.state.users);
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
    <i className="fa fa-align-justify"></i> <b>View Employee Expenses</b>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead>
                <tr>
                  <th>Expense ID</th>
                  <th>Employee ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>View</th>
                </tr>

                <tbody>
                      {this.state.expenses.map((expense) => (
                        <tr>
                        <td>{expense.expense_id}</td>
                        <td>{expense.id}</td>
                        <td>{expense.date}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.description}</td>
                        <td>{expense.category}</td>
                        </tr>
                      ))}
                  </tbody>
                  </thead>
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

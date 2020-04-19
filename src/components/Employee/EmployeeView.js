import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import AuthService from '../../helper/auth.service';
import axios from 'axios';

class EmployeeView extends Component{
    constructor(props){
        super(props);
      this.state = {
          currentUser: AuthService.getCurrentUser(),
          requests: [{
            expense_id: '',
            date: '',
            purpose: '',
            amount: '',
            description:'',
            category:'',
            status:''
          }]
      }
    }
    colourChange(status){
      if(status === "Ongoing" || status ==="Flagged"){
        return `warning`;
      }
      else if(status === "Accepted" || status ==="Flagged - Accepted" ){
        return `success`;
      }
      else if(status ==="Denied" || status==="Flagged - Denied"){
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
        const results = axios.get('http://localhost:3000/api/emp/expense/'+currentUser.id)
          .then(res => {
            this.setState({
              requests: {
                expense_id: results.expense_id,
                date: results.date,
                purpose: results.purpose,
                amount: results.amount,
                description: results.description,
                category: results.category,
                status: results.status
              }
            });
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          })
        
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
                    <th>Category</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Samppa Nori</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
                    <td>Member</td>
                    <td>Member</td>
                    <td>Member</td>
                    <td>
                      <Badge>Active</Badge>
                    </td>
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

export default EmployeeView;

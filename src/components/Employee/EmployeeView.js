import React, { Component } from 'react';
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
        axios.get('http://localhost:3000/api/emp/expense/'+currentUser.id)
          .then(res => {
            this.setState({
              requests: res
            })
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }

      mapRequests(){
        let data = [];
        let requests = this.state.requests;
        for(let i =0;i<requests.length; i++){
          data.push({
            expense_id: requests[i].expense_id,
            date: requests[i].date,
            purpose: requests[i].purpose,
            amount: requests[i].amount,
            category: requests[i].category,
            description: requests[i].description,
            status: requests[i].status
          });
        }
        return (
          <>
          {data.length > 0 ? (
            data.map((s) => {
              return(
                <>
                </>
              );
            })
          ) : (
            <>
            </>
          )}
          </>
        );
        
      }

  render() {
    const { currentUser } = this.state.currentUser;
    const { requests } = this.state.requests;

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
                    <td><Badge color="warning">Ongoing</Badge></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>2020-02-25</td>
                    <td>Business conference</td>
                    <td>120.00</td>
                    <td>Dukes Hotel</td>
                    <td>Accomodation</td>
                    <td><Badge color="warning">Ongoing</Badge></td>
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

export default EmployeeView;

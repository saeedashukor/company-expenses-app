import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';
import AuthService from '../../helper/auth.service'
import axios from 'axios';
import fs from 'fs';

class Request extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
      collapse: true,
      fadeIn: true,
      timeout: 300,
      expense: {
        id:'',
        date: '',
        purpose: '',
        amount: 0,
        description: '',
        category: '',
        status: 'Ongoing',
        image: '',
        created_at: ''
      }
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

  onDateChange(e){
    this.setState({
      expense: { date: e.target.value }
    });
  }

  onPurposeChange(e){
    this.setState({
      expense: { purpose: e.target.value }
    });
  }

  onCategoryChange(e){
    this.setState({
      expense: { category: e.target.value }
    });
  }

  onDescriptionChange(e){
    this.setState({
      expense: { description: e.target.value }
    });
  }

  onAmountChange(e){
    this.setState({
      expense: { amount: e.target.value }
    });
  }

  onImageChange(e){
    this.setState({
      image: fs.readFileSync(e.target.files)
    })
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="animated fadeIn">
        <Container fluid>
        <Row>
          <Col xs="8">
            <Card>
              <CardHeader>
                <strong>Reimbursement Request Form</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label>Employee Name</Label><br />
                      <Label>Employee ID</Label> <br />
                      <Label>Department</Label><br />
                    </Col>
                    <Col xs="12" md="9">
                  <Label><strong>{currentUser.first_name} {currentUser.last_name}</strong></Label><br />
                  <Label><strong>{currentUser.id}</strong></Label><br />
                  <Label><strong>{currentUser.department}</strong></Label><br />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Date</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" placeholder="date" onChange={this.onDateChange} required/>
                      <FormText color="muted">Please enter the date the expense was incurred</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Purpose</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="State Business Purpose" onChange={this.onPurposeChange} required/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Category</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select" onSelect={this.onCategoryChange} required>
                        <option value="0">Select Type of Expense</option>
                        <option value="1">Accommodation</option>
                        <option value="2">Travel</option>
                        <option value="3">Transport</option>
                        <option value="3">Meals/Entertainment</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Description</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter Organisation Name" onChange={this.onDescriptionChange} required/>
                      <FormText className="help-block">Please enter organisation name (ie. name of hotel, name of airline company etc)</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Amount</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" pattern="[0-9]*" placeholder="£0.00" onChange={this.onAmountChange} required/>
                      <FormText color="muted">Please enter expense amount</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Attachment</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="file" name="uploaded_image" onIm accept="image/x-png,image/jpeg,image/jpg,application/pdf" required/>
                      <FormText color="muted">Please attach receipt or invoice (.JPEG, .JPG, .PNG, .PDF)</FormText>
                    </Col>
                  </FormGroup>

                  <div className="form-actions">
                        <Button type="submit" color="primary">Submit</Button>
                      </div>

                </Form>
                </CardBody>
                </Card>
                </Col>
                </Row>
                
        </Container>
      </div>
    );
  }
}

export default Request;

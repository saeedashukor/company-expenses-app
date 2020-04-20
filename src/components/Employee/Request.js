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
import CurrencyInput from '../User/CurrencyInput';
import AuthService from '../../helper/auth.service'
import RequestService from '../../helper/request.service';

class Request extends Component{
  constructor(props) {
    super(props);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.fileInput = React.createRef();
    this.onPurposeChange = this.onPurposeChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      expense_id: '',
      id: '',
      date: '',
      purpose: '',
      amount: 0,
      description: '',
      category: '',
      image: '',
    }
  }

  onDateChange(e){
    this.setState({date:e.target.value});
  }

  onPurposeChange(e){
    this.setState({purpose:e.target.value});
  }

  onCategoryChange(e){
    this.setState({category:e.target.value});
  }

  onDescriptionChange(e){
    this.setState({description:e.target.value});
  }

  onAmountChange(e){
    this.setState({amount:e.target.value});
  }

  onSubmit(e){
    const { currentUser } = this.state.currentUser;

    e.preventDefault();
    this.setState({
      id: currentUser.id,
      image: this.fileInput.current.files[0].name
    });
    RequestService.createRequest(this.state.expense_id,this.state.id, this.state.date, 
      this.state.purpose, this.state.amount, this.state.description, 
      this.state.category, Date.now(),this.state.image
      ).then( () => {
        console.log("Request submitted!");
        this.props.history.push('/emp/view');
      }).catch(err => {
        console.log(err);
      })
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
                <Form action="" onSubmit={this.onSubmit} method="post" encType="multipart/form-data" className="form-horizontal">
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
                      <CurrencyInput placeholder="£0.00" onChange={this.onAmountChange} required />
                      <FormText color="muted">Please enter expense amount</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Attachment</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="file" name="uploaded_image" onIm accept="image/*,application/pdf" ref={this.fileInput} required/>
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

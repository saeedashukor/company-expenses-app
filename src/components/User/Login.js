import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import AuthService from '../../helper/auth.service';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.incorrectDetails = this.incorrectDetails.bind(this);
    
    this.state = {
      email: "",
      password: "",
      loading: false,
      message: "",
      incorrect: false,
    };
  }
  
  componentWillMount(){
    localStorage.removeItem("user");
  }

  handleEmailChange(e){
    this.setState({
      email: e.target.value
    });
  }
  handlePasswordChange(e){
    this.setState({
      password: e.target.value
    });
  }

  incorrectDetails(bool){
    this.setState({
      incorrect: bool
    });
  }

  message(){
    if(this.state.incorrect === true){
      return(
        <>
        <p className="danger">Incorrect email or password!</p>
        </>
      )
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      message: "",
      loading: true
    });

    AuthService.login(this.state.email, this.state.password).then(
      (res) => {
        if(res == null){
          this.incorrectDetails(true);
        }
        else{
          this.incorrectDetails(false);
          this.props.history.push('/home');
          window.location.reload();
        }
      },
      error => {
        const resMessage = (error.response && error.data && error.response.data.message) || (error.message) || error.toString();
        console.log(resMessage);
        this.setState({
          loading: false,
          message: resMessage
        });
      }
    );
  }

  render(){
    return(
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.handleSubmit} ref={c=>{this.form = c;}}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign in to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} required/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} required/>
                      </InputGroup>
                      <div style={{color:`darkred`}}>{this.message()}</div>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  
                  <CardBody className="text-center">
                    <div>
                      <h3><b>Company Expenses App</b></h3>
                      <p>Welcome to our web app! <br>
                      </br>Please <b>login</b> to start.</p>

                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

interface IProps {
}

interface IState {
  email: string,
  password: string,

}

export default class Login extends Component<IProps,IState>{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      email: this.state.email,
      password: this.state.password
    });

  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value});
  }



  render() {


    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign in to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
                      </InputGroup>
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
                          <b>Test users:</b><br/>
                          <small>
                          Admin: peter@gmail.com, peter<br />
                          Employee: john@gmail.com, john<br />
                          Manager: rob@outlook.com, rob<br />
                          Auditor: jane@gmail.com, jane<br/>
                      </small>
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
};
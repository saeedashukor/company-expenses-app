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

interface IProps {
}

interface IState {
  collapse: boolean,
  fadeIn: boolean,
  timeout: number

}

class Request extends Component<IProps, IState>{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
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
                    <Label><strong>John Doe</strong></Label><br />
                    <Label><strong>jhn123</strong></Label><br />
                    <Label><strong>Operations</strong></Label><br />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Date</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" placeholder="date" required/>
                      <FormText color="muted">Please enter the date the expense was incurred</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Category</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select" required>
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
                      <Label htmlFor="email-input">Description</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter Organisation Name" required/>
                      <FormText className="help-block">Please enter organisation name (ie. name of hotel, name of airline company etc)</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Amount</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" pattern="[0-9]*" placeholder="£0.00" required/>
                      <FormText color="muted">Please enter expense amount</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Attachment</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="file" name="uploaded_image" accept=""/>
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

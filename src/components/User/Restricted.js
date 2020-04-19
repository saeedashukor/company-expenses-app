import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Restricted extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="clearfix">
                <h1 className="float-left display-3 mr-4">404</h1>
                <h4 className="pt-3">Oops! You do not have access to this page.</h4>
                <p className="text-muted float-left">Click <Link to ="/home">here</Link> to go back to Home.</p>
              </div>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Restricted;

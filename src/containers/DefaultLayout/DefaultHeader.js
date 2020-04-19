import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  signOut(e) {
    e.preventDefault();
    localStorage.removeItem("user");
    this.props.history.push('/login');
    window.location.reload();
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand className="company_header"><b>FDM</b></AppNavbarBrand>
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/home" className="nav-link" >Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/login" className="nav-link" >Logout</NavLink>
          </NavItem>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;

import React from 'react';


// User -- incl. Employee, Auditor, Manager, Admin 
const UserAccount = React.lazy(() => import('./views/user/UserAccount')); // display user account details (profile)
const UserSettings = React.lazy(() => import('./views/user/UserSettings')); // edit account settings
const Dashboard = React.lazy(() => import('./views/user/Dashboard'));

// Employee 
const RequestForm = React.lazy(() => import('./views/employee/RequestForm'));
const EmployeeRequestView = React.lazy(() => import('./views/employee/EmployeeRequestView'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/user/account', name: 'Account', component: UserAccount },
  { path: '/user/settings', name: 'Settings', component: UserSettings },
  { path: '/emp/create-request', name: 'RequestForm', component: RequestForm },
  { path: '/emp/request-view', name: 'EmployeeReuqestView', component: EmployeeRequestView },
];


export default routes;

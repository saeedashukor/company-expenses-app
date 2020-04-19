import Profile from '../components/User/Profile';
import Login from '../components/User/Login';
import Request from '../components/Employee/Request';
/*
import EmployeeView from '';
import AuditorView from '';
import ManagerView from '';
import AdminView from '';
import PreviewRequest from '';
import CreateUser from '';
*/

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/login', name: 'Login', component: Login },
  { path: '/emp/request', name: 'Request', component: Request },
  /*
  { path: '/emp/view', name: 'Employee View Request', component: EmployeeView },
  { path: '/aud/view', name: 'Auditor View Request' , component: AuditorView },
  { path: '/man/view', name: 'Manager View Request', component: ManagerView },
  { path: '/admin/view', name: 'Admin View Request', component: AdminView },
  { path: '/admin/create', name: 'Admin Create User', component: CreateUser },
  */
];


export default routes;

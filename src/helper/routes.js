import Profile from '../components/User/Profile';
import Login from '../components/User/Login';
import Request from '../components/Employee/Request';
import EmployeeView from '../components/Employee/EmployeeView';
import ManagerExpense from '../components/Manager/ManagerExpense';
import ManagerRequest from '../components/Manager/ManagerRequest';
import AuditorFlagged from '../components/Auditor/AuditorFlagged';
import AdminOngoing from '../components/Admin/AdminOngoing';
import AdminCreate from '../components/Admin/AdminCreate';
import Restricted from '../components/User/Restricted';
import Dashboard from '../components/User/Dashboard'

const routes = [
  { path: '/', exact: true, name: 'Home'},
  { path: '/home', name: 'Dashboard', component: Dashboard },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/login', name: 'Login', component: Login },
  { path: '/emp/request', name: 'Request', component: Request },
  { path: '/emp/view', name: 'Employee View', component: EmployeeView },
  { path: '/man/request', name: 'Employee Requests', component: ManagerRequest },
  { path: '/man/expense', name: 'Employee Expenses', component: ManagerExpense },
  { path: '/auditor/flagged', name: 'Flagged Requests', component: AuditorFlagged },
  { path: '/admin/ongoing', name: 'Ongoing Requests', component: AdminOngoing },
  { path: '/admin/create', name: 'Create User', component: AdminCreate },
  { path: '/restricted', name: 'Restricted', component: Restricted }
];


export default routes;

import Dashboard from '../components/Dashboard'
import Reports from '../components/Reports'
import LoginPage from '../pages/LoginPage'
import InlineForm from '../components/UserComponet/CreateUser'
import UserList from '../components/UserComponet/UserList'
import UserManageProfile from '../components/UserComponet/UserManageProfile'
import UserEdit from '../components/Forms/EditForm'

export const RoutesConfig = [
  {
    path: '/',
    exact: true,
    restricted: true,
    component: LoginPage,
  }, 
  {
    path: '/login',
    exact: true,
    restricted: false,
    component: LoginPage,
  },
  {
    path: '/dashboard',
    exact: true,
    restricted: true,
    component: Dashboard,
  },
  {
    path: '/reports',
    exact: true,
    restricted: true,
    component: Reports,
  },
  {
    path: '/create-user',
    exact: true,
    restricted: true,
    component: InlineForm,
  },
  {
    path: '/user-list',
    exact: true,
    restricted: true,
    component: UserList,
  },
  {
    path: '/user-profile',
    exact: true,
    restricted: true,
    component: UserManageProfile,
  },
  {
    path: '/user-edit',
    exact: true,
    restricted: true,
    component: UserEdit,
  },
  
]

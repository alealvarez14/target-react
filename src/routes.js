import routesPaths from './constants/routesPaths';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import ForgotPassword from './containers/ForgotPassword';
import NotFoundPage from './containers/NotFoundPage';

const routes = [
  {
    path: routesPaths.index,
    component: HomePage,
    exact: true,
    private: true
  },
  {
    path: routesPaths.login,
    component: LoginPage
  },
  {
    path: routesPaths.signUp,
    component: SignUpPage
  },
  {
    path: routesPaths.forgotPassword,
    component: ForgotPassword
  },
  {
    component: NotFoundPage
  }
];

export default routes;

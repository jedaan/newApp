import App from './App';
import HomePage from './pages/homePage';
import LogInPage from './pages/logInPage';
import RegisterPage from './pages/registerPage';
import NotFoundPage from './pages/notFoundPage';
import CvPage from './pages/cvPage';
export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...LogInPage,
        path: '/logIn/:email?/:logInFromRegister?'
      },
      {
        ...RegisterPage,
        path: '/register'
      },
      {
        ...CvPage,
        path: '/cvpage'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];

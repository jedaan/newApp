import App from './index/App'
import HomePage from './index/pages/homePage'
import LogInPage from './index/pages/logInPage';
import RegisterPage from './index/pages/registerPage';
import NotFoundPage from './index/pages/notFoundPage'
import CvPage from './index/pages/cvPage';
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
        path: '/logIn/:email?/:logInFromRegister?',
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
]

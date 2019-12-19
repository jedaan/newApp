import * as type from './type';
import skillsData from '../../components/register/skillsData';

export const fetchRegistrationData = () => async (dispatch, getState, api) => {
  await api
    .post('/users/newuser')
    .then(response => {
      const { data } = getState();
      dispatch({
        type: type.FETCH_REGISTER_DATA,
        payload: response.data
      });
    })
    .catch(error => {
      console.log('error', error.response);
    });
};

export const registerNewUser = (
  User,
  Education,
  Experience,
  SkillsData,
  LanguagesData
) => async (dispatch, getState, api) => {
  let Skills = [],
    Languages = [];

  for (let i = 0; i < SkillsData.length; i++) {
    Skills.push(SkillsData[i].skill);
  }
  for (let i = 0; i < LanguagesData.length; i++) {
    Languages.push(LanguagesData[i].language);
  }

  const response = await api.post('/users/RegisterNewUser', {
    User,
    Education,
    Experience,
    Skills,
    Languages
  });
  dispatch({
    type: type.FETCH_REGISTER_DATA,
    payload: response.data
  });
};

export const firstLogIn = (email, password) => async (
  dispatch,
  getState,
  api
) => {
  try {
    await api
      .post('/users/firstLogIn', {
        email,
        password
      })
      .then(response => {
        let user = response.data;
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({
          type: type.SUCCESS_LOG_IN,
          payload: true
        });
      })
      .catch(function(error) {
        dispatch({
          type: type.FAILED_LOG_IN,
          payload: false
        });
      });
  } catch (e) {
    console.log('error - firstLogIn ', e.message);
  }
};

export const logIn = (email, password) => async (dispatch, getState, api) => {
  try {
    await api
      .post('/users/Login', {
        email,
        password
      })
      .then(response => {
        let user = response.data;
        console.log('data Login', response);
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({
          type: type.SUCCESS_LOG_IN,
          payload: user
        });
      })
      .catch(function(error) {
        localStorage.clear();
        dispatch({
          type: type.FAILED_LOG_IN,
          payload: false
        });
      });
  } catch (e) {
    console.log('error - logIn ', e.message);
  }
};

export const logOut = () => async (dispatch, getState, api) => {
  try {
    console.log('logout');
    localStorage.clear();
    dispatch({
      type: type.SUCCESS_LOG_OUT,
      payload: false
    });
  } catch (e) {
    console.log('error - logOut ', e.message);
  }
};

export const checkEmail = email => async (dispatch, getState, api) => {
  try {
    await api
      .post('/users/CheckIfEmailExists', {
        email
      })
      .then(response => {
        let valid = response.data;
        dispatch({
          type: type.VALID_EMAIL,
          payload: valid
        });
      });
  } catch (e) {
    console.log('error - checkEmail ', e.message);
  }
};

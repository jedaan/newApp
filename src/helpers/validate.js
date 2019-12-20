export const validateText = (value) => {
  if (value === "")
    return false;
  return /^[A-Za-z ]+$/.test(value);
};

export const validateEmail = (value) => {
  if (value === "")
    return false;
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
};

export const validateNumber = (value) => {
  if (value === "")
    return false;
  return /^[0-9]+$/.test(value);
};

export const validate = (dataToValidate, fieldToValidate = '', filedNotToValidate = '') => {
  if (dataToValidate === undefined) {
    return false;
  }
  if (filedNotToValidate !== '') {
    for (let key in dataToValidate) {
      if (dataToValidate[key] === false) {
        if (filedNotToValidate === key) {
          continue;
        }else
        {
          return false;
        }
      }
    }
    return true;
  }

  else if (fieldToValidate !== '') {

    for (let key in dataToValidate) {
      if (dataToValidate[key] === true) {
        if (fieldToValidate === key) {
          return true;
        }
      }
    }
    return false;
  } else {
    for (let key in dataToValidate) {
      if (dataToValidate[key] === false) {
        return false;
      }
    }
  }
  return true;
};

export const isEmptyObject = (obj) => {
  if (obj === undefined) {
    return true;
  }
  if(typeof(obj) === "boolean"){
    return false;
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
};

export const isEmptyArray = (obj) => {
  if (!isEmptyObject(obj)) {
    return obj.length <= 0;
  }
  return true;
};

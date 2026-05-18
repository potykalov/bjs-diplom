'use strict';

const userForm = new UserForm();

userForm.loginFormCallback = function (data) {
  const result = ApiConnector.login(data, function (result) {
    if (result.success) {
      location.reload();
      return;
    }
    userForm.setLoginErrorMessage(result.error);
  });
};

userForm.registerFormCallback = function (data) {
  const result = ApiConnector.register(data, function (result) {
    if (result.success) {
      location.reload();
      return;
    }
    userForm.setRegisterErrorMessage(result.error);
  });
};

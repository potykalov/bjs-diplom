'use strict';

const userForm = new UserForm();

userForm.loginFormCallback = function (data) {
  ApiConnector.login(data, function (result) {
    if (result.success) {
      location.reload();
      return;
    }
    userForm.setLoginErrorMessage(result.error);
  });
};

userForm.registerFormCallback = function (data) {
  ApiConnector.register(data, function (result) {
    if (result.success) {
      location.reload();
      return;
    }
    userForm.setRegisterErrorMessage(result.error);
  });
};

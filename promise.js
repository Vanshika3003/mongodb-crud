const cognitoChangePassword = (accessToken, oldPassword, newPassword) => {
  return new Promise((res, rej) => {
    cognitoIdentityServiceProvider.changePassword(params, function(err, data) {
      if (err) {
        console.log(err, err.stack);
        rej(err);
      } else {
        res(data);
      }
    });
  });
};
cognitoChangePassword();
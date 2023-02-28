export const getSentenceFromCamelCase = (message) => {
  let pattern = /[A-Za-z]/g;

  let messages = message.match(pattern);

  let errorMessage = "";

  for (let i = 0; i < messages.length; i++) {
    errorMessage +=
      messages[i] === messages[i].toUpperCase()
        ? " " + messages[i].toLowerCase()
        : messages[i];
  }

  return (errorMessage[0].toUpperCase() + errorMessage.slice(1)).trim();
};

//require validation
export const checkValidation = (errors, data) => {
  const finalErrors = {};

  Object.keys(data).forEach((key) => {
    if (!data[key]) {
      finalErrors[key] = `${getSentenceFromCamelCase(key)} is required.`;
    }
  });

  Object.keys(errors).forEach((key) => {
    if (key === "confirm" && data[key] === false) {
      finalErrors[key] = `You need to check terms and conditions`;
    }
  });

  Object.keys(errors).forEach((key) => {
    if (errors[key] !== "") {
      finalErrors[key] = errors[key];
    }
  });

  return finalErrors;
};

export const checkLoginValidation = (errors, data) => {
  const finalErrors = {};

  Object.keys(data).forEach((key) => {
    if (!data[key]) {
      finalErrors[key] = `${getSentenceFromCamelCase(key)} is required.`;
    }
  });
  return finalErrors;
};

export const checkLogin = (users, email, password) => {
  const finalErrors = {};
  console.log(users);
  let userauth = users.find(
    (item) => item.account.email === email && item.account.password === password
  );
  console.log(userauth);
  let auth = users.find(
    (item) => item.account.email === email && item.account.password === password
  );
  if (auth !== undefined) {
    return finalErrors;
  } else {
    return (finalErrors.authError = `${getSentenceFromCamelCase(
      email
    )} or ${getSentenceFromCamelCase(password)} is not valid`);
  }
};

export const emailValidation = (email) => {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(validRegex)) {
    return true;
  } else {
    return false;
  }
};

export const passwordValidation = (password) => {
  let validRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (password.match(validRegex)) {
    return true;
  } else {
    return false;
  }
};

export const confirmPasswordValidation = (password, confirmPassword) => {
  const finalErrors = {};
  if (password !== undefined && confirmPassword !== undefined) {
    if (password.match(confirmPassword)) {
      return finalErrors;
    } else {
      finalErrors.confirmPassword =
        "confirm password doesn't match with password";
      return finalErrors;
    }
  }
};

export const confirmTermsAndConditions = (confirm) => {
  const finalErrors = {};
  if (confirm !== true) {
    finalErrors.confirm = "You need to check terms and conditions";
    return finalErrors;
  } else {
    return finalErrors;
  }
};

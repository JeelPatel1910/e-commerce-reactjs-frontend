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
export const checkValidation = (errors, data) => {
  const finalErrors = {};

  Object.keys(data).forEach((key) => {
    if (!data[key]) {
      finalErrors[key] = `${getSentenceFromCamelCase(key)} is required.`;
    }
  });

  Object.keys(errors).forEach((key) => {
    if (errors[key] !== "") {
      finalErrors[key] = errors[key];
    }
  });

  return finalErrors;
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
